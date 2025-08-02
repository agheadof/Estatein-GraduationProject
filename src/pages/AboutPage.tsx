import Hero2 from "../sections/about/Hero2"
import TeamSection from "../sections/about/TeamSection"
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection"

function AboutPage() {
  return (
    <div className="huge:container huge:mx-auto">
      <Hero2 />
      <TeamSection />
      <ExperienceSection/>
    </div>
  )
}

export default AboutPage
