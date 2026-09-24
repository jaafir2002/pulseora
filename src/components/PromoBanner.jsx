import Button from './Button'
import { RevealScale } from './Reveal'

export default function PromoBanner({
  eyebrow = 'Sponsored',
  title = 'Join the Night Music Experience',
  text = "Don't miss out on the best live music events. Book your tickets or subscribe now!",
  cta = 'Buy Tickets',
  href = '#register',
}) {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <RevealScale>
          <div
            id="register"
            className="flex flex-col items-center rounded-[30px] bg-purple px-6 py-16 text-center md:px-16 md:py-24"
          >
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[-0.05em] text-pink/80">
              {eyebrow}
            </p>
            <h2 className="max-w-3xl font-display text-[34px] leading-[1.08] text-white md:text-[52px]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-white/75">{text}</p>
            <div className="mt-9">
              <Button variant="white" href={href}>
                {cta}
              </Button>
            </div>
          </div>
        </RevealScale>
      </div>
    </section>
  )
}
