import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="sheet-label" data-reveal>
        <span className="tag">SHEET 04</span>
        <span className="rule" />
        <span>INDUSTRY EXPERIENCE</span>
      </div>

      <div style={{ height: '36px' }} />

      <div className="timeline" data-reveal>
        {portfolioData.experiences.map((exp) => (
          <div key={exp.id} className="t-item">
            <div className="t-meta">
              <span>{exp.period}</span>
              <span className="type">{exp.type}</span>
            </div>
            <h3>{exp.role}</h3>
            <p className="t-company">
              {exp.company} <span>— {exp.location}</span>
            </p>
            <p className="desc">{exp.description}</p>
            <div className="tag-strip">
              {exp.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
