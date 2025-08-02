import Hero2 from "../sections/about/Hero2"
import OurValues from "../sections/about/OurValues"
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection"

function AboutPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <Hero2 />
      <OurValues />
      <ExperienceSection/>
    </div>
  )
}

export default AboutPage
