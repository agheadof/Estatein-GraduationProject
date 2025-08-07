
import AchievementsSection from "../sections/about/AchievementsSection"
import ExperienceSection from "../sections/about/ExperienceSection"
import Hero2 from "../sections/about/Hero2"
import OurValues from "../sections/about/OurValues"
import TeamSection from "../sections/about/TeamSection"
import ValuedClientsSection from "../sections/about/ValuedClientsSection"

function AboutPage() {
  return (
    <div className="">
      <Hero2 />
      <OurValues />
      <AchievementsSection/>
      <ExperienceSection/>
      <TeamSection/>
      <ValuedClientsSection />
    </div>
  )
}

export default AboutPage
