import PageShell from '../components/PageShell'
import Testimonials from '../components/Testimonials'

export default function TestimonialPage() {
  return (
    <PageShell
      eyebrow="Kind words"
      title="Testimonials"
      subtitle="Stories from organizers who ran unforgettable events with Pulseora."
    >
      <Testimonials asPage />
    </PageShell>
  )
}
