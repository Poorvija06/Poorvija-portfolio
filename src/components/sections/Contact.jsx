import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../../data/portfolioData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Contact() {
  const [ref, isVisible] = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend is wired up — route the message through the visitor's
    // own mail client so it reaches poorvija@gmail.com directly.
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding relative py-28">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something worth shipping"
          description="Open to front-end and full-stack internship opportunities — reach out any time."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="flex h-full flex-col justify-between p-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-ivory">
                  Contact Details
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage">
                  The fastest way to reach me is email — I check it daily and reply within
                  a day or two.
                </p>

                <div className="mt-8 space-y-5">
                  <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                  <ContactRow icon={MapPin} label="Location" value={profile.location} />
                  <ContactRow icon={Github} label="GitHub" value="Poorvija06" href={profile.github} />
                  <ContactRow icon={Linkedin} label="LinkedIn" value="Poorvija Dhanu Sri D" href={profile.linkedin} />
                </div>
              </div>

              <div className="mt-8 flex gap-3 border-t border-white/5 pt-6">
                {[
                  { Icon: Github, href: profile.github },
                  { Icon: Linkedin, href: profile.linkedin },
                  { Icon: Mail, href: `mailto:${profile.email}` },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sage transition-all duration-300 hover:-translate-y-1 hover:border-emerald/50 hover:text-emerald-glow hover:shadow-glow"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ada Lovelace"
                    required
                  />
                  <Field
                    label="Your Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ada@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-sage">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the role, project, or idea..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ivory placeholder:text-sage/50 focus:border-emerald/50 focus:outline-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                  {submitted ? (
                    <>
                      Opening your mail app <CheckCircle2 size={15} />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald-glow">
        <Icon size={16} />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-sage">{label}</p>
        <p className="truncate text-sm text-ivory">{value}</p>
      </div>
    </div>
  )

  return href ? (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="block transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    content
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-sage">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ivory placeholder:text-sage/50 focus:border-emerald/50 focus:outline-none"
      />
    </div>
  )
}
