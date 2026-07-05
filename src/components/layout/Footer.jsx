import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { profile, navLinks } from '../../data/portfolioData'

const iconMap = { Github, Linkedin, Mail }

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5">
      <div className="section-padding mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="font-display text-2xl font-semibold">
              <span className="gradient-text">{profile.initials}</span>
              <span className="ml-2 text-ivory">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage">
              {profile.tagline} Currently {profile.availability.toLowerCase()}.
            </p>
          </div>

          <div>
            <h4 className="heading-eyebrow mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sage transition-colors hover:text-emerald-glow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-eyebrow mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-sage transition-colors hover:text-emerald-glow"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-sage transition-colors hover:text-emerald-glow"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-sage transition-colors hover:text-emerald-glow"
                >
                  <Mail size={14} /> {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-sage">
            © {year} {profile.name}.copyrights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ivory transition-colors hover:border-emerald/50 hover:text-emerald-glow"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
