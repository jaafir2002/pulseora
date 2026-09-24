import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import { itemVariants, Stagger } from '../components/Reveal'
import { speakers } from '../data/content'

export default function SpeakersPage() {
  return (
    <>
      <section className="pt-[120px] pb-10 md:pt-[150px]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <SectionHeader
            title="Speakers"
            subtitle="The thinkers, makers and leaders taking the Pulseora stage."
          />

          <Stagger className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4" stagger={0.08}>
            {speakers.map((s) => (
              <motion.article
                key={s.slug}
                variants={itemVariants}
                className="group overflow-hidden rounded-[24px] border-2 border-purple/15 bg-white shadow-[0_8px_30px_rgba(76,29,207,0.08)] transition-all duration-400 hover:-translate-y-2 hover:border-purple/40 hover:shadow-[0_18px_40px_rgba(76,29,207,0.16)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display text-[18px] font-extrabold text-purple">{s.name}</h3>
                  <p className="mt-1 text-[13px] text-purple/65">{s.role}</p>
                  <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-purple/55">
                    {s.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>
      <Footer />
    </>
  )
}
