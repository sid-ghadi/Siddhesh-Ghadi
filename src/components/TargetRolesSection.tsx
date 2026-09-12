import React from 'react';

export const TargetRolesSection: React.FC = () => {
  return (
    <section className="section profile-grid" id="about">
      <div className="section-kicker is-visible" data-reveal="" style={{ transitionDelay: '135ms' }}>
        <p className="eyebrow">My Direction</p>
        <h2>Where robotics, hardware, and intelligent automation come together.</h2>
      </div>

      <div className="role-board">
        <article data-reveal="" className="is-visible" style={{ transitionDelay: '180ms' }}>
          <span>01</span>
          <h3>Robotics &amp; Autonomous Systems</h3>
          <p>
            Specialized in UAV integration, Pixhawk flight controllers, multi-sensor fusion (IMU, GPS, camera),
            real-time stabilization, and field mission flight testing.
          </p>
        </article>

        <article data-reveal="" className="is-visible" style={{ transitionDelay: '225ms' }}>
          <span>02</span>
          <h3>FPGA &amp; Digital Hardware Design</h3>
          <p>
            Hands-on with VHDL RTL development, FPGA implementation on Xilinx Spartan-7, 8-bit ALU microarchitecture,
            and simulation-driven hardware verification.
          </p>
        </article>

        <article data-reveal="" className="is-visible" style={{ transitionDelay: '270ms' }}>
          <span>03</span>
          <h3>Embedded Systems &amp; PCB Engineering</h3>
          <p>
            Designing custom multi-layer PCB layouts using KiCad, microcontroller firmware integration (Arduino, C/C++),
            and hardware-level sensor debugging.
          </p>
        </article>

        <article data-reveal="" className="is-visible" style={{ transitionDelay: '315ms' }}>
          <span>04</span>
          <h3>AI Automation &amp; n8n Workflows</h3>
          <p>
            Building intelligent automation workflows with n8n, integrating AI agents, APIs, webhooks, and digital tools to automate repetitive tasks and streamline real-world processes.
          </p>
        </article>
      </div>
    </section>
  );
};
