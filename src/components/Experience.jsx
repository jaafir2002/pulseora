import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from './Reveal'

const features = [
  {
    title: 'Unforgettable Nights',
    text: 'Immerse yourself in a world of rhythm and connection under the stars.',
  },
  {
    title: 'Live Performances',
    text: 'Discover talented artists bringing their passion to life in an electric atmosphere.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04])
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto grid w-[min(1200px,calc(100%-40px))] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[-0.05em] text-purple/60">
            Sponsored
          </p>
          <h2 className="font-display text-[34px] leading-[1.08] md:text-[46px] text-purple">
            Experience the Magic of Night Music Events
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-[1.65] text-purple/70">
            Join us for unforgettable nights filled with mesmerizing music and vibrant energy. Our
            events create a unique atmosphere that captivates and inspires.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.1 + i * 0.1}>
                <div className="rounded-[24px] border-2 border-purple/15 bg-white/70 p-5 transition-colors hover:border-purple/40 hover:bg-white">
                  <h3 className="font-display text-[20px] font-extrabold capitalize text-purple">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-purple/70">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div ref={ref} className="order-1 lg:order-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[20px] border-2 border-purple/20">
              <motion.img
                style={{ scale, y }}
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80"
                alt="Night music event crowd"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/30 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
