import SubHero from "../components/shared/SubHero/SubHero"
import { subHeroContact } from "../data/subHeroData"

function ContactPage() {
  return (
    <div className='min-[1920px]:container min-[1920px]:mx-auto'>
      <SubHero title={subHeroContact.title} desc={subHeroContact.desc} />
    </div>
  )
}

export default ContactPage
