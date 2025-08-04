import FaqSection from '../sections/home/FaqSection'
import Hero from '../sections/home/Hero'
import OurClientsSection from '../sections/home/OurClientsSection'
import SiteFeaturesSection from '../sections/shared/SiteFeaturesSection'
import PropertiesSection from '../sections/home/PropertiesSection'
function HomePage() {
  return (
    <>
      <Hero />
      <SiteFeaturesSection />
      <div className="huge:container huge:mx-auto">
        <PropertiesSection />
        <OurClientsSection />
        <FaqSection />
      </div>
    </>
  )
}

export default HomePage
