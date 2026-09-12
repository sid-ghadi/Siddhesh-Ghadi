import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ProofSection: React.FC = () => {
  return (
    <section className="section proof" id="certifications">
      <div className="section-kicker is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
        <p className="eyebrow">Certifications</p>
      </div>

      <div className="proof-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {portfolioData.certifications.map((cert, idx) => (
          <article
            key={cert.id}
            data-reveal=""
            className="is-visible"
            style={{ transitionDelay: `${360 + idx * 45}ms` }}
          >
            <span>{cert.date}</span>
            <h3 style={{ fontSize: '1.25rem' }}>{cert.title}</h3>
            <p style={{ color: 'var(--cream)', fontWeight: 700, margin: '0.2rem 0 0.6rem', fontSize: '0.88rem' }}>
              {cert.issuer}
            </p>
            <p>{cert.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
