import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="section" id="education">
      <div className="sheet-label" data-reveal>
        <span className="tag">SHEET 05</span>
        <span className="rule" />
        <span>EDUCATION &amp; CERTIFICATIONS</span>
      </div>

      <div style={{ height: '36px' }} />

      <div className="split-grid" data-reveal>
        {/* Left Column: Education */}
        <div>
          <div className="edu-block primary">
            <span className="edu-year">{portfolioData.education.year}</span>
            <h4>{portfolioData.education.degree}</h4>
            <span className="inst">{portfolioData.education.institution}</span>
            <strong>Specialization: {portfolioData.education.specialization}</strong>
            {portfolioData.education.coursework && (
              <div className="course-strip">
                {portfolioData.education.coursework.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            )}
          </div>

          {portfolioData.education.secondary?.map((sec) => (
            <div key={sec.degree} className="edu-block">
              <span className="edu-year">{sec.year}</span>
              <h4>{sec.degree}</h4>
              <span className="inst">{sec.institution}</span>
              {sec.score && <strong>Score: {sec.score}</strong>}
            </div>
          ))}
        </div>

        {/* Right Column: Certifications */}
        <div className="cert-list">
          {portfolioData.certifications.map((cert) => (
            <div key={cert.id} className="cert-row">
              <span className="date">{cert.date}</span>
              <div>
                <h4>{cert.title}</h4>
                <span className="issuer">{cert.issuer}</span>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
