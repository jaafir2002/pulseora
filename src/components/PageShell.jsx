import Footer from './Footer'
import { Reveal } from './Reveal'

export default function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
  showFooter = true,
}) {
  return (
    <>
      <section className="pt-[120px] pb-12 md:pt-[150px] md:pb-16">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          <Reveal y={28}>
            {eyebrow && (
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[-0.05em] text-purple/60">
                {eyebrow}
              </p>
            )}
            <h1 className="max-w-3xl font-display text-[40px] leading-[1.05] text-purple md:text-[64px]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-purple/70">
                {subtitle}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">{children}</div>
      </section>

      {showFooter && <Footer />}
    </>
  )
}
