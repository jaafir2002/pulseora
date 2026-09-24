import { motion } from 'framer-motion'
import { speakers } from '../data/content'
import Button from './Button'
import SectionHeader from './SectionHeader'
import { itemVariants, Stagger } from './Reveal'

export default function Speakers() {
  const shown = speakers.slice(0, 4)

  return (
    <section id="speakers" className="py-16 md:py-24">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <SectionHeader
          title="Speakers"
          subtitle="We'd love to hear from you!"
          actions={
            <>
              <Button variant="primary" href="#register">
                Apply To Speak
              </Button>
              <Button variant="outline" to="/speakers">
                All Speakers
              </Button>
            </>
          }
        />

        <Stagger
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          stagger={0.1}
        >
          {shown.map((s) => (
            <motion.a
              key={s.slug}
              href="/speakers"
              variants={itemVariants}
              className="group block"
            >
              <div className="overflow-hidden rounded-[24px] border-2 border-purple/15 bg-white shadow-[0_8px_30px_rgba(76,29,207,0.08)] transition-all duration-400 group-hover:-translate-y-2 group-hover:border-purple/40 group-hover:shadow-[0_18px_40px_rgba(76,29,207,0.16)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple/80 to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <p className="text-[12px] font-semibold uppercase tracking-[-0.04em] text-pink">
                      {s.role}
                    </p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-display text-[16px] font-extrabold capitalize text-purple md:text-[20px]">
                    {s.name}
                  </h4>
                  <p className="mt-1 hidden text-[13px] text-purple/65 md:block">{s.role}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
