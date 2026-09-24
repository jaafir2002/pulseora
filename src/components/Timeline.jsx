import { timeline } from '../data/content'
import Button from './Button'
import SectionHeader from './SectionHeader'
import { itemVariants, Reveal, Stagger } from './Reveal'

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 md:py-24">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <SectionHeader
          eyebrow="Stay in the loop"
          title="Timeline for the event"
          subtitle="Join us for an unforgettable night filled with music and energy. Check out our upcoming events below!"
          actions={
            <Button variant="primary" href="#register">
              Get tickets
            </Button>
          }
        />

        <div className="flex flex-col gap-10">
          {timeline.map((day, di) => (
            <Reveal key={day.day} delay={di * 0.05}>
              <div className="rounded-[30px] border-2 border-purple/15 bg-white/60 p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-1 border-b-2 border-purple/10 pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="font-display text-[26px] md:text-[32px] text-purple">
                      {day.day}
                    </h3>
                    <p className="mt-1 text-[14px] text-purple/65">{day.subtitle}</p>
                  </div>
                </div>

                <Stagger className="flex flex-col" stagger={0.06}>
                  {day.items.map((item) => (
                    <div
                      key={item.time + item.title}
                      variants={itemVariants}
                      className="group grid gap-2 border-b border-purple/10 py-5 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-8"
                    >
                      <p className="text-[13px] font-semibold uppercase tracking-[-0.04em] text-purple/70">
                        {item.time}
                      </p>
                      <div>
                        <h4 className="font-display text-[18px] font-extrabold capitalize text-purple md:text-[20px]">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-purple/70">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
