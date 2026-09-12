/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { InitializationBoot } from './components/InitializationBoot';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TargetRolesSection } from './components/TargetRolesSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsLedgerSection } from './components/ProjectsLedgerSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProofSection } from './components/ProofSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [bootReady, setBootReady] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll-triggered data-reveal animations
    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [bootReady]);

  return (
    <>
      {/* Background Lighting & Architectural Polygon Geometry */}
      <AmbientBackground />

      {/* Branded System Initialization Boot Frame */}
      <InitializationBoot onComplete={() => setBootReady(true)} />

      {/* Floating Top Navigation Header */}
      <Navigation onOpenResume={() => setResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* About / Target Roles Section */}
        <TargetRolesSection />

        {/* Skills & Technologies Section */}
        <SkillsMatrix />

        {/* Selected Projects / Project Ledger Section */}
        <ProjectsLedgerSection />

        {/* Professional Experience Section */}
        <ExperienceSection />

        {/* Certifications / Proof Section */}
        <ProofSection />

        {/* Education Stack Section */}
        <EducationSection />

        {/* Contact Panel & Site Footer */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Printable & Interactive Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
