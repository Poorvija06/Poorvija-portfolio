import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Building2 } from 'lucide-react'
import { useEffect } from 'react'

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [certificate, onClose])

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-obsidian/90 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.title} certificate preview`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border-emerald/20 p-3 shadow-glow sm:p-4"
          >
            <div className="mb-3 flex items-start justify-between gap-4 px-2 pt-1">
              <div>
                <h3 className="font-display text-lg font-semibold text-ivory sm:text-xl">
                  {certificate.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-sage">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={13} className="text-emerald-glow" />
                    {certificate.issuer}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-gold" />
                    {certificate.date}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close certificate preview"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory transition-colors hover:border-emerald/50 hover:text-emerald-glow"
              >
                <X size={16} />
              </button>
            </div>
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate from ${certificate.issuer}`}
              className="w-full rounded-xl border border-white/10"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
