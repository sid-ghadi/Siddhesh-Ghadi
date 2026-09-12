import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ProjectsLedgerSection: React.FC = () => {
  return (
    <section className="section projects" id="projects">
      <div className="section-kicker is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
        <p className="eyebrow">Selected Projects</p>
      </div>

      <div className="project-ledger">
        {/* 01 Priority */}
        <article className="project-row priority is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
          <div className="rank">01</div>
          <div>
            <p className="project-label">Autonomous UAV + Carbon Fiber Airframe</p>
            <h3>Autonomous UAV Flight Platform &amp; Telemetry</h3>
          </div>
          <p>
            Designed, assembled, and flight-tested an autonomous quadcopter on a custom carbon fiber frame,
            transitioning from manual flight control to full autonomous navigation and mission execution.
          </p>
          <span className="repo-tag">PhoenixAI</span>
        </article>

        {/* 02 Priority Alt */}
        <article className="project-row priority alt is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
          <div className="rank">02</div>
          <div>
            <p className="project-label">VHDL + Xilinx Spartan-7 FPGA</p>
            <h3>FPGA-Based ALU Design (8-bit)</h3>
          </div>
          <p>
            Designed and implemented an 8-bit Arithmetic Logic Unit on FPGA using VHDL, verified through
            rigorous testbenches, timing analysis, and board-level hardware testing.
          </p>
          <a
            className="repo-tag project-link"
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </article>

        {/* 03 */}
        <article className="project-row link-row is-visible" data-reveal="" style={{ transitionDelay: '360ms' }}>
          <div className="rank">03</div>
          <div>
            <p className="project-label">Custom PCB + Digital ICs (555 Timer)</p>
            <h3>Fast Voting Game Hardware System</h3>
          </div>
          <p>
            Designed and fabricated a logic-based voting system with discrete electronic components, custom PCB
            layout, and hardware-level signal debouncing.
          </p>
          <span className="repo-tag">PCB / KiCad</span>
        </article>

        {/* 04 */}
        <article className="project-row link-row is-visible" data-reveal="" style={{ transitionDelay: '400ms' }}>
          <div className="rank">04</div>
          <div>
            <p className="project-label">AI Automation + n8n + WhatsApp</p>
            <h3>WhatsApp-Powered Smart Inventory Automation</h3>
          </div>
          <p>
            AI-powered WhatsApp inventory system for managing stock, prices, product records, and business data without manual spreadsheet updates.
          </p>
          <span className="repo-tag">n8n / WhatsApp</span>
        </article>
      </div>
    </section>
  );
};
