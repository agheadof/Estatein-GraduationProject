import SubHero from '../components/shared/SubHero/SubHero'
import { subHeroProperties } from '../data/subHeroData'

function PropertiesPage() {
  return (
    <div className='min-[1920px]:container min-[1920px]:mx-auto'>
      <SubHero title={subHeroProperties.title} desc={subHeroProperties.desc} />
    </div>
  )
}

export default PropertiesPage
