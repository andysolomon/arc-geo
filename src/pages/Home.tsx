import { Link } from 'react-router-dom';
import { chapters, chapterProgress, glossary, lessons, theorems } from '../content';
import { useProgress } from '../store/progress';

export function Home() {
  const completed = useProgress((s) => s.completed);
  return (
    <>
      <div className="eyebrow">Self-paced textbook</div>
      <h1 className="font-display font-medium leading-[1.05] tracking-[-.01em] mt-1.5 mb-4" style={{ fontSize: 'clamp(36px,5.5vw,54px)' }}>Interactive Geometry Study Guide</h1>
      <p className="max-w-[62ch] text-muted mb-7 text-pretty">Read each lesson. Move the points in each diagram. Answer the questions. The guide saves your progress on this device.</p>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {chapters.map((ch) => {
          const { done, total, lessons: ls } = chapterProgress(ch, completed);
          const next = ls.find((s) => !completed.includes(s.id)) ?? ls[0];
          const written = ls.some((s) => s.summary || lessons[s.id]);
          const cta = done ? 'Continue' : written ? 'Start' : 'Browse outline';
          return (
            <article key={ch.id} className="card flex flex-col gap-2.5">
              <div className="eyebrow-muted">Chapter {ch.number}</div>
              <h2 className="text-[28px] font-medium font-display leading-[1.1]">{ch.title}</h2>
              <div className="text-[13px] text-muted">{total} lessons · {done} done</div>
              <div className="progress" role="progressbar" aria-label={`Chapter ${ch.number} progress`} aria-valuenow={done} aria-valuemin={0} aria-valuemax={total}><div style={{ width: Math.round((100 * done) / total) + '%' }} /></div>
              <Link to={`/s/${next.id}`} className="btn btn-primary mt-1.5 self-start" aria-label={`${cta}: Chapter ${ch.number}, ${ch.title}`}>{cta}</Link>
            </article>
          );
        })}
      </div>
      <nav aria-label="Reference" className="grid gap-3 mt-7 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <Link to="/exam" className="card text-left p-4 rounded-[14px] text-ink no-underline hover:bg-soft"><div className="font-bold">Full-Length Exam</div><div className="text-[13px] text-muted">Pick chapters, count, and a timer.</div></Link>
        <Link to="/appendix" className="card text-left p-4 rounded-[14px] text-ink no-underline hover:bg-soft"><div className="font-bold">Postulates and Theorems</div><div className="text-[13px] text-muted">Search all {theorems.length} statements.</div></Link>
        <Link to="/glossary" className="card text-left p-4 rounded-[14px] text-ink no-underline hover:bg-soft"><div className="font-bold">Glossary</div><div className="text-[13px] text-muted">{glossary.length} terms with links to lessons.</div></Link>
      </nav>
    </>
  );
}
