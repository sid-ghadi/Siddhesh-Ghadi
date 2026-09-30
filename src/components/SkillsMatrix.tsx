import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="sheet-label" data-reveal>
        <span className="tag">SHEET 02</span>
        <span className="rule" />
        <span>SKILLS &amp; TECHNOLOGIES</span>
      </div>

      <h2 className="h-title" data-reveal>
        Technical competencies across robotics, FPGA silicon design, PCB fabrication, and firmware.
      </h2>

      <div style={{ height: '36px' }} />

      <div className="skills-grid" data-reveal>
        {portfolioData.skillCategories.map((skill) => (
          <div key={skill.category} className="skill-cell">
            <span className="skill-badge">{skill.badge}</span>
            <h3>{skill.category}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
