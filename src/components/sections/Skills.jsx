import { motion } from 'framer-motion'
import {
  FileCode2,
  Palette,
  Braces,
  Atom,
  Wind,
  GitBranch,
  Triangle,
  Cloud,
  BrainCircuit,
  Leaf,
  CloudCog,
} from 'lucide-react'
import { skills } from '../../data/portfolioData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const ICONS = {
  HTML5: FileCode2,
  CSS3: Palette,
  JavaScript: Braces,
  'React.js': Atom,
  'Tailwind CSS': Wind,
  'Git & GitHub': GitBranch,
  Vercel: Triangle,
  Render: Cloud,
  'Artificial Intelligence': BrainCircuit,
  MongoDB: Leaf,
  'Cloud Computing': CloudCog,
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative py-28">
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-emerald/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skill Set"
          title="The stack behind the interfaces"
          description="Tools and technologies I reach for, grouped by where they live in my workflow."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <SkillGroup key={group.category} group={group} delay={groupIndex * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, delay }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <GlassCard className="h-full p-7">
        <h3 className="heading-eyebrow mb-6">{group.category}</h3>
        <div className="space-y-5">
          {group.items.map((skill, i) => {
            const Icon = ICONS[skill.name] || Braces
            return (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald/10 text-emerald-glow"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                    >
                      <Icon size={15} />
                    </motion.div>
                    <span className="text-sm font-medium text-ivory">{skill.name}</span>
                  </div>
                  <span className="font-mono text-xs text-sage">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-deep via-emerald to-emerald-glow"
                    initial={{ width: '0%' }}
                    animate={isVisible ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: delay + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </GlassCard>
    </motion.div>
  )
}
