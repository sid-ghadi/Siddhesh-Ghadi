import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Navigation: React.FC = () => {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to portfolio
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand-lockup" href="#top" aria-label="Siddhesh Ghadi Home">
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

          <a
            className="header-cta"
            href="#contact"
            style={{ background: 'var(--amber)', color: 'var(--blue-950)', fontWeight: 600 }}
          >
            Contact
          </a>
        </div>
      </header>
    </>
  );
};
