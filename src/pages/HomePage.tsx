import FaqSection from '../sections/home/FaqSection'
import Hero from '../sections/home/Hero'
import OurClientsSection from '../sections/home/OurClientsSection'
import SiteFeaturesSection from '../sections/shared/SiteFeaturesSection'
import PropertiesSection from '../sections/home/PropertiesSection'
import { SiteFeaturesHomeData } from '../data/SiteFeaturesData'
function HomePage() {
  return (
    <>
      <Hero />
      <SiteFeaturesSection data={SiteFeaturesHomeData}/>
<<<<<<< HEAD
      <div className="huge:container huge:mx-auto">
        <PropertiesSection
        heading="Featured Properties"
        paragraph={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
        buttonLabel="View All Properties"
        />
=======
      <div className="huge:max-w-[1920px] huge:mx-auto">
        <PropertiesSection />
>>>>>>> 953284cff2ac1d101a0f231b53a888ce6829f0f1
        <OurClientsSection />
        <FaqSection />
      </div>
    </>
  )
}

export default HomePage
