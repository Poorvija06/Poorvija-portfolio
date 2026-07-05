import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { profile, stats } from '../../data/portfolioData'
import { useTilt } from '../../hooks/useTilt'

const ROLES = ['Front-End Developer', 'CSE Student']

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(8)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-[0.15]" />
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-emerald/20 blur-[100px]" />
      <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />

      <div className="section-padding relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/5 px-4 py-1.5"
          >
            <Sparkles size={13} className="text-gold" />
            <span className="font-mono text-xs tracking-wide text-emerald-glow">
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[4.2rem]"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{profile.firstName}</span>
            <br />
            <span className="text-ivory/90">a </span>
            <span className="relative text-emerald-glow">
              {typed}
              <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-gold align-middle" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-sage sm:text-lg"
          >
            {profile.tagline} I'm {profile.subtitle.toLowerCase()} at M.A.M. College of
            Engineering and Technology, turning React components and Tailwind utilities
            into experiences people enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              View My Work <ArrowDown size={15} />
            </a>
            <a
      href={profile.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
     className="btn-ghost"
>
  📄 Download Resume
</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { Icon: Github, href: profile.github, label: 'GitHub' },
              { Icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sage transition-all duration-300 hover:-translate-y-1 hover:border-emerald/50 hover:text-emerald-glow hover:shadow-glow"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: tilting glass card with photo + stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={style}
            className="glass-card relative overflow-hidden rounded-[2rem] p-6 transition-transform duration-200 ease-out"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.title}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            </div>

            <div className="relative mt-6 text-center">
              <p className="font-display text-lg font-semibold text-ivory">{profile.name}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-emerald-glow">
                {profile.title}
              </p>
            </div>

            <div className="relative mt-6 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-xl font-semibold text-gold sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 px-1 font-mono text-[9px] uppercase leading-tight tracking-wider text-sage">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* floating decorative badge */}
          <motion.div
            className="glass-panel absolute -left-8 top-8 hidden rounded-xl px-3 py-2 sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-mono text-[10px] text-emerald-glow">{'<React />'}</p>
          </motion.div>
          <motion.div
            className="glass-panel absolute -bottom-6 -right-6 hidden rounded-xl px-3 py-2 sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <p className="font-mono text-[10px] text-gold">Tailwind CSS</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sage sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  )
}
