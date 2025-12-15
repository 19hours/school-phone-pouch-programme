import React from 'react';

interface StepItem {
  title: string;
  body: string;
  bullets: string[];
}

export function StepsTimeline({ steps }: { steps: StepItem[] }) {
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div key={step.title} className="timeline-step" data-step={index + 1}>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
          <ul>
            {step.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
