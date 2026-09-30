import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <>
      <section className="section" id="contact" style={{ borderBottom: 'none' }}>
        <div className="sheet-label" data-reveal>
          <span className="tag">SHEET 06</span>
          <span className="rule" />
          <span>CONTACT</span>
        </div>

        <div className="contact-block" data-reveal>
          <h2>Let's build something useful.</h2>
          <p>
            I'm open to robotics, autonomous UAV systems, FPGA/VLSI engineering roles, embedded hardware
            opportunities, freelance projects, and technology-focused collaborations.
          </p>

          <div className="contact-grid">
            {/* Direct Phone Dial */}
            {portfolioData.phone && (
              <a
                className="btn btn-primary"
                href={`tel:${portfolioData.phone}`}
                title="Call Siddhesh Ghadi"
              >
                📞 Call {portfolioData.phone}
              </a>
            )}

            {/* Direct Email */}
            <a
              className="btn btn-ghost"
              href={`mailto:${portfolioData.email}`}
              title="Send email to Siddhesh Ghadi"
            >
              ✉️ {portfolioData.email}
            </a>

            {/* LinkedIn Profile */}
            <a
              className="btn btn-ghost"
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="Connect on LinkedIn"
            >
              LinkedIn Profile &rarr;
            </a>

            {/* GitHub Profile */}
            <a
              className="btn btn-ghost"
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repositories"
            >
              GitHub &rarr;
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            {portfolioData.name} &nbsp;•&nbsp; ROBOTICS · VLSI · EMBEDDED SYSTEMS
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()}</span>
            <a href={`tel:${portfolioData.phone}`}>Phone</a>
            <a href={`mailto:${portfolioData.email}`}>Email</a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
