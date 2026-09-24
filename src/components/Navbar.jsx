import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-[8px] shadow-[0_1px_0_rgba(76,29,207,0.12)]'
          : 'bg-transparent'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(255,196,233,0.86)' : 'transparent' }}
    >
      <div className="mx-auto flex h-[72px] w-[min(1200px,calc(100%-40px))] items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display text-[26px] font-extrabold lowercase tracking-tight text-purple transition-transform duration-300 hover:scale-[1.03]"
        >
          pulseora
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group relative px-3 py-2 text-[13px] font-medium uppercase tracking-[-0.05em] transition-colors ${
                    isActive ? 'text-purple' : 'text-purple/75 hover:text-purple'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.label}</span>
                    <motion.span
                      className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-purple"
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                    <span
                      className="pointer-events-none absolute inset-0 rounded-[8px] bg-white/0 transition-colors duration-300 group-hover:bg-white/45"
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
              {i < navLinks.length - 1 && (
                <span className="text-purple/40" aria-hidden="true">
                  /
                </span>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/events" className="hidden md:inline-flex !px-5 !py-2.5 !text-[13px]">
            Get Tickets
          </Button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-[12px] border-2 border-purple bg-white/60 lg:hidden"
          >
            <span
              className={`block h-[2px] w-5 bg-purple transition-transform duration-300 ${
                open ? 'translate-y-[8px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-purple transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-purple transition-transform duration-300 ${
                open ? '-translate-y-[8px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t-2 border-purple/15 bg-pink/95 backdrop-blur-[8px] lg:hidden"
          >
            <div className="mx-auto flex w-[min(1200px,calc(100%-40px))] flex-col gap-1 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex rounded-[12px] px-3 py-3 text-[15px] font-medium uppercase tracking-[-0.05em] transition-colors ${
                        isActive
                          ? 'bg-purple text-white'
                          : 'text-purple hover:bg-white/50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Button className="mt-3 w-full" to="/events" onClick={closeMenu}>
                Get Tickets
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
