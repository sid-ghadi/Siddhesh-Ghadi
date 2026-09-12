import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section className="section skills" id="skills">
      <div className="section-kicker is-visible" data-reveal="" style={{ transitionDelay: '315ms' }}>
        <p className="eyebrow">Skills &amp; Technologies</p>
        <h2>Technical competencies across robotics, FPGA silicon design, PCB fabrication, and firmware.</h2>
      </div>

      <div className="skills-matrix">
        {portfolioData.skillCategories.map((skill, idx) => (
          <article
            key={skill.category}
            data-reveal=""
            className="is-visible"
            style={{ transitionDelay: `${320 + idx * 40}ms` }}
          >
            <span className="skill-logo">{skill.badge}</span>
            <h3>{skill.category}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
