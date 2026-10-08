import { create } from 'zustand';
import type { AnswerState } from '../lib/grade';

/** In-session answers for lesson checks and problem pages. Not persisted. */
interface PracticeState {
  answers: Record<string, AnswerState>;
  openExamples: Record<string, boolean>;
  setAnswer: (id: string, patch: AnswerState) => void;
  toggleExample: (key: string) => void;
}

export const usePractice = create<PracticeState>()((set) => ({
  answers: {},
  openExamples: {},
  setAnswer: (id, patch) => set((s) => ({ answers: { ...s.answers, [id]: { ...(s.answers[id] ?? {}), ...patch } } })),
  toggleExample: (key) => set((s) => ({ openExamples: { ...s.openExamples, [key]: !s.openExamples[key] } })),
}));
