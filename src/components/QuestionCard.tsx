import { useId } from 'react';
import type { Question } from '../content/types';
import { findChapter } from '../content';
import { grade, hasValue, isMultipleChoice, type AnswerState } from '../lib/grade';
import { fmt } from '../lib/math';
import { Figure } from './Figure';
import { Rich } from './Math';

export type QuestionMode = 'check' | 'chapter' | 'supplemental' | 'exam' | 'review';

export interface QuestionCardProps {
  q: Question;
  mode: QuestionMode;
  index: number;
  answer: AnswerState | undefined;
  onAnswer: (patch: AnswerState) => void;
}

const LETTERS = 'ABCD';

function AnswerText({ q }: { q: Question }) {
  if (q.choices) return <Rich text={q.choices[q.answer]} />;
  return (
    <span>
      {fmt(q.answer)}
      {q.unit ? ' ' + q.unit : ''}
    </span>
  );
}

/**
 * Modes: check/chapter show Check → feedback → solution + Try again.
 * supplemental shows Check + Reveal answer (no solution).
 * exam collects answers only. review is locked and shows user answer, correct answer, solution.
 */
export function QuestionCard({ q, mode, index, answer, onAnswer }: QuestionCardProps) {
  const a = answer ?? {};
  const inputId = useId();
  const isMC = isMultipleChoice(q);
  const checked = !!a.checked;
  const correct = mode === 'review' ? grade(q, a.value) : !!a.correct;
  const practice = mode === 'check' || mode === 'chapter' || mode === 'supplemental';
  const locked = mode === 'review' || (checked && correct);
  const finished = mode === 'review' || checked;
  const valuePresent = hasValue(a.value);
  const chapter = findChapter(q.chapter);
  const typeLabel = q.type === 'diagram' ? 'Diagram' : isMC ? 'Multiple choice' : 'Numeric';

  const check = () => onAnswer({ checked: true, correct: grade(q, a.value) });
  const retry = () => onAnswer({ value: null, checked: false, correct: false });

  const showCheck = practice && valuePresent && !checked && !a.revealed;
  const showRetry = practice && checked && !correct;
  const showReveal = mode === 'supplemental' && !a.revealed && !(checked && correct);
  const showSolution = mode !== 'exam' && mode !== 'supplemental' && finished && (q.solution?.length ?? 0) > 0;

  let feedback: { tone: 'good' | 'bad' | 'neutral'; node: React.ReactNode } | null = null;
  if (mode === 'review') {
    feedback = {
      tone: correct ? 'good' : 'bad',
      node: (
        <span>
          {correct ? 'Correct. ' : 'Missed. '}Your answer: {valuePresent ? (isMC ? LETTERS[a.value as number] : String(a.value)) : '—'} · Correct answer: <AnswerText q={q} />
        </span>
      ),
    };
  } else if (a.revealed) {
    feedback = { tone: 'neutral', node: <span>Answer: <AnswerText q={q} /></span> };
  } else if (checked) {
    feedback = { tone: correct ? 'good' : 'bad', node: correct ? 'Correct.' : 'Not yet. Check your work and try again.' };
  }

  return (
    <article className="card flex flex-col gap-3 p-[18px_20px]" aria-labelledby={`${inputId}-prompt`}>
      <div className="flex items-center gap-2 text-[12px] text-muted font-semibold">
        <span className="w-[26px] h-[26px] rounded-lg bg-soft grid place-items-center text-ink font-mono text-[12px]" aria-hidden="true">{index + 1}</span>
        <span className="sr-only">Question {index + 1}.</span>
        <span>{typeLabel}</span>
        {(mode === 'exam' || mode === 'review') && chapter && <span>· Chapter {chapter.number}</span>}
      </div>
      <div id={`${inputId}-prompt`} className="text-[17px]"><Rich text={q.prompt} /></div>
      {q.figure && <div className="flex justify-center"><Figure spec={q.figure} /></div>}

      {isMC ? (
        <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]" role="group" aria-label="Choices">
          {q.choices!.map((c, i) => {
            const selected = a.value === i;
            const right = finished && i === q.answer;
            const wrong = finished && selected && i !== q.answer;
            const state = right ? 'right' : wrong ? 'wrong' : selected ? 'selected' : undefined;
            return (
              <button key={i} type="button" className="choice" data-state={state} disabled={locked} aria-pressed={selected} onClick={() => onAnswer({ value: i, checked: false })}>
                <span className="font-extrabold text-muted mr-2" aria-hidden="true">{LETTERS[i]}</span>
                <span className="sr-only">Choice {LETTERS[i]}: </span>
                <Rich text={c} />
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center gap-2.5 flex-wrap">
          <label htmlFor={inputId} className="sr-only">Numeric answer</label>
          <input
            id={inputId}
            type="text"
            inputMode="decimal"
            className="field w-[160px]"
            value={a.value == null ? '' : String(a.value)}
            onChange={(e) => onAnswer({ value: e.target.value, checked: false })}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && practice && valuePresent && !checked) check();
            }}
            disabled={locked}
            placeholder="Your answer"
          />
          {q.unit && <span className="text-muted text-[14px]">{q.unit}</span>}
        </div>
      )}

      {(showCheck || showRetry || showReveal) && (
        <div className="flex gap-2 flex-wrap">
          {showCheck && <button type="button" className="btn btn-primary" onClick={check}>Check</button>}
          {showRetry && <button type="button" className="btn" onClick={retry}>Try again</button>}
          {showReveal && <button type="button" className="btn" onClick={() => onAnswer({ revealed: true })}>Reveal answer</button>}
        </div>
      )}

      {feedback && (
        <div className="feedback" data-tone={feedback.tone} role="status">{feedback.node}</div>
      )}

      {showSolution && (
        <div className="border-t border-dashed border-line pt-3 fade-up">
          <div className="text-[13px] font-semibold text-muted tracking-[.08em] [font-variant:small-caps]">Step-by-step solution</div>
          <ol className="mt-1.5 pl-[22px] list-decimal flex flex-col gap-1">
            {q.solution!.map((s, i) => <li key={i}><Rich text={s} /></li>)}
          </ol>
        </div>
      )}
    </article>
  );
}
