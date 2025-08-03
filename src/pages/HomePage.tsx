
import Hero from '../sections/home/Hero'
import OurClientsSection from '../sections/home/OurClientsSection'
import SiteFeaturesSection from '../sections/shared/SiteFeaturesSection'
function HomePage() {
  return (
    <>
      <Hero />
      <SiteFeaturesSection />
      <div className="huge:container huge:mx-auto">
        <OurClientsSection />
      </div>
    </>
  )
}

export default HomePage
