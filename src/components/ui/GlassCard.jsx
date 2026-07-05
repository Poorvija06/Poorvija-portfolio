export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`glass-card ${
        hover
          ? 'hover:-translate-y-1 hover:border-emerald/40 hover:shadow-glow'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
