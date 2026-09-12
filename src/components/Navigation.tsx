import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface NavigationProps {
  onOpenResume: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to portfolio
      </a>

      <header className="site-header is-visible" data-reveal="">
        <a className="brand-lockup" href="#home" aria-label="Siddhesh Ghadi Home">
          <span className="brand-mark" aria-hidden="true">
            SG
          </span>
          <span className="brand-text">
            <strong>{portfolioData.name}</strong>
            <small>ROBOTICS / VLSI / DIGITAL</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="header-cta"
            onClick={onOpenResume}
            title="Open Resume"
          >
            Resume
          </button>
        </div>
      </header>
    </>
  );
};
