import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { neighbours } from './content';
import { useProgress } from './store/progress';
import { MOBILE_QUERY, useUi } from './store/ui';

const EDITABLE = new Set(['input', 'textarea', 'select']);

function isTyping(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el) return false;
  if (EDITABLE.has((el.tagName || '').toLowerCase())) return true;
  return !!el.isContentEditable;
}

export function App() {
  const theme = useProgress((s) => s.theme);
  const lastRoute = useProgress((s) => s.lastRoute);
  const setLastRoute = useProgress((s) => s.setLastRoute);
  const { isMobile, setMobile, closeSidebar } = useUi();
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId } = useParams();
  const restored = useRef(false);

  // Theme on <html>.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Restore the last route once, when the app opens at the root.
  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    if (location.pathname === '/' && lastRoute && lastRoute !== '/') navigate(lastRoute, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Remember the route.
  useEffect(() => {
    setLastRoute(location.pathname + location.search);
  }, [location.pathname, location.search, setLastRoute]);

  // Breakpoint.
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [setMobile]);

  // Keyboard: [ previous, ] next, Esc closes the drawer. Ignored while typing.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTyping(e.target)) return;
      if (e.key === 'Escape') {
        if (isMobile) closeSidebar();
        return;
      }
      if (e.key !== '[' && e.key !== ']') return;
      if (!sectionId) return;
      const { prev, next } = neighbours(sectionId);
      const to = e.key === ']' ? next : prev;
      if (to) {
        navigate(`/s/${to.id}`);
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sectionId, isMobile, closeSidebar, navigate]);

  return (
    <div className="min-h-screen bg-bg text-ink flex font-text text-[17px] leading-[1.6]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-panel focus:px-3 focus:py-2 focus:rounded-lg">Skip to content</a>
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar />
        <main id="main" className="px-6 pt-8 pb-24 max-w-[1000px] w-full mx-auto box-border" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
