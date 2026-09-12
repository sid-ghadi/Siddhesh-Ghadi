import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Building, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative z-10 border-t border-[#1A1A1A]">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-1.5 bg-[#8B0000]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B0000] font-bold">
              03 // Credentials
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E5E5E5] uppercase">
            Education & Certifications
          </h2>
          <p className="mt-2 text-sm text-[#777] max-w-2xl">
            Formal engineering foundations at the University of Mumbai supplemented by industry technology simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-6 sm:p-8 bg-[#111] border border-[#1A1A1A] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="p-2 border border-[#222] bg-[#161616]">
                  <GraduationCap className="w-5 h-5 text-[#8B0000]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#777] border border-[#222] bg-[#0E0E0E] px-2.5 py-1">
                  {portfolioData.education.year}
                </span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B0000] font-bold">
                Higher Education
              </span>
              <h3 className="font-display text-lg font-bold text-[#E5E5E5] mt-1.5">
                {portfolioData.education.institution}
              </h3>
              <p className="text-sm font-medium text-[#AAA] mt-1">
                {portfolioData.education.degree}
              </p>
              <p className="text-xs text-[#666] mt-2">
                Specialization: {portfolioData.education.specialization}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1A1A1A] flex items-center justify-between text-xs font-mono text-[#666]">
              <span>{portfolioData.education.location}</span>
              <span className="text-[#8B0000] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 bg-[#8B0000]" />
                Active
              </span>
            </div>
          </motion.div>

          {/* Certifications */}
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 * (idx + 1) }}
              className="p-6 sm:p-8 bg-[#111] border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="p-2 border border-[#222] bg-[#161616]">
                    <Award className="w-5 h-5 text-[#8B0000]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#777] border border-[#222] bg-[#0E0E0E] px-2.5 py-1">
                    {cert.type}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B0000] font-bold">
                  {cert.issuer}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#E5E5E5] mt-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#777] mt-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1A1A1A] flex items-center justify-between text-xs font-mono text-[#666]">
                <span className="flex items-center gap-1.5 text-[#AAA]">
                  <span className="w-1.5 h-1.5 bg-[#8B0000]" />
                  Verified Completion
                </span>
                <span className="text-[10px] uppercase tracking-wider">Simulation</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
