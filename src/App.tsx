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
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [bootReady, setBootReady] = useState(false);

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
      <Navigation />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About / Target Roles Section */}
        <TargetRolesSection />

        {/* Skills & Technologies Section */}
        <SkillsMatrix />

        {/* Selected Projects / Project Ledger Section */}
        <ProjectsLedgerSection />

        {/* Professional Experience Section */}
        <ExperienceSection />

        {/* Education Stack & Certifications Section */}
        <EducationSection />

        {/* Contact Panel & Site Footer */}
        <ContactSection />
      </main>
    </>
  );
}
