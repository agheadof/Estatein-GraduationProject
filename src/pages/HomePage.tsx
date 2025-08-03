import FaqSection from '../sections/home/FaqSection'
import Hero from '../sections/home/Hero'
import OurClientsSection from '../sections/home/OurClientsSection'
import PropertiesSection from '../sections/home/PropertiesSection'
function HomePage() {
  return (
    <>
      <Hero />
      <div className="huge:container huge:mx-auto">
        <PropertiesSection />
        <OurClientsSection />
        <FaqSection />
      </div>
    </>
  )
}

export default HomePage
