import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTERS = 'PD'.split('')

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      const cleanup = setTimeout(onComplete, 600)
      return () => clearTimeout(cleanup)
    }, 1900)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-30" />

          <div className="relative flex items-center gap-1 font-display text-6xl font-semibold sm:text-7xl">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                className="gradient-text"
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.15 * i, duration: 0.6, ease: 'easeOut' }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="ml-1 h-3 w-3 rounded-full bg-emerald-glow shadow-glow"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </div>

          <motion.div
            className="relative mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-deep via-emerald to-gold"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.4, duration: 1.3, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.p
            className="relative mt-4 font-mono text-[11px] uppercase tracking-[0.4em] text-sage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Compiling portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
