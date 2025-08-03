import { SectionWrapper } from '../../layouts/SectionWrapper'
import Title from '../../components/shared/Title/Title'
import GenericSlider from '../../components/shared/GenericSlider/GenericSlider'
import PropertiesCard from '../../components/cards/PropertiesCard'
import { Properties } from '../../data/PropertiesCardData'

function PropertiesSection() {
    return (
        <>
            <SectionWrapper>
                <div className=' mt-[61px] lg-custom:mt[90px] 2xl:mt-[110px]'>
                    <Title
                        heading="Featured Properties"
                        paragraph= {`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
                        buttonLabel="View All Properties"
                    />
                    <GenericSlider
                        items={Properties}
                        renderSlide={(property, index) => property ? <PropertiesCard key={index} property={property} /> : null}
                        slidesPerView={3}
                        showCounter={true}
                        titleBtnLabel="View All Properties"
                    />
                </div>

            </SectionWrapper>
        </>
    )
}

export default PropertiesSection