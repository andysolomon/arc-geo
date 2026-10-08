import { Link, Navigate, useParams } from 'react-router-dom';
import { Rich, Tex } from '../components/Math';
import { QuestionCard } from '../components/QuestionCard';
import { findQuestion, findSection, findTheorem, lessonIndex, lessons } from '../content';
import type { DiagramKind, Lesson as LessonData, SectionRef } from '../content/types';
import { AngleDiagram } from '../diagrams/AngleDiagram';
import { AreaDiagram } from '../diagrams/AreaDiagram';
import { CircleDiagram } from '../diagrams/CircleDiagram';
import { DistanceGrid } from '../diagrams/DistanceGrid';
import { InscribedAngle } from '../diagrams/InscribedAngle';
import { PolygonDiagram } from '../diagrams/PolygonDiagram';
import { Prism } from '../diagrams/Prism';
import { SimilarDiagram } from '../diagrams/SimilarDiagram';
import { SolidDiagram } from '../diagrams/SolidDiagram';
import { TransversalDiagram } from '../diagrams/TransversalDiagram';
import { TriangleDiagram } from '../diagrams/TriangleDiagram';
import { usePractice } from '../store/practice';
import { Explainer } from '../videos/Explainer';
import { VIDEOS } from '../videos';
import { Problems } from './Problems';
import { SectionFooter } from './SectionFooter';

const DIAGRAMS: Record<DiagramKind, { hint: string; component: React.ComponentType<{ sectionId: string }> }> = {
  inscribed: { hint: 'Drag the points on the circle.', component: InscribedAngle },
  prism: { hint: 'Use the sliders. Switch between right and oblique.', component: Prism },
  distance: { hint: 'Drag the points on the grid.', component: DistanceGrid },
  angle: { hint: 'Drag point C around the vertex.', component: AngleDiagram },
  transversal: { hint: 'Move the slider. Turn the parallel toggle on and off.', component: TransversalDiagram },
  triangle: { hint: 'Drag the three vertices.', component: TriangleDiagram },
  polygon: { hint: 'Change the number of sides and the side length.', component: PolygonDiagram },
  area: { hint: 'Choose a shape. Use the sliders.', component: AreaDiagram },
  circle: { hint: 'Change the radius and the central angle.', component: CircleDiagram },
  similar: { hint: 'Drag the small triangle. Change the scale factor.', component: SimilarDiagram },
  solid: { hint: 'Choose a solid. Use the sliders.', component: SolidDiagram },
};

export function Lesson() {
  const { sectionId } = useParams();
  const sec = findSection(sectionId);
  if (!sec) return <Navigate to="/" replace />;
  if (sec.kind !== 'lesson') return <Problems sec={sec} />;
  const lesson = lessons[sec.id];
  return (
    <>
      <div className="eyebrow">Chapter {sec.chapter.number} · Section {lessonIndex(sec)}</div>
      <h1 className="page-title">{sec.title}</h1>
      {sec.parts && (
        <ul className="flex flex-wrap gap-2 mb-[18px] list-none p-0" aria-label="Parts">
          {sec.parts.map((p) => <li key={p} className="chip">{p}</li>)}
        </ul>
      )}
      {lesson ? <Built sec={sec} lesson={lesson} /> : <Stub sec={sec} />}
      <SectionFooter id={sec.id} />
    </>
  );
}

function Stub({ sec }: { sec: SectionRef }) {
  return (
    <div className="card flex flex-col gap-3.5 p-[22px] mb-6">
      {sec.summary && (
        <>
          <p className="max-w-[65ch] text-pretty"><Rich text={sec.summary} /></p>
          {sec.formula && <div className="px-4 py-3.5 rounded-xl bg-soft text-[18px] overflow-x-auto"><Tex tex={sec.formula} display /></div>}
        </>
      )}
      <p className="text-[14px] text-muted">The full lesson, diagram, and video for this section are not written yet. Add them in <code>src/content/chapters.ts</code> under <code>lessons</code>.</p>
    </div>
  );
}

