import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * The page's signature element: a glowing vertical trace that fills
 * as the visitor scrolls, evoking a circuit / signal path — fitting
 * for a CS & AI-leaning developer portfolio. Rendered once, fixed to
 * the left edge on desktop, hidden on small screens to avoid clutter.
 */
export default function CircuitLine() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.3,
  })

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-4 top-0 z-40 hidden h-full w-6 lg:block xl:left-8"
    >
      <div className="relative mx-auto h-full w-px bg-white/[0.06]">
        <motion.div
          style={{ scaleY, transformOrigin: 'top' }}
          className="absolute inset-0 w-px bg-gradient-to-b from-emerald-glow via-emerald to-gold shadow-[0_0_12px_rgba(52,211,153,0.6)]"
        />
        {/* traveling signal pulse */}
        <div className="absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-gold shadow-glow-gold animate-signal-travel" />
      </div>
    </div>
  )
}
