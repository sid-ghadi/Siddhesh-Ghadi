import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="section education" id="education">
      <div className="section-kicker is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
        <p className="eyebrow">Education</p>
      </div>

      <div className="education-stack">
        <article className="education-main is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
          <span>{portfolioData.education.year}</span>
          <h3>{portfolioData.education.degree}</h3>
          <p>{portfolioData.education.institution}</p>
          <strong>Specialization: {portfolioData.education.specialization}</strong>
          {portfolioData.education.coursework && (
            <div className="committee-strip" style={{ marginTop: '1rem' }}>
              {portfolioData.education.coursework.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          )}
        </article>

        {portfolioData.education.secondary?.map((sec, idx) => (
          <article
            key={sec.degree}
            data-reveal=""
            className="is-visible"
            style={{ transitionDelay: `${360 + (idx + 1) * 45}ms` }}
          >
            <span>{sec.year}</span>
            <h3>{sec.degree}</h3>
            <p>{sec.institution}</p>
            {sec.score && <strong>Score: {sec.score}</strong>}
          </article>
        ))}
      </div>
    </section>
  );
};
