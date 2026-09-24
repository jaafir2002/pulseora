import { motion } from 'framer-motion'
import { stories } from '../data/content'
import Button from './Button'
import SectionHeader from './SectionHeader'
import { itemVariants, Stagger } from './Reveal'

export default function Stories({ asPage = false }) {
  const header = !asPage && (
    <SectionHeader
      eyebrow="Enjoy reading Cool Stories"
      title="Latest Stories"
      subtitle="Discover the hottest night music events happening in your area this February!"
      actions={
        <Button variant="outline" to="/stories">
          Read All Stories
        </Button>
      }
    />
  )

  const grid = (
    <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.1}>
      {stories.map((story) => (
        <motion.article
          key={story.slug}
          variants={itemVariants}
          className="group flex flex-col overflow-hidden rounded-[24px] border-2 border-purple/15 bg-white shadow-[0_8px_30px_rgba(76,29,207,0.08)] transition-all duration-400 hover:-translate-y-2 hover:border-purple/40 hover:shadow-[0_18px_40px_rgba(76,29,207,0.16)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <p className="text-[12px] font-medium uppercase tracking-[-0.04em] text-purple/55">
              {story.date}
            </p>
            <h3 className="font-display text-[20px] leading-tight font-extrabold text-purple">
              {story.title}
            </h3>
            <p className="line-clamp-3 flex-1 text-[14px] leading-relaxed text-purple/70">
              {story.excerpt}
            </p>
            <span className="mt-2 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[-0.04em] text-purple">
              Read Full Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </motion.article>
      ))}
    </Stagger>
  )

  if (asPage) return grid

  return (
    <section id="stories" className="py-16 md:py-24">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        {header}
        {grid}
      </div>
    </section>
  )
}
