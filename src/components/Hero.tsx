import React, { useState } from 'react';
import portraitImg from '../assets/images/portrait.jpg';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <section className="hero" id="top">
      <div className="hero-shell">
        <div data-reveal className="is-visible">
          <span className="status-pill">
            <i />
            {portfolioData.status}
          </span>
          <h1 className="name">{portfolioData.name}</h1>
          <p className="hero-line1">{portfolioData.positioning}</p>
          <p className="hero-line2">{portfolioData.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
            <a
              className="btn btn-ghost"
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              GitHub
            </a>
          </div>
        </div>

        <div data-reveal className="is-visible">
          {showPhoto ? (
            <div className="portrait-panel">
              <img
                src={portraitImg}
                alt={`Portrait of ${portfolioData.name}`}
                fetchPriority="high"
              />
              <div className="cap">
                <span>PORTRAIT · SIDDHESH GHADI</span>
                <button
                  type="button"
                  onClick={() => setShowPhoto(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--amber)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.64rem',
                    cursor: 'pointer',
                    padding: 0,
                    textDecoration: 'underline',
                  }}
                  title="Switch to schematic diagram"
                >
                  VIEW SCHEMATIC &rarr;
                </button>
              </div>
            </div>
          ) : (
            <div className="portrait-panel schematic-box">
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <rect x="0.5" y="0.5" width="299" height="299" stroke="rgba(147,183,224,0.18)" />
                <circle cx="150" cy="120" r="34" stroke="#e8963c" strokeWidth="1.2" />
                <circle cx="150" cy="120" r="4" fill="#e8963c" />
                <path d="M150 86 V40 M150 154 V210 M116 120 H40 M184 120 H260" stroke="rgba(147,183,224,0.4)" strokeWidth="1" />
                <path d="M40 120 H70 M230 120 H260" stroke="#e8963c" strokeWidth="1" />
                <rect x="20" y="108" width="20" height="24" stroke="rgba(147,183,224,0.4)" />
                <rect x="260" y="108" width="20" height="24" stroke="rgba(147,183,224,0.4)" />
                <rect x="138" y="18" width="24" height="22" stroke="rgba(147,183,224,0.4)" />
                <rect x="138" y="210" width="24" height="22" stroke="rgba(147,183,224,0.4)" />
                <path d="M40 220 H260" stroke="rgba(147,183,224,0.18)" />
                <path d="M60 220 V240 M100 220 V244 M140 220 V236 M180 220 V246 M220 220 V238" stroke="rgba(147,183,224,0.3)" />
                <text x="150" y="270" fill="rgba(233,238,246,0.4)" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="middle" letterSpacing="1">
                  UAV FLIGHT CONTROL NODE
                </text>
              </svg>
              <div className="cap">
                <span>FIG. 01 · REV C — 2026</span>
                <button
                  type="button"
                  onClick={() => setShowPhoto(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--amber)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.64rem',
                    cursor: 'pointer',
                    padding: 0,
                    textDecoration: 'underline',
                  }}
                  title="Switch to original photo"
                >
                  VIEW PHOTO &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
