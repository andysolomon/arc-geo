import { useEffect, useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { chapters, chapterProgress, findSection } from '../content';
import { useProgress } from '../store/progress';
import { useUi } from '../store/ui';

export function Sidebar() {
  const { isMobile, sidebarOpen, openChapters, toggleChapter, openChapter, closeSidebar } = useUi();
  const completed = useProgress((s) => s.completed);
  const bookmarks = useProgress((s) => s.bookmarks);
  const { sectionId } = useParams();
  const current = findSection(sectionId);
  const asideRef = useRef<HTMLElement>(null);

  // Reveal the chapter of the current section.
  useEffect(() => {
    if (current) openChapter(current.chapter.id);
  }, [current, openChapter]);

  // A collapsed sidebar must not receive focus; a mobile drawer takes focus when it opens.
  useEffect(() => {
    const el = asideRef.current;
    if (!el) return;
    if (sidebarOpen) el.removeAttribute('inert');
    else el.setAttribute('inert', '');
    if (isMobile && sidebarOpen) el.querySelector<HTMLElement>('a,button')?.focus();
  }, [isMobile, sidebarOpen]);

  const afterNav = () => {
    if (isMobile) closeSidebar();
    window.scrollTo({ top: 0 });
  };

  const style: React.CSSProperties = isMobile
    ? { position: 'fixed', top: 0, bottom: 0, left: 0, width: 300, zIndex: 40, transform: `translateX(${sidebarOpen ? 0 : -100}%)`, transition: 'transform .25s ease, visibility .25s', visibility: sidebarOpen ? 'visible' : 'hidden', borderRight: '1px solid var(--line)' }
    : { width: sidebarOpen ? 300 : 0, overflow: 'hidden', transition: 'width .25s ease', flexShrink: 0, position: 'sticky', top: 0, height: '100vh', borderRight: sidebarOpen ? '1px solid var(--line)' : 0 };

  return (
    <>
      <aside ref={asideRef} id="toc" aria-label="Table of contents" className="bg-panel" style={style}>
        <div className="w-[300px] h-full overflow-y-auto flex flex-col box-border">
          <div className="px-[18px] pt-5 pb-2.5">
            <div className="font-display italic font-medium text-[28px] leading-[1.1]">Geometry</div>
            <div className="text-[12px] text-muted mt-1 [font-variant:small-caps] tracking-[.12em]">Interactive Study Guide</div>
          </div>
          <nav className="px-2.5 pb-5 flex flex-col gap-0.5">
            <NavLink to="/" end className="nav-btn" onClick={afterNav}>Overview</NavLink>
            {chapters.map((ch) => {
              const { done, total } = chapterProgress(ch, completed);
              const open = !!openChapters[ch.id];
              const listId = `toc-${ch.id}`;
              return (
                <div key={ch.id} className="mt-3">
                  <button type="button" onClick={() => toggleChapter(ch.id)} aria-expanded={open} aria-controls={listId} className="flex items-center gap-2 w-full text-left bg-transparent border-0 py-1.5 px-2 text-ink font-bold text-[13px] rounded-lg hover:bg-soft">
                    <span className="flex-1">Chapter {ch.number} · {ch.title}</span>
                    <span className="text-[11px] text-muted font-mono"><span className="sr-only">{done} of {total} lessons done</span><span aria-hidden="true">{done}/{total}</span></span>
                    <span className="text-[11px] text-muted" aria-hidden="true">{open ? '▾' : '▸'}</span>
                  </button>
                  {open && (
                    <div id={listId} className="flex flex-col gap-px mt-0.5">
                      {ch.sections.map((s) => {
                        const isDone = completed.includes(s.id);
                        const mark = isDone ? '✓' : s.kind === 'lesson' ? '' : '≡';
                        return (
                          <NavLink key={s.id} to={`/s/${s.id}`} className="nav-btn" onClick={afterNav}>
                            <span className={'w-4 text-center text-[12px] font-extrabold shrink-0 ' + (isDone ? 'text-accent' : 'text-muted')} aria-hidden="true">{mark}</span>
                            {isDone && <span className="sr-only">Completed. </span>}
                            <span className="flex-1 min-w-0">{s.title}</span>
                            {bookmarks.includes(s.id) && <span className="text-orange text-[12px]" role="img" aria-label="Bookmarked">★</span>}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="h-px bg-line my-3.5 mx-2" role="separator" />
            <NavLink to="/exam" className="nav-btn" onClick={afterNav}>Customized Full-Length Exam</NavLink>
            <NavLink to="/appendix" className="nav-btn" onClick={afterNav}>Appendix · Postulates and Theorems</NavLink>
            <NavLink to="/glossary" className="nav-btn" onClick={afterNav}>Glossary / Index</NavLink>
          </nav>
        </div>
      </aside>
      {isMobile && sidebarOpen && <div onClick={closeSidebar} className="fixed inset-0 z-30" style={{ background: 'var(--backdrop)' }} aria-hidden="true" />}
    </>
  );
}
