import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Rich } from '../components/Math';
import { chapters, chaptersWithTheorems, findSection, theorems } from '../content';

export function Appendix() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const [chapter, setChapter] = useState<string>('all');
  const q = query.trim().toLowerCase();
  const match = (t: (typeof theorems)[number]) => (chapter === 'all' || t.chapter === chapter) && (!q || `${t.id} ${t.kind} ${t.name} ${t.statement}`.toLowerCase().includes(q));
  const groups = chapters.map((ch) => ({ ch, items: theorems.filter((t) => t.chapter === ch.id && match(t)) })).filter((g) => g.items.length);
  const filters = [{ id: 'all', label: 'All' }, ...chaptersWithTheorems.map((ch) => ({ id: ch.id, label: `Ch ${ch.number}` }))];

  return (
    <>
      <div className="eyebrow">Appendix</div>
      <h1 className="page-title mb-[18px]">Postulates and Theorems</h1>
      <div className="flex gap-2.5 flex-wrap items-center mb-[18px]">
        <input type="search" className="search flex-1 min-w-[220px]" value={query} onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })} placeholder="Search by name, number, or words" aria-label="Search theorems" />
        <div className="seg shrink-0" role="radiogroup" aria-label="Chapter filter">
          {filters.map((f) => <button key={f.id} type="button" role="radio" aria-checked={chapter === f.id} onClick={() => setChapter(f.id)}>{f.label}</button>)}
        </div>
      </div>
      <div className="flex flex-col gap-[22px]" aria-live="polite">
        {groups.map(({ ch, items }) => (
          <section key={ch.id} aria-labelledby={`ap-${ch.id}`}>
            <h2 id={`ap-${ch.id}`} className="h3 mb-2">Chapter {ch.number} · {ch.title}</h2>
            <div className="flex flex-col gap-2">
              {items.map((t) => {
                const s = findSection(t.section);
                const postulate = t.kind === 'Postulate';
                return (
                  <article key={t.id} className="card rounded-[14px] p-[14px_16px] grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1 items-baseline">
                    <span className="text-[12px] font-extrabold whitespace-nowrap px-2 py-[3px] rounded-md" style={{ background: postulate ? 'var(--violet-soft)' : 'var(--accent-soft)', color: postulate ? 'var(--violet)' : 'var(--accent)' }}>{t.kind} {t.id}</span>
                    <div className="min-w-0 overflow-x-auto"><b>{t.name}.</b> <Rich text={t.statement} /></div>
                    <span />
                    <Link to={`/s/${t.section}`} className="link-btn justify-self-start">Used in {s ? `§${t.section} ${s.title}` : t.section} →</Link>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
        {groups.length === 0 && <p className="text-muted">No statements match.</p>}
      </div>
    </>
  );
}
