import { motion } from 'framer-motion'
import { useState } from 'react'
import { testimonials } from '../data/content'
import SectionHeader from './SectionHeader'
import { itemVariants, Stagger } from './Reveal'

export default function Testimonials({ asPage = false }) {
  const [active, setActive] = useState(0)

  const panel = (
    <motion.div
      initial={{ opacity: 0.001, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[30px] bg-purple px-6 py-14 md:px-12 md:py-20"
    >
      {!asPage && (
        <SectionHeader
          title="Testimonials"
          light
          align="center"
          subtitle="Stories from organizers who ran unforgettable events with Pulseora."
        />
      )}

      <Stagger className={`grid gap-5 ${asPage ? 'md:grid-cols-3' : 'md:grid-cols-3'}`} stagger={0.12}>
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.brand}
            variants={itemVariants}
            onMouseEnter={() => setActive(i)}
            className={`flex flex-col rounded-[24px] border-2 p-6 transition-all duration-300 ${
              active === i
                ? 'border-pink/50 bg-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.18)] -translate-y-1'
                : 'border-white/15 bg-white/6 hover:bg-white/10'
            }`}
          >
            <h3 className="font-display text-[22px] font-extrabold text-white">{t.brand}</h3>
            <blockquote className="mt-3 flex-1 text-[14px] leading-[1.65] text-white/80">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                className="h-11 w-11 rounded-full border-2 border-pink/60 object-cover"
              />
              <div>
                <p className="text-[14px] font-semibold text-white">{t.name}</p>
                <p className="text-[12px] text-white/65">
                  {t.role} · {t.company}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </Stagger>
    </motion.div>
  )

  if (asPage) return panel

  return (
    <section id="testimonial" className="py-8 md:py-12">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">{panel}</div>
    </section>
  )
}
