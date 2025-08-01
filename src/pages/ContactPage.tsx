import SubHero from "../components/shared/SubHero/SubHero"
import { subHeroContact } from "../data/subHeroData"

function ContactPage() {
  return (
    <div className='huge:container huge:mx-auto'>
      <SubHero title={subHeroContact.title} desc={subHeroContact.desc} />
    </div>
  )
}

export default ContactPage
