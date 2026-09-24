import Contact from '../components/Contact'
import Experience from '../components/Experience'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LogoStrip from '../components/LogoStrip'
import PromoBanner from '../components/PromoBanner'
import Speakers from '../components/Speakers'
import Stories from '../components/Stories'
import Testimonials from '../components/Testimonials'
import Timeline from '../components/Timeline'
import UpcomingEvents from '../components/UpcomingEvents'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <UpcomingEvents />
      <Experience />
      <Timeline />
      <PromoBanner />
      <Speakers />
      <Stories />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
