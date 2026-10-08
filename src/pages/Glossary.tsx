import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rich } from '../components/Math';
import { findSection, glossary } from '../content';

export function Glossary() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const items = glossary.filter((g) => !q || `${g.term} ${g.def}`.toLowerCase().includes(q)).sort((x, y) => x.term.localeCompare(y.term));
  return (
    <>
      <div className="eyebrow">Reference</div>
      <h1 className="page-title mb-[18px]">Glossary / Index</h1>
      <input type="search" className="search mb-[18px]" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search terms" aria-label="Search glossary" />
      <div className="grid gap-2.5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]" aria-live="polite">
        {items.map((g) => {
          const s = findSection(g.section);
          return (
            <article key={g.term} className="card rounded-[14px] p-[14px_16px]">
              <h2 className="font-extrabold text-[17px]">{g.term}</h2>
              <div className="text-muted text-[15px] mt-0.5 mb-1.5 overflow-x-auto"><Rich text={g.def} /></div>
              <Link to={`/s/${g.section}`} className="link-btn">§{g.section} {s?.title ?? ''} →</Link>
            </article>
          );
        })}
      </div>
      {items.length === 0 && <p className="text-muted">No terms match.</p>}
    </>
  );
}
