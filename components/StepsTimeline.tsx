import React from 'react';

type Step = {
  title: string;
  detail: string;
};

type StepsTimelineProps = {
  steps: Step[];
};

export function StepsTimeline({ steps }: StepsTimelineProps) {
  return (
    <div className="timeline" aria-label="Process steps">
      {steps.map((step, index) => (
        <div className="timeline-step" key={step.title}>
          <div className="tag">Step {index + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.detail}</p>
        </div>
      ))}
    </div>
  );
}
