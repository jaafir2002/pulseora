import Button from './Button'
import { RevealScale } from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-14">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <RevealScale>
          <div className="overflow-hidden rounded-[30px] bg-white p-6 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-[-0.05em] text-purple/60">
                  Connect
                </p>
                <h2 className="font-display text-[34px] leading-[1.08] md:text-[44px] text-purple">
                  Get in Touch
                </h2>
                <p className="mt-3 text-[15px] text-purple/70">We'd love to hear from you!</p>
                <div className="mt-6">
                  <Button variant="primary" href="mailto:hello@pulseora.events">
                    Contact Us
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border-2 border-purple/15 bg-pink/40">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="Event location map"
                    src="https://maps.google.com/maps?q=Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealScale>
      </div>
    </section>
  )
}
