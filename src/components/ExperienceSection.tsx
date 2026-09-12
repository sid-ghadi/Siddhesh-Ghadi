import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="section experience" id="experience">
      <div className="section-kicker is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
        <p className="eyebrow">Industry Experience</p>
      </div>

      <div className="role-board" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {portfolioData.experiences.map((exp, idx) => (
          <article
            key={exp.id}
            data-reveal=""
            className="is-visible"
            style={{ transitionDelay: `${360 + idx * 45}ms` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
              <span>{exp.period}</span>
              <small style={{ color: 'var(--muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {exp.type}
              </small>
            </div>
            <h3>{exp.role}</h3>
            <p style={{ color: 'var(--cream)', fontWeight: 700, margin: '0.2rem 0 0.8rem', fontSize: '0.95rem' }}>
              {exp.company} <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.82rem' }}>— {exp.location}</span>
            </p>
            <p style={{ marginBottom: '1rem' }}>{exp.description}</p>
            <div className="stack-strip" style={{ marginTop: 'auto' }}>
              {exp.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
