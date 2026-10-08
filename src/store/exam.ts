import { create } from 'zustand';
import { questions, chaptersWithQuestions } from '../content';
import type { AnswerState } from '../lib/grade';
import { buildExam, scoreExam, type ExamCount, type ExamResult } from '../lib/exam';
import { useProgress } from './progress';

export type ExamStage = 'setup' | 'running' | 'done';

interface ExamState {
  stage: ExamStage;
  chapters: Record<string, boolean>;
  count: ExamCount;
  timer: boolean;
  minutes: number;
  items: string[];
  answers: Record<string, AnswerState>;
  remaining: number;
  result: ExamResult | null;
  toggleChapter: (id: string) => void;
  setCount: (n: ExamCount) => void;
  setTimer: (on: boolean) => void;
  setMinutes: (m: number) => void;
  setAnswer: (id: string, patch: AnswerState) => void;
  start: () => void;
  submit: () => void;
  reset: () => void;
}

let timerId: ReturnType<typeof setInterval> | undefined;
const stopTimer = () => {
  if (timerId !== undefined) clearInterval(timerId);
  timerId = undefined;
};

export const useExam = create<ExamState>()((set, get) => ({
  stage: 'setup',
  chapters: Object.fromEntries(chaptersWithQuestions.map((c) => [c.id, true])),
  count: 10,
  timer: false,
  minutes: 15,
  items: [],
  answers: {},
  remaining: 0,
  result: null,
  toggleChapter: (id) => set((s) => ({ chapters: { ...s.chapters, [id]: !s.chapters[id] } })),
  setCount: (count) => set({ count }),
  setTimer: (timer) => set({ timer }),
  setMinutes: (minutes) => set({ minutes }),
  setAnswer: (id, patch) => set((s) => ({ answers: { ...s.answers, [id]: { ...(s.answers[id] ?? {}), ...patch } } })),
  start: () => {
    const s = get();
    const items = buildExam(questions, s.chapters, s.count);
    const remaining = s.timer ? s.minutes * 60 : 0;
    set({ stage: 'running', items, answers: {}, remaining, result: null });
    stopTimer();
    if (remaining) {
      timerId = setInterval(() => {
        const cur = get();
        if (cur.stage !== 'running') return stopTimer();
        if (cur.remaining <= 1) {
          set({ remaining: 0 });
          cur.submit();
          return;
        }
        set({ remaining: cur.remaining - 1 });
      }, 1000);
    }
  },
  submit: () => {
    stopTimer();
    const s = get();
    if (s.stage !== 'running') return;
    const result = scoreExam(questions, s.items, s.answers, s.chapters);
    set({ stage: 'done', result });
    useProgress.getState().addScore(result);
  },
  reset: () => {
    stopTimer();
    set({ stage: 'setup', items: [], answers: {}, result: null, remaining: 0 });
  },
}));
