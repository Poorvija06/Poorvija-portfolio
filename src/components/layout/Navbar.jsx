import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { navLinks, profile } from '../../data/portfolioData'
import { useTheme } from '../../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="section-padding mx-auto flex max-w-7xl items-center justify-between">
        <div
          className={`glass-panel flex w-full items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? 'shadow-glass' : 'border-transparent bg-transparent backdrop-blur-none'
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="font-display text-lg font-semibold tracking-tight"
          >
            <span className="gradient-text">{profile.initials}</span>
            <span className="ml-2 hidden font-mono text-xs font-normal text-sage sm:inline">
              /{profile.firstName.toLowerCase()}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider text-sage transition-colors hover:bg-white/5 hover:text-emerald-glow"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ivory transition-colors hover:border-emerald/50 hover:text-emerald-glow"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ivory transition-colors hover:border-emerald/50 hover:text-emerald-glow lg:hidden"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="section-padding mx-auto mt-3 max-w-7xl overflow-hidden lg:hidden"
          >
            <div className="glass-panel flex flex-col gap-1 rounded-2xl p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wider text-sage transition-colors hover:bg-white/5 hover:text-emerald-glow"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
