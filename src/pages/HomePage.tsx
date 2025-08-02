
import Hero from '../sections/home/Hero'
import OurClientsSection from '../sections/home/OurClientsSection'
function HomePage() {
  return (
    <>
      <Hero />
      <div className="huge:container huge:mx-auto">
        <OurClientsSection />
      </div>
    </>
  )
}

export default HomePage
