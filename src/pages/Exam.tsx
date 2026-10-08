import { useEffect, useId } from 'react';
import { QuestionCard } from '../components/QuestionCard';
import { chapters, chaptersWithQuestions, findQuestion, questions } from '../content';
import { grade } from '../lib/grade';
import { EXAM_COUNTS, examPool, formatClock } from '../lib/exam';
import { useExam } from '../store/exam';
import { useProgress } from '../store/progress';

export function Exam() {
  const ex = useExam();
  const scores = useProgress((s) => s.scores);
  const timerId = useId();
  const minutesId = useId();
  const pool = examPool(questions, ex.chapters);

  useEffect(() => {
    if (ex.stage !== 'setup') window.scrollTo({ top: 0 });
  }, [ex.stage]);

  return (
    <>
      <div className="eyebrow">Assessment</div>
      <h1 className="page-title">Customized Full-Length Exam</h1>

      {ex.stage === 'setup' && (
        <div className="grid gap-4 items-start grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          <form className="card flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); ex.start(); }}>
            <fieldset className="border-0 p-0 m-0 min-w-0">
              <legend className="font-bold mb-2">Chapters</legend>
              <div className="flex flex-col gap-2">
                {chaptersWithQuestions.map((ch) => (
                  <label key={ch.id} className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" checked={!!ex.chapters[ch.id]} onChange={() => ex.toggleChapter(ch.id)} />
                    <span>Chapter {ch.number} · {ch.title}</span>
                    <span className="text-muted text-[12px]">{questions.filter((q) => q.chapter === ch.id).length} in bank</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <div className="font-bold mb-2" id="count-label">Number of questions</div>
              <div className="seg" role="radiogroup" aria-labelledby="count-label">
                {EXAM_COUNTS.map((n) => <button key={n} type="button" role="radio" aria-checked={ex.count === n} onClick={() => ex.setCount(n)}>{n}</button>)}
              </div>
              <div className="text-[12px] text-muted mt-1.5" aria-live="polite">{pool.length} questions match your chapters.</div>
            </div>
            <div>
              <label htmlFor={timerId} className="flex items-center gap-2.5 cursor-pointer font-bold"><input id={timerId} type="checkbox" checked={ex.timer} onChange={(e) => ex.setTimer(e.target.checked)} />Timer</label>
              {ex.timer && (
                <div className="slider-label mt-2">
                  <div className="flex justify-between"><label htmlFor={minutesId}>Minutes</label><b aria-hidden="true">{ex.minutes}</b></div>
                  <input id={minutesId} type="range" min={5} max={60} step={5} value={ex.minutes} onChange={(e) => ex.setMinutes(+e.target.value)} />
                </div>
              )}
            </div>
            <button type="submit" disabled={pool.length === 0} className="btn btn-primary px-4 py-3 rounded-xl text-[15px] font-extrabold">Start exam</button>
          </form>
          <section className="card" aria-labelledby="scores-h">
            <h2 id="scores-h" className="font-bold mb-2 text-[17px]">Past scores</h2>
            {scores.length ? (
              <ul className="flex flex-col gap-2 list-none p-0">
                {scores.slice(0, 6).map((r, i) => (
                  <li key={r.date + i} className="flex justify-between gap-2.5 text-[14px] border-b border-line pb-1.5">
                    <span className="text-muted">{new Date(r.date).toLocaleDateString()}</span>
                    <span>{r.chapters.map((c) => c.replace('ch', 'Ch ')).join(', ')}</span>
                    <b>{r.correct}/{r.total}</b>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted text-[14px]">No exams taken yet.</p>
            )}
          </section>
        </div>
      )}

      {ex.stage === 'running' && <Running />}
      {ex.stage === 'done' && ex.result && <Done />}
    </>
  );
}

function Running() {
  const ex = useExam();
  const items = ex.items.map(findQuestion).filter((q): q is NonNullable<typeof q> => !!q);
  const answered = items.filter((q) => { const a = ex.answers[q.id]; return a && a.value != null && a.value !== ''; }).length;
  return (
    <>
      <div className="sticky top-[61px] z-10 flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-panel border border-line mb-4">
        <span className="text-[14px] text-muted" aria-live="polite">{answered} of {items.length} answered</span>
        <div className="flex-1" />
        {ex.timer && (
          <span className="font-mono text-[15px] tabular-nums" role="timer" aria-live="off" aria-label={`Time remaining ${formatClock(ex.remaining)}`} style={{ color: ex.remaining < 60 ? 'var(--red)' : 'var(--ink)' }}>{formatClock(ex.remaining)}</span>
        )}
        <button type="button" className="btn btn-primary" onClick={ex.submit}>Submit</button>
      </div>
      <section className="mb-6" aria-labelledby="exam-h">
        <h2 id="exam-h" className="h2">Exam</h2>
        <p className="mt-1 mb-3.5 text-muted text-[14px]">Answer every question. Then press Submit.</p>
        <div className="flex flex-col gap-3.5">
          {items.map((q, i) => <QuestionCard key={q.id} q={q} mode="exam" index={i} answer={ex.answers[q.id]} onAnswer={(patch) => ex.setAnswer(q.id, patch)} />)}
        </div>
      </section>
    </>
  );
}

function Done() {
  const ex = useExam();
  const r = ex.result!;
  const pct = r.total ? Math.round((100 * r.correct) / r.total) : 0;
  const missed = ex.items.map(findQuestion).filter((q): q is NonNullable<typeof q> => !!q && !grade(q, ex.answers[q.id]?.value));
  return (
    <>
      <div className="grid gap-4 mb-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <div className="rounded-2xl p-5 bg-accent text-on-accent" role="status">
          <div className="text-[13px] opacity-85 font-semibold">Score</div>
          <div className="text-[52px] font-medium font-display leading-none">{pct}%</div>
          <div className="text-[14px] mt-1.5">{r.correct} of {r.total} correct</div>
        </div>
        <section className="card flex flex-col gap-2.5" aria-labelledby="breakdown-h">
          <h2 id="breakdown-h" className="font-bold text-[17px]">Per-chapter breakdown</h2>
          {chapters.filter((ch) => r.per[ch.id]).map((ch) => {
            const t = r.per[ch.id];
            return (
              <div key={ch.id}>
                <div className="flex justify-between text-[13px]"><span>Chapter {ch.number} · {ch.title}</span><b>{t.correct}/{t.total}</b></div>
                <div className="progress mt-1" role="progressbar" aria-label={`Chapter ${ch.number} score`} aria-valuenow={t.correct} aria-valuemin={0} aria-valuemax={t.total}><div style={{ width: Math.round((100 * t.correct) / t.total) + '%' }} /></div>
              </div>
            );
          })}
          <button type="button" className="btn mt-1.5 self-start" onClick={ex.reset}>New exam</button>
        </section>
      </div>
      {missed.length > 0 && (
        <section className="mb-6" aria-labelledby="review-h">
          <h2 id="review-h" className="h2">Review missed items</h2>
          <p className="mt-1 mb-3.5 text-muted text-[14px]">Each missed question shows the correct answer and the solution.</p>
          <div className="flex flex-col gap-3.5">
            {missed.map((q, i) => <QuestionCard key={q.id} q={q} mode="review" index={i} answer={ex.answers[q.id]} onAnswer={() => undefined} />)}
          </div>
        </section>
      )}
    </>
  );
}
