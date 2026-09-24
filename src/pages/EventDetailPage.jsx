import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { itemVariants, Reveal, Stagger } from '../components/Reveal'
import { events } from '../data/content'

export default function EventDetailPage() {
  const { slug } = useParams()
  const event = events.find((e) => e.slug === slug)

  if (!event) return <Navigate to="/events" replace />

  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3)

  return (
    <>
      <article className="pt-[110px] pb-8 md:pt-[130px]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <Reveal>
            <Link
              to="/events"
              className="mb-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[-0.04em] text-purple/70 transition-colors hover:text-purple"
            >
              ← All events
            </Link>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden rounded-[30px] border-2 border-purple/15">
              <motion.img
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                src={event.image}
                alt={event.title}
                className="aspect-[21/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/70 via-purple/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <p className="mb-2 text-[13px] font-semibold uppercase tracking-[-0.05em] text-pink">
                  {event.location}
                </p>
                <h1 className="font-display text-[36px] leading-[1] text-white md:text-[64px]">
                  {event.title}
                </h1>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-8">
              <Reveal>
                <div className="rounded-[30px] border-2 border-purple/15 bg-white/70 p-6 md:p-8">
                  <h2 className="font-display text-[28px] text-purple">About this event</h2>
                  <p className="mt-4 text-[15px] leading-[1.7] text-purple/75">
                    {event.description}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: 'Date', value: event.date },
                      { label: 'Venue', value: event.location },
                      { label: 'Doors', value: '1 hour before start' },
                    ].map((b) => (
                      <div
                        key={b.label}
                        className="rounded-[20px] border-2 border-purple/12 bg-pink/50 p-4"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[-0.04em] text-purple/55">
                          {b.label}
                        </p>
                        <p className="mt-1 text-[14px] font-medium text-purple">{b.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[30px] border-2 border-purple/15 bg-white/70 p-6 md:p-8">
                  <h2 className="font-display text-[28px] text-purple">Schedule</h2>
                  <div className="mt-5">
                    {event.schedule.map((s) => (
                      <div
                        key={s.time}
                        className="grid gap-2 border-b border-purple/10 py-4 last:border-b-0 md:grid-cols-[160px_1fr] md:gap-6"
                      >
                        <p className="text-[13px] font-semibold uppercase tracking-[-0.04em] text-purple/65">
                          {s.time}
                        </p>
                        <div>
                          <h3 className="font-display text-[18px] font-extrabold capitalize text-purple">
                            {s.title}
                          </h3>
                          <p className="mt-1 text-[14px] leading-relaxed text-purple/70">{s.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <aside className="rounded-[30px] border-2 border-purple/20 bg-white p-6 shadow-[0_12px_40px_rgba(76,29,207,0.12)] lg:sticky lg:top-24 lg:self-start">
                <h2 className="font-display text-[26px] text-purple">Tickets</h2>
                <div className="mt-5 flex flex-col gap-3">
                  {event.tickets.map((t) => (
                    <div
                      key={t.name}
                      className="rounded-[20px] border-2 border-purple/12 bg-pink/40 p-4 transition-colors hover:border-purple/40"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-display text-[17px] font-extrabold text-purple">
                          {t.name}
                        </p>
                        <p className="font-display text-[20px] font-extrabold text-purple">
                          {t.price}
                        </p>
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-purple/65">{t.includes}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="primary" className="w-full">
                    Buy Tickets
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Calendar
                  </Button>
                </div>
                <p className="mt-4 text-center text-[12px] text-purple/55">
                  Secure checkout · Instant QR delivery
                </p>
              </aside>
            </Reveal>
          </div>

          <section className="mt-16">
            <Reveal>
              <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="font-display text-[30px] text-purple md:text-[40px]">
                  More Upcoming Events
                </h2>
                <Button variant="outline" to="/events">
                  All Events
                </Button>
              </div>
            </Reveal>

            <Stagger className="grid gap-5 sm:grid-cols-3" stagger={0.1}>
              {related.map((rel) => (
                <motion.div key={rel.slug} variants={itemVariants}>
                  <Link
                    to={`/events/${rel.slug}`}
                    className="group block overflow-hidden rounded-[24px] border-2 border-purple/15 bg-white transition-all duration-400 hover:-translate-y-2 hover:border-purple/40 hover:shadow-[0_18px_40px_rgba(76,29,207,0.16)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-[20px] font-extrabold text-purple">
                        {rel.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-purple/65">{rel.date}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </Stagger>
          </section>
        </div>
      </article>
      <Footer />
    </>
  )
}
