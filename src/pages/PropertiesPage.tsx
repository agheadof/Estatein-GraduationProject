import SubHero from '../components/shared/SubHero/SubHero'
import { subHeroProperties } from '../data/subHeroData'

function PropertiesPage() {
  return (
    <div className='huge:container huge:mx-auto'>
      <SubHero title={subHeroProperties.title} desc={subHeroProperties.desc} />
    </div>
  )
}

export default PropertiesPage
