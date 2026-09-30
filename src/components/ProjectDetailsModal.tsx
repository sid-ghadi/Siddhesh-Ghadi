import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Cpu, Wrench, AlertTriangle, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040d1a]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#081a2e] border border-[rgba(147,183,224,0.3)] shadow-2xl z-10 overflow-hidden text-[#e9eef6]"
        >
          {/* Top Technical Control Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(147,183,224,0.22)] bg-[#040d1a]">
            <div className="flex items-center gap-3 font-mono text-xs text-[rgba(233,238,246,0.7)]">
              <span className="px-2 py-0.5 border border-[#e8963c] text-[#e8963c] font-bold">
                REV {project.rev}
              </span>
              <span className="font-semibold tracking-wider text-[#e9eef6] uppercase truncate max-w-[280px] sm:max-w-md">
                SPEC // {project.id.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#e9eef6] hover:text-[#e8963c] border border-[rgba(147,183,224,0.25)] hover:border-[#e8963c] transition-colors"
                  title="View Source on GitHub"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Repository</span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[rgba(233,238,246,0.6)] hover:text-white border border-transparent hover:border-[rgba(147,183,224,0.25)] transition-colors cursor-pointer"
                title="Close specification modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* Header info */}
            <div>
              <div className="font-mono text-xs tracking-wider text-[#e8963c] mb-1.5">
                {project.scope}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-[#e9eef6] leading-tight">
                {project.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[rgba(233,238,246,0.85)] leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Tools & Technologies */}
            <div className="border border-[rgba(147,183,224,0.2)] bg-[#040d1a] p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e8963c] mb-3 font-semibold">
                <Wrench className="w-4 h-4 text-[#e8963c]" />
                <span>Tools &amp; Hardware Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-2.5 py-1 border border-[rgba(147,183,224,0.25)] bg-[#081a2e] text-[#e9eef6]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Challenges & Mitigations */}
            <div className="border border-[rgba(147,183,224,0.2)] bg-[#040d1a] p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e8963c] mb-3 font-semibold">
                <AlertTriangle className="w-4 h-4 text-[#e8963c]" />
                <span>Engineering Challenges Solved</span>
              </div>
              <ul className="space-y-2.5">
                {project.challenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[rgba(233,238,246,0.8)] leading-relaxed">
                    <span className="font-mono text-xs text-[#e8963c] mt-0.5 flex-none font-bold">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Architecture & Implementation Highlights */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="border border-[rgba(147,183,224,0.2)] bg-[#040d1a] p-4 sm:p-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e8963c] mb-3 font-semibold">
                  <Layers className="w-4 h-4 text-[#e8963c]" />
                  <span>Architecture &amp; Core Implementation</span>
                </div>
                <ul className="space-y-2.5">
                  {project.architecture.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[rgba(233,238,246,0.8)] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#93b7e0] mt-2 flex-none" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Verified Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="border border-[rgba(147,183,224,0.2)] bg-[#040d1a] p-4 sm:p-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e8963c] mb-3 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#e8963c]" />
                  <span>Key Engineering Outcomes &amp; Verification</span>
                </div>
                <ul className="space-y-2">
                  {project.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[rgba(233,238,246,0.85)]">
                      <span className="text-[#e8963c] font-mono font-bold mr-1">&bull;</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="px-5 py-3 border-t border-[rgba(147,183,224,0.22)] bg-[#040d1a] flex items-center justify-between font-mono text-[0.68rem] text-[rgba(233,238,246,0.5)]">
            <span>SCHEMATIC REVISION LOG · SIDDHESH GHADI</span>
            <button
              type="button"
              onClick={onClose}
              className="text-[#e8963c] hover:underline uppercase tracking-wider"
            >
              Close Spec &times;
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
