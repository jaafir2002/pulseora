import { motion } from 'framer-motion'

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M13.5 9H15V6.5h-2c-2 0-3 1.2-3 3.2V11H8v2.5h2V20h2.5v-6.5H15V11h-2v-.6c0-.9.4-1.4 1.5-1.4H13.5V9z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zM17.8 8a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0zM12 5.5c-1.8 0-2 0-2.7 0-1.8.1-2.7 1-2.8 2.8 0 .7 0 .9 0 2.7s0 2 0 2.7c.1 1.8 1 2.7 2.8 2.8.7 0 .9 0 2.7 0s2 0 2.7 0c1.8-.1 2.7-1 2.8-2.8 0-.7 0-.9 0-2.7s0-2 0-2.7c-.1-1.8-1-2.7-2.8-2.8-.7 0-.9 0-2.7 0z',
  },
  {
    label: 'X',
    href: 'https://x.com',
    path: 'M17.2 6.5h1.6l-3.6 4.1 4.2 5.9h-3.3l-2.6-3.6-3 3.6H6.5l3.9-4.4L6.4 6.5H9.8l2.4 3.3 2.6-3.3zm-.6 9.2h.9L9.5 7.4h-1l7.1 8.3z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M7.2 9.5H9.8V18H7.2V9.5zM8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11.5 9.5h2.5v1.2h.1c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2V18h-2.5v-4c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18h-2.5V9.5z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    path: 'M19 9.2s-.1-1.4-.8-2c-.7-.8-1.6-.8-2-.9C13.4 6 12 6 12 6s-1.4 0-4.2.3c-.4 0-1.3.1-2 .9-.7.6-.8 2-.8 2S5 10.8 5 12.5v1.5c0 1.6.1 3.3.1 3.3s.1 1.4.8 2c.7.8 1.7.8 2.1.9 1.6.1 4 .2 4 .2s1.4 0 4.2-.3c.4 0 1.3-.1 2-.9.7-.6.8-2 .8-2s.1-1.6.1-3.3v-1.5c0-1.7-.1-3.2-.1-3.2zM10.5 15V10l4.5 2.5-4.5 2.5z',
  },
]

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies Settings', href: '#' },
  { label: '404', href: '#' },
]

export default function Footer() {
  return (
    <footer className="pt-16 pb-10">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <motion.div
          initial={{ opacity: 0.001, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden="true"
            className="select-none overflow-hidden text-center font-display leading-[0.85] font-extrabold uppercase tracking-[-0.03em] text-purple"
            style={{ fontSize: 'clamp(64px, 18vw, 220px)' }}
          >
            Pulseora
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-8 border-t-2 border-purple/20 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-purple bg-white text-purple transition-all duration-300 hover:-translate-y-1 hover:bg-purple hover:text-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-[13px] font-medium uppercase tracking-[-0.04em] text-purple transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t-2 border-purple/15 pt-5 text-center text-[13px] text-purple/65 md:text-left">
          © 2025 Pulseora. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
