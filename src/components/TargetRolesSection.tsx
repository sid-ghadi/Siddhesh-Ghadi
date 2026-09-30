import React from 'react';

export const TargetRolesSection: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="sheet-label" data-reveal>
        <span className="tag">SHEET 01</span>
        <span className="rule" />
        <span>MY DIRECTION</span>
      </div>

      <h2 className="h-title" data-reveal>
        Where robotics, hardware, and intelligent automation come together.
      </h2>

      <div style={{ height: '36px' }} />

      <div className="direction-grid" data-reveal>
        <div className="dir-card">
          <span className="dir-tag">SYS · FLIGHT</span>
          <h3>Robotics &amp; Autonomous Systems</h3>
          <p>
            Specialized in UAV integration, Pixhawk flight controllers, multi-sensor fusion (IMU, GPS, camera),
            real-time stabilization, and field mission flight testing.
          </p>
        </div>

        <div className="dir-card">
          <span className="dir-tag">SYS · SILICON</span>
          <h3>FPGA &amp; Digital Hardware Design</h3>
          <p>
            Hands-on with VHDL RTL development, FPGA implementation on Xilinx Spartan-7, 8-bit ALU microarchitecture,
            and simulation-driven hardware verification.
          </p>
        </div>

        <div className="dir-card">
          <span className="dir-tag">SYS · BOARD</span>
          <h3>Embedded Systems &amp; PCB Engineering</h3>
          <p>
            Designing custom multi-layer PCB layouts using KiCad, microcontroller firmware integration (Arduino, C/C++),
            and hardware-level sensor debugging.
          </p>
        </div>

        <div className="dir-card">
          <span className="dir-tag">SYS · AUTOMATE</span>
          <h3>AI Automation &amp; n8n Workflows</h3>
          <p>
            Building intelligent automation workflows with n8n, integrating AI agents, APIs, webhooks, and digital
            tools to automate repetitive tasks and streamline real-world processes.
          </p>
        </div>
      </div>
    </section>
  );
};
