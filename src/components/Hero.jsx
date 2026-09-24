import { motion } from 'framer-motion'
import { heroAvatars } from '../data/content'
import Button from './Button'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-purple/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-white/30 blur-3xl"
      />

      <div className="relative mx-auto w-[min(1200px,calc(100%-40px))]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <motion.h1
            initial={{ opacity: 0.001, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[720px] font-display text-[48px] leading-[0.98] font-extrabold tracking-[-0.02em] text-purple sm:text-[64px] md:text-[76px] lg:text-[90px]"
          >
            Design Pulse 2025, Berlin
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-w-md flex-col gap-6 lg:pt-4"
          >
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {heroAvatars.map((src, i) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt=""
                    width={56}
                    height={56}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.45 }}
                    className="h-12 w-12 rounded-full border-2 border-purple object-cover md:h-14 md:w-14"
                  />
                ))}
              </div>
              <a
                href="/#speakers"
                className="inline-flex items-center rounded-full border-2 border-purple bg-pink px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[-0.05em] text-purple transition-colors hover:bg-purple hover:text-white"
              >
                20+ Speakers
              </a>
            </div>

            <div>
              <p className="font-display text-[16px] font-extrabold uppercase tracking-tight text-purple md:text-[18px]">
                Berlin, 23 – 25 August 2025
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-purple/70">
                Join us for a transformative live event where top speakers, entrepreneurs, and
                thought leaders share insights that spark change.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" href="#register">
                Register for free
              </Button>
              <Button variant="outline" href="/#timeline">
                See The Timeline
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
