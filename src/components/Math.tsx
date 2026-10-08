import { Fragment, useMemo } from 'react';
import katex from 'katex';

interface TexProps {
  tex: string;
  display?: boolean;
  className?: string;
}

/** Render one TeX string with KaTeX. */
export function Tex({ tex, display = false, className }: TexProps) {
  const html = useMemo(() => katex.renderToString(tex, { throwOnError: false, displayMode: display, output: 'htmlAndMathml' }), [tex, display]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

const SPLIT = /\$([^$]+)\$/;

/** Split a string on `$...$` runs and render each run inline with KaTeX. */
export function Rich({ text }: { text: string | null | undefined }) {
  const parts = String(text ?? '').split(SPLIT);
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <Tex key={i} tex={p} /> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}
