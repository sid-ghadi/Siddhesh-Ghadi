import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectDetailsModal } from './ProjectDetailsModal';

export const ProjectsLedgerSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects = portfolioData.projects || [];

  return (
    <>
      <section className="section" id="projects">
        <div className="sheet-label" data-reveal>
          <span className="tag">SHEET 03</span>
          <span className="rule" />
          <span>SELECTED PROJECTS — REVISION LOG</span>
        </div>

        <div style={{ height: '20px' }} />

        <div className="ledger" data-reveal>
          <div className="ledger-head">
            <span>REV</span>
            <span>SCOPE / TITLE</span>
            <span>DESCRIPTION (CLICK TITLE FOR SPECS)</span>
            <span>REF</span>
          </div>

          {projects.map((proj) => (
            <div
              key={proj.id}
              className="project-row"
              onClick={() => setSelectedProject(proj)}
              style={{ cursor: 'pointer' }}
              title="Click to view detailed technical specifications, challenges, and tools"
            >
              <div className="rev">{proj.rev}</div>
              <div>
                <span className="project-label">{proj.scope}</span>
                <h3
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(proj);
                  }}
                  style={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    gap: '6px',
                    transition: 'color 0.15s ease',
                  }}
                  className="project-title-clickable group"
                >
                  <span className="hover:text-[#e8963c] transition-colors">{proj.title}</span>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.66rem',
                      color: 'var(--amber)',
                      opacity: 0.8,
                      border: '1px solid var(--amber-line)',
                      padding: '1px 5px',
                    }}
                  >
                    +SPEC
                  </span>
                </h3>
              </div>
              <div>
                <p className="desc">{proj.shortDesc}</p>
                <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {proj.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.62rem',
                        color: 'var(--paper-dim)',
                        border: '1px solid var(--blue-line-soft)',
                        padding: '2px 6px',
                        background: 'var(--blue-900b)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                  {proj.tools.length > 3 && (
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.62rem',
                        color: 'var(--amber)',
                        padding: '2px 4px',
                      }}
                    >
                      +{proj.tools.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div>
                {proj.githubUrl ? (
                  <a
                    className="repo-tag"
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {proj.tag}
                  </a>
                ) : (
                  <span
                    className="repo-tag"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(proj);
                    }}
                  >
                    {proj.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expandable Technical Specification Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
