import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="contact-panel is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
          <p className="eyebrow">Contact</p>
          <h2>Let's build something useful.</h2>
          <p>
            I'm open to robotics, autonomous UAV systems, FPGA/VLSI engineering roles, embedded hardware
            opportunities, freelance projects, and technology-focused collaborations.
          </p>
          <div className="social-links">
            <a
              className="primary-btn"
              href={`mailto:${portfolioData.email}`}
            >
              Email Me
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
            {portfolioData.phone && (
              <a
                className="ghost-btn"
                href={`tel:${portfolioData.phone}`}
              >
                Call Phone
              </a>
            )}
            <button
              type="button"
              className="ghost-btn"
              onClick={onOpenResume}
            >
              Resume
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <span>{portfolioData.name}</span>
          <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>•</span>
          <span>ROBOTICS • VLSI • EMBEDDED SYSTEMS</span>
        </div>
        <div style={{ display: 'flex', gap: '1.2rem' }}>
          <span>&copy; {new Date().getFullYear()}</span>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${portfolioData.email}`}>
            Email
          </a>
        </div>
      </footer>
    </>
  );
};
