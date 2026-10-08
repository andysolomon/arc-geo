import { useLocation, useParams } from 'react-router-dom';
import { findSection, overallProgressPct } from '../content';
import { useProgress } from '../store/progress';
import { useUi } from '../store/ui';

const CRUMBS: Record<string, string> = { '/': 'Overview', '/exam': 'Customized Full-Length Exam', '/appendix': 'Appendix', '/glossary': 'Glossary / Index' };

export function TopBar() {
  const { sidebarOpen, toggleSidebar } = useUi();
  const { pathname } = useLocation();
  const { sectionId } = useParams();
  const sec = findSection(sectionId);
  const completed = useProgress((s) => s.completed);
  const bookmarks = useProgress((s) => s.bookmarks);
  const theme = useProgress((s) => s.theme);
  const toggleTheme = useProgress((s) => s.toggleTheme);
  const toggleBookmark = useProgress((s) => s.toggleBookmark);
  const pct = overallProgressPct(completed);
  const crumb = sec ? `Chapter ${sec.chapter.number}: ${sec.chapter.title} / ${sec.title}` : CRUMBS[pathname] ?? '';
  const bookmarked = !!sec && bookmarks.includes(sec.id);

  return (
    <header className="flex items-center gap-3 px-[18px] py-2.5 border-b border-line sticky top-0 bg-bg z-20">
      <button type="button" className="btn-icon shrink-0" onClick={toggleSidebar} aria-label="Toggle table of contents" aria-expanded={sidebarOpen} aria-controls="toc">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="1" y1="2" x2="17" y2="2" /><line x1="1" y1="7" x2="17" y2="7" /><line x1="1" y1="12" x2="17" y2="12" /></svg>
      </button>
      <div className="text-[13px] text-muted whitespace-nowrap overflow-hidden text-ellipsis min-w-0" aria-live="polite">{crumb}</div>
      <div className="flex-1" />
      <div className="hidden sm:flex items-center gap-2 text-[12px] text-muted whitespace-nowrap" title="Lessons completed">
        <div className="progress w-[72px]" role="progressbar" aria-label="Lessons completed" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><div style={{ width: pct + '%' }} /></div>
        <span className="font-mono text-[12px]">{pct}%</span>
      </div>
      {sec && (
        <button type="button" onClick={() => toggleBookmark(sec.id)} aria-pressed={bookmarked} title="Bookmark this section" className="h-10 px-3 rounded-[10px] border border-line text-[13px] font-semibold whitespace-nowrap hover:bg-soft shrink-0" style={{ background: bookmarked ? 'var(--orange-soft)' : 'var(--panel)', color: bookmarked ? 'var(--orange)' : 'var(--ink)' }}>
          <span aria-hidden="true">{bookmarked ? '★' : '☆'}</span> <span className="hidden sm:inline">{bookmarked ? 'Bookmarked' : 'Bookmark'}</span><span className="sr-only">{bookmarked ? 'Remove bookmark' : 'Bookmark this section'}</span>
        </button>
      )}
      <button type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} className="h-10 px-3 rounded-[10px] border border-line bg-panel text-ink text-[13px] font-semibold hover:bg-soft shrink-0">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}
