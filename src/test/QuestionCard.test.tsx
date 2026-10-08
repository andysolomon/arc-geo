import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { QuestionCard, type QuestionMode } from '../components/QuestionCard';
import { findQuestion } from '../content';
import type { AnswerState } from '../lib/grade';

function Harness({ id, mode }: { id: string; mode: QuestionMode }) {
  const [a, setA] = useState<AnswerState>({});
  const q = findQuestion(id)!;
  return <QuestionCard q={q} mode={mode} index={0} answer={a} onAnswer={(p) => setA((s) => ({ ...s, ...p }))} />;
}

describe('QuestionCard', () => {
  it('checks a numeric answer and shows the solution', () => {
    render(<Harness id="c8-4-3" mode="check" />);
    const input = screen.getByLabelText('Numeric answer');
    fireEvent.change(input, { target: { value: '90' } });
    fireEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByRole('status')).toHaveTextContent('Correct.');
    expect(screen.getByText('Step-by-step solution')).toBeInTheDocument();
  });
  it('offers Try again after a wrong multiple-choice answer', () => {
    render(<Harness id="c8-4-2" mode="chapter" />);
    // jsdom cannot compute accessible names over KaTeX output, so pick the choice by class.
    fireEvent.click(document.querySelectorAll('.choice')[0]);
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByRole('status')).toHaveTextContent('Not yet');
    fireEvent.click(screen.getByText('Try again'));
    expect(screen.queryByRole('status')).toBeNull();
  });
  it('supplemental reveals the answer without a solution', () => {
    render(<Harness id="s8-1" mode="supplemental" />);
    fireEvent.click(screen.getByRole('button', { name: 'Reveal answer' }));
    expect(screen.getByRole('status')).toHaveTextContent('Answer: 82 °');
    expect(screen.queryByText('Step-by-step solution')).toBeNull();
  });
  it('exam mode collects only', () => {
    render(<Harness id="c8-4-3" mode="exam" />);
    fireEvent.change(screen.getByLabelText('Numeric answer'), { target: { value: '90' } });
    expect(screen.queryByRole('button', { name: 'Check' })).toBeNull();
  });
});
