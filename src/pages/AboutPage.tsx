
import Hero2 from "../sections/about/Hero2"
import OurValues from "../sections/about/OurValues"
import TeamSection from "../sections/about/TeamSection"
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection"

function AboutPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <Hero2 />
      <OurValues />
      <ExperienceSection/>
      <TeamSection/>
    </div>
  )
}

export default AboutPage
