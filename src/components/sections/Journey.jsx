import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { journey } from '../../data/portfolioData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Journey() {
  return (
    <section id="journey" className="section-padding relative py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My Journey"
          title="Education and experience, side by side"
          description="Every internship and every semester feeding into the same skill set."
        />

        <div className="relative">
          {/* central spine */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald via-emerald/40 to-gold/40 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {journey.map((item, index) => (
              <JourneyItem key={`${item.title}-${item.period}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneyItem({ item, index }) {
  const [ref, isVisible] = useScrollReveal()
  const isLeft = index % 2 === 0
  const Icon = item.type === 'education' ? GraduationCap : Briefcase

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-10 ${
        isLeft ? '' : ''
      }`}
    >
      {/* node marker */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute left-[11px] top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-obsidian ring-4 ring-emerald/30 sm:left-1/2 sm:-translate-x-1/2"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-glow shadow-glow animate-pulse-node" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`pl-10 sm:pl-0 ${
          isLeft ? 'sm:col-start-1 sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'
        }`}
      >
        <GlassCard className="p-6 text-left" hover>
          <div
            className={`mb-3 flex items-center gap-2 ${
              isLeft ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                item.type === 'education'
                  ? 'bg-gold/10 text-gold'
                  : 'bg-emerald/10 text-emerald-glow'
              }`}
            >
              <Icon size={15} />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-sage">
              {item.period}
            </span>
          </div>

          <h3 className="font-display text-lg font-semibold text-ivory">{item.title}</h3>
          <p className="mt-1 text-sm font-medium text-emerald-glow">{item.org}</p>
          <p className="mt-0.5 text-xs text-sage">{item.location}</p>
          <p className="mt-3 text-sm leading-relaxed text-sage">{item.description}</p>

          <div
            className={`mt-4 flex flex-wrap gap-2 ${
              isLeft ? 'sm:justify-end' : ''
            }`}
          >
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-sage"
              >
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* empty spacer column to keep the alternating grid balanced on desktop */}
      <div className="hidden sm:block" />
    </div>
  )
}
