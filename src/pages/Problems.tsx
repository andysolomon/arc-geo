import { QuestionCard } from '../components/QuestionCard';
import { questions } from '../content';
import type { SectionRef } from '../content/types';
import { usePractice } from '../store/practice';
import { SectionFooter } from './SectionFooter';

/** Chapter Problems (full solutions) and Supplemental problems (answer only with reveal). */
export function Problems({ sec }: { sec: SectionRef }) {
  const set = sec.kind === 'problems' ? 'chapter' : 'supplemental';
  const qs = questions.filter((q) => q.chapter === sec.chapter.id && q.set === set);
  const answers = usePractice((s) => s.answers);
  const setAnswer = usePractice((s) => s.setAnswer);
  return (
    <>
      <div className="eyebrow">Chapter {sec.chapter.number}</div>
      <h1 className="page-title">{sec.title}</h1>
      <section className="mb-6" aria-labelledby="problems-h">
        <h2 id="problems-h" className="h2">{set === 'chapter' ? 'Problems with full solutions' : 'Supplemental problems'}</h2>
        <p className="mt-1 mb-3.5 text-muted text-[14px]">{set === 'chapter' ? 'Each problem shows a step-by-step solution after you check it.' : 'Answers only. Check your answer, or reveal it.'}</p>
        {qs.length ? (
          <div className="flex flex-col gap-3.5">
            {qs.map((q, i) => <QuestionCard key={q.id} q={q} mode={set} index={i} answer={answers[q.id]} onAnswer={(patch) => setAnswer(q.id, patch)} />)}
          </div>
        ) : (
          <div className="card text-[14px] text-muted">No problems for this chapter yet. Add them in <code>src/content/questions.ts</code> with <code>chapter: '{sec.chapter.id}'</code>.</div>
        )}
      </section>
      <SectionFooter id={sec.id} />
    </>
  );
}
