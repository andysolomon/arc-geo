import { Link } from 'react-router-dom';
import { neighbours } from '../content';
import { useProgress } from '../store/progress';

export function SectionFooter({ id }: { id: string }) {
  const completed = useProgress((s) => s.completed.includes(id));
  const toggleCompleted = useProgress((s) => s.toggleCompleted);
  const { prev, next } = neighbours(id);
  return (
    <nav aria-label="Section navigation">
      <div className="flex items-center gap-2.5 flex-wrap border-t border-line pt-[18px]">
        <button type="button" onClick={() => toggleCompleted(id)} aria-pressed={completed} className="btn font-bold text-[14px] px-4 py-2.5" style={completed ? { border: '1px solid var(--accent)', background: 'var(--accent-soft)', color: 'var(--accent)' } : { border: 0, background: 'var(--accent)', color: 'var(--on-accent)' }}>
          {completed ? '✓ Completed' : 'Mark section complete'}
        </button>
        <div className="flex-1" />
        {prev && <Link to={`/s/${prev.id}`} className="btn font-normal max-w-[260px] overflow-hidden text-ellipsis whitespace-nowrap block" rel="prev">← {prev.title}</Link>}
        {next && <Link to={`/s/${next.id}`} className="btn font-normal max-w-[260px] overflow-hidden text-ellipsis whitespace-nowrap block" rel="next">{next.title} →</Link>}
      </div>
      <p className="text-[12px] text-muted mt-2.5 font-mono">[ previous section · ] next section</p>
    </nav>
  );
}
