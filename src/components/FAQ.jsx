import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { faqs } from '../data/content'
import Button from './Button'
import { Reveal } from './Reveal'

function AccordionItem({ item, open, onToggle }) {
  return (
    <div className="border-t border-purple/25">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-purple-deep"
      >
        <span className="font-display text-[18px] font-extrabold capitalize text-purple md:text-[22px]">
          {item.q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-purple transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'rotate-180 bg-purple text-white' : 'bg-white/50 text-purple'
          }`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 4.5L7 9.5L12 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-[14px] leading-[1.7] text-purple/70">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ({ asPage = false }) {
  const [openIndex, setOpenIndex] = useState(0)

  const list = (
    <Reveal delay={asPage ? 0 : 0.1}>
      <div className="border-b border-purple/25">
        {faqs.map((item, i) => (
          <AccordionItem
            key={item.q}
            item={item}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </Reveal>
  )

  const helpCard = (
    <div className="mt-8 rounded-[24px] border-2 border-purple/15 bg-white/70 p-6">
      <p className="font-display text-[20px] font-extrabold text-purple">Still have questions?</p>
      <p className="mt-1 text-[14px] text-purple/70">We're here to help you!</p>
      <div className="mt-5">
        <Button variant="primary" href="mailto:hello@pulseora.events">
          Ask Question
        </Button>
      </div>
    </div>
  )

  if (asPage) {
    return <div className="max-w-3xl">{list}</div>
  }

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto grid w-[min(1200px,calc(100%-40px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[-0.05em] text-purple/60">
            Help center
          </p>
          <h2 className="font-display text-[36px] leading-[1.08] md:text-[48px] text-purple">
            FAQs
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-purple/70">
            Find answers to your questions about our night music events, ticketing, and venue
            details.
          </p>
          {helpCard}
        </Reveal>
        {list}
      </div>
    </section>
  )
}
