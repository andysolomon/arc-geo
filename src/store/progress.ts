import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ExamResult } from '../lib/exam';

export type Theme = 'light' | 'dark';

export const STORE_KEY = 'geo-guide-v1';
export const MAX_SCORES = 10;

export interface ProgressState {
  completed: string[];
  bookmarks: string[];
  scores: ExamResult[];
  theme: Theme;
  lastRoute: string;
  toggleCompleted: (id: string) => void;
  toggleBookmark: (id: string) => void;
  addScore: (r: ExamResult) => void;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  setLastRoute: (r: string) => void;
}

const toggleIn = (list: string[], id: string): string[] => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      completed: [],
      bookmarks: [],
      scores: [],
      theme: 'light',
      lastRoute: '/',
      toggleCompleted: (id) => set((s) => ({ completed: toggleIn(s.completed, id) })),
      toggleBookmark: (id) => set((s) => ({ bookmarks: toggleIn(s.bookmarks, id) })),
      addScore: (r) => set((s) => ({ scores: [r, ...s.scores].slice(0, MAX_SCORES) })),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      setLastRoute: (lastRoute) => set({ lastRoute }),
    }),
    {
      name: STORE_KEY,
      partialize: (s) => ({ completed: s.completed, bookmarks: s.bookmarks, scores: s.scores, theme: s.theme, lastRoute: s.lastRoute }),
    },
  ),
);
