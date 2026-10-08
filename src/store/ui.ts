import { create } from 'zustand';
import { chapters } from '../content';

export const MOBILE_QUERY = '(max-width: 899px)';

const initialMobile = typeof window !== 'undefined' && typeof window.matchMedia === 'function' ? window.matchMedia(MOBILE_QUERY).matches : false;

interface UiState {
  isMobile: boolean;
  sidebarOpen: boolean;
  /** Chapters 1–7 are collapsed by default; 8–10 open. */
  openChapters: Record<string, boolean>;
  setMobile: (m: boolean) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  toggleChapter: (id: string) => void;
  openChapter: (id: string) => void;
}

export const useUi = create<UiState>()((set) => ({
  isMobile: initialMobile,
  sidebarOpen: !initialMobile,
  openChapters: Object.fromEntries(chapters.map((c) => [c.id, c.number >= 8])),
  setMobile: (isMobile) => set((s) => (s.isMobile === isMobile ? {} : { isMobile, sidebarOpen: !isMobile })),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
  toggleChapter: (id) => set((s) => ({ openChapters: { ...s.openChapters, [id]: !s.openChapters[id] } })),
  openChapter: (id) => set((s) => (s.openChapters[id] ? {} : { openChapters: { ...s.openChapters, [id]: true } })),
}));
