import React from 'react';
import portraitImg from '../assets/images/portrait.jpg';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-shell section">
        <div className="hero-copy is-visible" data-reveal="" style={{ transitionDelay: '45ms' }}>
          <p className="eyebrow">{portfolioData.eyebrow}</p>
          <h1>{portfolioData.name}</h1>
          <p className="hero-title">{portfolioData.positioning}</p>
          <p className="hero-line">{portfolioData.summary}</p>

          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              View Projects
            </a>
            <a
              className="ghost-btn"
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="ghost-btn"
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-visual is-visible" data-reveal="" style={{ transitionDelay: '90ms' }}>
          <div className="portrait-panel">
            <img
              src={portraitImg}
              alt={`Portrait of ${portfolioData.name}`}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
