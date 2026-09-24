import PageShell from '../components/PageShell'
import Stories from '../components/Stories'

export default function StoriesPage() {
  return (
    <PageShell
      eyebrow="Journal"
      title="Latest Stories"
      subtitle="Behind-the-scenes moments, night culture and notes from the Pulseora floor."
    >
      <Stories asPage />
    </PageShell>
  )
}
