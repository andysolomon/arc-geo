import { describe, expect, it } from 'vitest';
import { STORE_KEY, useProgress } from '../store/progress';

/** Simulate a reload: drop the in-memory store and rehydrate from localStorage. */
async function reload() {
  const raw = localStorage.getItem(STORE_KEY)!;
  useProgress.setState({ completed: [], bookmarks: [], scores: [], theme: 'light', lastRoute: '/' }, false);
  localStorage.setItem(STORE_KEY, raw);
  await useProgress.persist.rehydrate();
}

describe('persistence', () => {
  it('keeps completed sections and the theme across a reload', async () => {
    useProgress.getState().toggleCompleted('8-4');
    useProgress.getState().toggleCompleted('9-1');
    useProgress.getState().toggleBookmark('10-2');
    useProgress.getState().setTheme('dark');
    const raw = JSON.parse(localStorage.getItem(STORE_KEY)!);
    expect(raw.state.completed).toEqual(['8-4', '9-1']);
    expect(raw.state.theme).toBe('dark');

    await reload();
    const s = useProgress.getState();
    expect(s.completed).toEqual(['8-4', '9-1']);
    expect(s.bookmarks).toEqual(['10-2']);
    expect(s.theme).toBe('dark');
  });
  it('keeps only the last 10 scores', () => {
    for (let i = 0; i < 12; i++) useProgress.getState().addScore({ correct: i, total: 10, per: {}, date: new Date(2026, 0, i + 1).toISOString(), chapters: ['ch8'] });
    expect(useProgress.getState().scores).toHaveLength(10);
    expect(useProgress.getState().scores[0].correct).toBe(11);
  });
});
