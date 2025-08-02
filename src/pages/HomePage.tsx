
import FaqSection from '../sections/home/FaqSection'
import Hero from '../sections/home/Hero'
import OurClientsSection from '../sections/home/OurClientsSection'
function HomePage() {
  return (
    <>
      <Hero />
      <div className="huge:container huge:mx-auto">
        <OurClientsSection />
        <FaqSection />
      </div>
    </>
  )
}

export default HomePage
