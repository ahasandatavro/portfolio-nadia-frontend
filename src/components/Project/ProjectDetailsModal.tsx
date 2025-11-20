/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconX, IconArrowUpRight } from '@tabler/icons-react'
import { ProjectDetailsModalProps } from '@/Interfaces/ProjectDetailsModalProps'

export default function ProjectDetailsModal({ open, onClose, project }: ProjectDetailsModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <IconX size={18} />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-6 space-y-6">
                <p className="text-white/80">{project.projectDetails.overview}</p>

                {project.projectDetails.keyFeatures?.length > 0 && (
                  <section>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/70">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/85">
                      {project.projectDetails.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </section>
                )}

                {project.projectDetails.integrations?.length > 0 && (
                  <section>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/70">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.projectDetails.integrations.map((it, i) => (
                        <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-sm">{it}</span>
                      ))}
                    </div>
                  </section>
                )}

                {project.projectDetails.technicalStack?.length > 0 && (
                  <section>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/70">Technical Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.projectDetails.technicalStack.map((t, i) => (
                        <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-sm">{t}</span>
                      ))}
                    </div>
                  </section>
                )}

                {project.projectDetails.deployment && (
                  <section>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/70">Deployment</h4>
                    <p className="text-white/85">{project.projectDetails.deployment}</p>
                  </section>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 p-5 border-t border-white/10">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-black hover:bg-lime-300"
                >
                  <IconArrowUpRight size={18} />
                  <span>Visit Live</span>
                </a>
                <button
                  onClick={onClose}
                  className="rounded-full border border-white/15 px-4 py-2 text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
