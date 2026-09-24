import PageShell from '../components/PageShell'
import FAQ from '../components/FAQ'

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="Help center"
      title="FAQs"
      subtitle="Find answers to your questions about our night music events, ticketing, and venue details."
    >
      <FAQ asPage />
    </PageShell>
  )
}
