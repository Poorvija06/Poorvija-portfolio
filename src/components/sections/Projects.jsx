import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../../data/portfolioData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTilt } from '../../hooks/useTilt'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative py-28">
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I've shipped and deployed"
          description="Live, working applications — not just mockups. Click through to see them running."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const [revealRef, isVisible] = useScrollReveal()
  const { ref: tiltRef, style, onMouseMove, onMouseLeave } = useTilt(6)
  const accent = project.accent === 'gold' ? 'gold' : 'emerald'

  return (
    <motion.div
      ref={revealRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div
        ref={tiltRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={style}
        className="h-full transition-transform duration-200 ease-out"
      >
        <GlassCard className="group flex h-full flex-col overflow-hidden p-0" hover={false}>
          {/* header strip */}
          <div
            className={`relative flex h-36 items-center justify-center overflow-hidden ${
              accent === 'gold'
                ? 'bg-gradient-to-br from-gold/20 via-obsidian-surface to-obsidian-surface'
                : 'bg-gradient-to-br from-emerald/20 via-obsidian-surface to-obsidian-surface'
            }`}
          >
            <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-20" />
            <p
              className={`font-display text-3xl font-bold tracking-tight ${
                accent === 'gold' ? 'text-gold/40' : 'text-emerald/40'
              } transition-transform duration-500 group-hover:scale-110`}
            >
              {project.title}
            </p>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p
              className={`font-mono text-[11px] uppercase tracking-widest ${
                accent === 'gold' ? 'text-gold' : 'text-emerald-glow'
              }`}
            >
              {project.tagline}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ivory">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-sage">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-sage"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 font-mono text-xs font-medium transition-all duration-300 ${
                  accent === 'gold'
                    ? 'bg-gold text-obsidian hover:bg-gold-soft'
                    : 'bg-emerald text-obsidian hover:bg-emerald-glow'
                }`}
              >
                Live Demo <ArrowUpRight size={13} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sage transition-colors hover:border-emerald/50 hover:text-emerald-glow"
              >
                <Github size={15} />
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  )
}
