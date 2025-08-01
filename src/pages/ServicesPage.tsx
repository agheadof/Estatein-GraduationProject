import SubHero from '../components/shared/SubHero/SubHero'
import { subHeroServices } from '../data/subHeroData'

function ServicesPage() {
  return (
    <div className='huge:container huge:mx-auto'>
      <SubHero title={subHeroServices.title} desc={subHeroServices.desc} />
    </div>
  )
}

export default ServicesPage
