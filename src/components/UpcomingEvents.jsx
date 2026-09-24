import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { events } from '../data/content'
import Button from './Button'
import SectionHeader from './SectionHeader'
import { itemVariants, Stagger } from './Reveal'

function EventCard({ event }) {
  return (
    <Link
      to={`/events/${event.slug}`}
      className="group block w-[280px] shrink-0 sm:w-[300px]"
    >
      <motion.article
        variants={itemVariants}
        className="overflow-hidden rounded-[24px] border-2 border-purple/15 bg-white shadow-[0_8px_30px_rgba(76,29,207,0.08)] transition-all duration-400 group-hover:-translate-y-2 group-hover:border-purple/40 group-hover:shadow-[0_18px_40px_rgba(76,29,207,0.18)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <span className="absolute left-4 top-4 rounded-full border-2 border-purple bg-pink px-3 py-1 text-[11px] font-semibold uppercase tracking-[-0.04em] text-purple">
            Upcoming
          </span>
        </div>
        <div className="flex flex-col gap-3 p-5">
          <h3 className="font-display text-[22px] font-extrabold capitalize text-purple">
            {event.title}
          </h3>
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[-0.04em] text-purple/60">
              Starts At:
            </p>
            <p className="text-[14px] font-medium text-purple">{event.date}</p>
          </div>
          <p className="line-clamp-2 text-[13px] leading-relaxed text-purple/65">
            {event.description}
          </p>
          <span className="mt-1 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[-0.04em] text-purple">
            View event
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </motion.article>
    </Link>
  )
}

export default function UpcomingEvents() {
  const homeEvents = events.slice(0, 4)

  return (
    <section id="events" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <SectionHeader
          title="Upcoming Events"
          subtitle="We'd love to hear from you!"
          actions={
            <Button variant="outline" to="/events">
              All Events
            </Button>
          }
        />

        <Stagger className="flex gap-5 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {homeEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
