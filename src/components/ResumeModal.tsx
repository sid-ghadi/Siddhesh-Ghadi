import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#140205]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#1c0408]/95 border border-[rgba(255,232,188,0.23)] shadow-2xl z-10 overflow-hidden text-[#ffe8bc]"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,232,188,0.23)] bg-[#120205]">
            <div className="flex items-center gap-2.5 font-mono text-xs text-[rgba(255,232,188,0.72)]">
              <span className="w-2 h-2 rounded-full bg-[#d21d36]" />
              <span className="font-bold tracking-wider text-[#fff7df] uppercase">
                SIDDHESH_GHADI_RESUME.PDF
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#ffe8bc] hover:bg-[#fff7df] hover:text-[#140205] border border-[rgba(255,232,188,0.23)] transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#d21d36]" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[rgba(255,232,188,0.6)] hover:text-white border border-transparent hover:border-[rgba(255,232,188,0.23)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content Scroll Area */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#1c0408]/95 print:p-0 print:bg-white print:text-black">
            {/* Header */}
            <div className="border-b border-[rgba(255,232,188,0.23)] pb-6">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#fff7df] tracking-tight">
                {portfolioData.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold tracking-wider text-[#d21d36] uppercase mt-1">
                {portfolioData.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[rgba(255,232,188,0.72)] mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d21d36]" />
                  {portfolioData.location}
                </span>
                <span>·</span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="hover:underline text-[#fff7df] flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d21d36]" />
                  {portfolioData.email}
                </a>
                {portfolioData.phone && (
                  <>
                    <span>·</span>
                    <a
                      href={`tel:${portfolioData.phone}`}
                      className="hover:underline text-[#fff7df] flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d21d36]" />
                      {portfolioData.phone}
                    </a>
                  </>
                )}
                <span>·</span>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#fff7df]"
                >
                  linkedin.com/in/siddhesh-ghadi
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d21d36] font-bold mb-2">
                Professional Summary
              </h2>
              <p className="text-sm text-[rgba(255,232,188,0.85)] leading-relaxed">
                {portfolioData.summary}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d21d36] font-bold mb-3">
                Professional Experience
              </h2>
              <div className="space-y-4 text-xs">
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.id} className="p-3 border border-[rgba(255,232,188,0.2)] bg-[rgba(18,2,5,0.6)]">
                    <div className="flex justify-between items-baseline mb-1">
                      <strong className="font-serif font-bold text-sm text-[#fff7df]">{exp.role}</strong>
                      <span className="font-mono text-[#d21d36]">{exp.period}</span>
                    </div>
                    <p className="text-[#ffe8bc] font-semibold mb-1">
                      {exp.company} — <span className="text-[rgba(255,232,188,0.6)] font-normal">{exp.location}</span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[rgba(255,232,188,0.75)]">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d21d36] font-bold mb-3">
                Key Hardware Projects
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-3 border border-[rgba(255,232,188,0.2)] bg-[rgba(18,2,5,0.6)]">
                  <strong className="text-sm text-[#fff7df] block mb-1">
                    Autonomous UAV System (Pixhawk &amp; Sensor Fusion)
                  </strong>
                  <p className="text-[rgba(255,232,188,0.75)]">
                    Developed an autonomous UAV system integrating with Pixhawk flight controller, multi-sensor fusion (IMU, GPS, camera), and real-time telemetry processing.
                  </p>
                </div>
                <div className="p-3 border border-[rgba(255,232,188,0.2)] bg-[rgba(18,2,5,0.6)]">
                  <strong className="text-sm text-[#fff7df] block mb-1">
                    FPGA-Based ALU Design (8-bit) | VHDL, Spartan-7
                  </strong>
                  <p className="text-[rgba(255,232,188,0.75)]">
                    Designed and implemented an 8-bit ALU using VHDL on FPGA with simulation, synthesis, and hardware validation of arithmetic and logic operations.
                  </p>
                </div>
                <div className="p-3 border border-[rgba(255,232,188,0.2)] bg-[rgba(18,2,5,0.6)]">
                  <strong className="text-sm text-[#fff7df] block mb-1">
                    Fast Voting Game Hardware System | KiCad, Discrete ICs
                  </strong>
                  <p className="text-[rgba(255,232,188,0.75)]">
                    Designed and fabricated a logic-based voting system with discrete electronic components, custom PCB layout, and hardware-level signal debouncing.
                  </p>
                </div>
                <div className="p-3 border border-[rgba(255,232,188,0.2)] bg-[rgba(18,2,5,0.6)]">
                  <strong className="text-sm text-[#fff7df] block mb-1">
                    WhatsApp-Powered Smart Inventory Automation | n8n, AI, WhatsApp API
                  </strong>
                  <p className="text-[rgba(255,232,188,0.75)]">
                    AI-powered WhatsApp inventory system for managing stock, prices, product records, and business data without manual spreadsheet updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="pt-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d21d36] font-bold mb-2">
                Education
              </h2>
              <div className="text-xs p-3 border border-[rgba(255,232,188,0.2)] bg-[rgba(18,2,5,0.6)]">
                <div className="flex justify-between items-baseline mb-1">
                  <strong className="font-serif font-bold text-sm text-[#fff7df]">{portfolioData.education.degree}</strong>
                  <span className="font-mono text-[#d21d36]">{portfolioData.education.year}</span>
                </div>
                <p className="text-[rgba(255,232,188,0.85)]">{portfolioData.education.institution}</p>
                <p className="text-[rgba(255,232,188,0.65)] mt-1">
                  Specialization: {portfolioData.education.specialization}
                </p>
                {portfolioData.education.coursework && (
                  <p className="text-[rgba(255,232,188,0.65)] mt-0.5">
                    Coursework: {portfolioData.education.coursework.join(', ')}
                  </p>
                )}
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#d21d36] font-bold mb-2">
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {portfolioData.certifications.map((cert) => (
                  <div key={cert.id} className="p-2.5 border border-[rgba(255,232,188,0.15)] bg-[rgba(18,2,5,0.4)]">
                    <span className="font-mono text-[#d21d36] text-[10px] block">{cert.date}</span>
                    <strong className="font-serif font-bold text-[#fff7df] block">{cert.title}</strong>
                    <span className="text-[rgba(255,232,188,0.6)] text-[11px]">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-[rgba(255,232,188,0.23)] bg-[#120205] flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[rgba(255,232,188,0.6)]">
              ROBOTICS &amp; VLSI ENGINEERING PORTFOLIO
            </span>
            <a
              href={`mailto:${portfolioData.email}?subject=Interview%20Inquiry%20-%20${portfolioData.name}`}
              className="header-cta text-xs"
            >
              Contact Candidate
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
