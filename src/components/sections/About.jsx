import { motion } from 'framer-motion'
import { Code2, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../../data/portfolioData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const highlights = [
  {
    icon: Code2,
    title: 'Front-End Focused',
    text: 'React & Tailwind CSS as daily tools, with an eye for detail in every pixel.',
  },
  {
    icon: GraduationCap,
    title: 'Always Learning',
    text: 'From Cloud Computing to MongoDB, I stack certifications alongside coursework.',
  },
  {
    icon: MapPin,
    title: 'Based in Tamil Nadu',
    text: 'Working with teams across Trichy, Madurai, Coimbatore, and Theni.',
  },
]

export default function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className="section-padding relative py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building at the edge of logic and feeling"
          description="A closer look at how I think, learn, and build."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div ref={ref}>
            {profile.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="mb-5 text-base leading-relaxed text-sage sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2"
            >
              <Sparkles size={14} className="text-gold" />
              <span className="font-mono text-xs text-gold">
                "{profile.tagline}"
              </span>
            </motion.div>
          </div>

          <div className="grid gap-5">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <HighlightCard key={title} icon={Icon} title={title} text={text} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HighlightCard({ icon: Icon, title, text, delay }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <GlassCard className="flex items-start gap-4 p-6">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald-glow">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-ivory">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-sage">{text}</p>
        </div>
      </GlassCard>
    </motion.div>
  )
}
