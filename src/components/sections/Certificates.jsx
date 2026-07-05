import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Eye } from 'lucide-react'
import { certificates } from '../../data/portfolioData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import CertificateModal from '../ui/CertificateModal'

export default function Certificates() {
  const [active, setActive] = useState(null)

  return (
    <section id="certificates" className="section-padding relative py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Proof of the hours put in"
          description="Click any certificate to view the original document."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.title}
              cert={cert}
              delay={(i % 3) * 0.1}
              onView={() => setActive(cert)}
            />
          ))}
        </div>
      </div>

      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </section>
  )
}

function CertificateCard({ cert, delay, onView }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard className="group overflow-hidden p-0" hover>
        <button
          onClick={onView}
          className="relative block h-44 w-full overflow-hidden"
          aria-label={`View ${cert.title} certificate`}
        >
          <img
            src={cert.image}
            alt={`${cert.title} certificate from ${cert.issuer}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-obsidian/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-emerald px-4 py-2 font-mono text-xs font-medium text-obsidian">
              <Eye size={13} /> View Certificate
            </span>
          </div>
        </button>

        <div className="p-5">
          <div className="flex items-start gap-2.5">
            <Award size={16} className="mt-0.5 flex-shrink-0 text-gold" />
            <div className="min-w-0">
              <h3 className="truncate font-display text-sm font-semibold text-ivory">
                {cert.title}
              </h3>
              <p className="mt-0.5 text-xs text-emerald-glow">{cert.issuer}</p>
            </div>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-sage">
            {cert.date}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  )
}