function Built({ sec, lesson }: { sec: SectionRef; lesson: LessonData }) {
  const diagram = lesson.diagram ? DIAGRAMS[lesson.diagram] : null;
  const Diagram = diagram?.component;
  const video = lesson.video ? VIDEOS[lesson.video] : null;
  const answers = usePractice((s) => s.answers);
  const setAnswer = usePractice((s) => s.setAnswer);
  const openExamples = usePractice((s) => s.openExamples);
  const toggleExample = usePractice((s) => s.toggleExample);
  const checks = lesson.checks.map(findQuestion).filter((q): q is NonNullable<typeof q> => !!q);
  const used = lesson.theorems.map(findTheorem).filter((t): t is NonNullable<typeof t> => !!t);

  return (
    <>
      <div className="max-w-[68ch] flex flex-col gap-2.5 mb-6">
        {lesson.intro.map((p, i) => <p key={i} className="text-pretty"><Rich text={p} /></p>)}
      </div>

      {diagram && Diagram && (
        <section className="card mb-6" aria-labelledby="diagram-h">
          <div className="flex items-baseline gap-3 flex-wrap mb-3">
            <h2 id="diagram-h" className="h3">Interactive diagram</h2>
            <div className="text-[13px] text-muted">{diagram.hint}</div>
          </div>
          <Diagram sectionId={sec.id} />
        </section>
      )}

      <section className="grid gap-4 mb-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]" aria-label="Definitions and formulas">
        <div className="card">
          <h2 className="h3 mb-2.5">Definitions</h2>
          <dl className="flex flex-col gap-2.5">
            {lesson.definitions.map((d) => (
              <div key={d.term}><dt className="font-bold">{d.term}</dt><dd className="text-muted text-[15px]"><Rich text={d.text} /></dd></div>
            ))}
          </dl>
        </div>
        {lesson.formulas.length > 0 && (
        <div className="card">
          <h2 className="h3 mb-2.5">Formulas</h2>
          <div className="flex flex-col gap-3">
            {lesson.formulas.map((f) => (
              <div key={f.label}><div className="text-[13px] text-muted [font-variant:small-caps] tracking-[.08em] font-semibold">{f.label}</div><div className="text-[18px] overflow-x-auto"><Tex tex={f.tex} display /></div></div>
            ))}
          </div>
        </div>
        )}
      </section>

      {video && <Explainer title={lesson.videoTitle ?? ''} scenes={video.scenes} piece={video.piece} />}

      <section className="mb-6" aria-labelledby="examples-h">
        <h2 id="examples-h" className="h2 mb-3">Worked examples</h2>
        <div className="flex flex-col gap-3">
          {lesson.examples.map((ex, i) => {
            const key = sec.id + i;
            const open = !!openExamples[key];
            const stepsId = `steps-${sec.id}-${i}`;
            return (
              <article key={ex.title} className="card p-[18px_20px]">
                <h3 className="font-medium text-accent text-[20px] font-display mb-1"><Rich text={ex.title} /></h3>
                <div className="mb-2.5"><Rich text={ex.given} /></div>
                <button type="button" className="btn btn-soft" aria-expanded={open} aria-controls={stepsId} onClick={() => toggleExample(key)}>{open ? 'Hide steps' : 'Show steps'}</button>
                {open && (
                  <ol id={stepsId} className="mt-3 pl-[22px] list-decimal flex flex-col gap-1.5 fade-up">
                    {ex.steps.map((s, j) => <li key={j}><Rich text={s} /></li>)}
                  </ol>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mb-6" aria-labelledby="checks-h">
        <h2 id="checks-h" className="h2">Check your understanding</h2>
        <p className="mt-1 mb-3.5 text-muted text-[14px]">Answer each question. You get instant feedback and a step-by-step solution.</p>
        <div className="flex flex-col gap-3.5">
          {checks.map((q, i) => <QuestionCard key={q.id} q={q} mode="check" index={i} answer={answers[q.id]} onAnswer={(patch) => setAnswer(q.id, patch)} />)}
        </div>
      </section>

      {used.length > 0 && (
      <section className="card p-[18px_20px] mb-6" aria-labelledby="theorems-h">
        <h2 id="theorems-h" className="h3 mb-2">Postulates and theorems used here</h2>
        <ul className="flex flex-col gap-1.5 list-none p-0">
          {used.map((t) => (
            <li key={t.id}>
              <Link to={`/appendix?q=${encodeURIComponent(t.name)}`} className="text-left flex flex-wrap gap-x-2.5 gap-y-1 items-baseline py-1.5 px-2 rounded-lg text-ink no-underline text-[15px] hover:bg-soft">
                <span className="font-extrabold text-accent text-[13px] whitespace-nowrap">{t.kind} {t.id}</span>
                <span className="min-w-0 max-w-full overflow-x-auto"><b>{t.name}.</b> <Rich text={t.statement} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      )}
    </>
  );
}
