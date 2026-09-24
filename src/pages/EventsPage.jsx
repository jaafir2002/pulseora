import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import { itemVariants, Stagger } from '../components/Reveal'
import { events } from '../data/content'

export default function EventsPage() {
  return (
    <>
      <section className="pt-[120px] pb-10 md:pt-[150px]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <SectionHeader
            title="Events"
            subtitle="Browse every Pulseora gathering — conferences, night formats and sunrise sessions."
          />

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {events.map((event) => (
              <motion.div key={event.slug} variants={itemVariants}>
                <Link
                  to={`/events/${event.slug}`}
                  className="group block h-full overflow-hidden rounded-[24px] border-2 border-purple/15 bg-white shadow-[0_8px_30px_rgba(76,29,207,0.08)] transition-all duration-400 hover:-translate-y-2 hover:border-purple/40 hover:shadow-[0_18px_40px_rgba(76,29,207,0.16)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[22px] font-extrabold text-purple">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[-0.04em] text-purple/55">
                      Starts At:
                    </p>
                    <p className="text-[14px] font-medium text-purple">{event.date}</p>
                    <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-purple/65">
                      {event.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
      <Footer />
    </>
  )
}
