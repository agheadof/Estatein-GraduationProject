import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useEffect } from 'react'
import { fetchProperties } from '../../redux/slices/propertiesSlice'
import { selectPropertiesCardsData } from '../../redux/types/Property'
import GenericSlider from '../../components/shared/GenericSlider/GenericSlider'
import PropertiesCard from '../../components/cards/PropertiesCard'
import { SectionWrapper } from '../../layouts/SectionWrapper'
import Title from '../../components/shared/Title'
type Props = {
    showDetails?: boolean;
};
function PropertiesSection({ showDetails = true }: Props) {
    const dispatch = useAppDispatch()
    const properties = useAppSelector(selectPropertiesCardsData)
    const { loading, error } = useAppSelector((state) => state.testimonials);


    useEffect(() => {
        dispatch(fetchProperties())
    }, [dispatch])

    return (
        <SectionWrapper>
            <div className="mt-[61px] lg-custom:mt-[90px] 2xl:mt-[110px]">
                <Title
                    heading="Featured Properties"
                    paragraph="Explore our handpicked selection of featured properties."
                    buttonLabel="View All Properties"
                />
                {loading ? (
                    <p className="text-black dark:text-white">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <GenericSlider
                        items={properties}
                        renderSlide={(property) => (
                            <PropertiesCard key={property.id} property={property} showDetails={showDetails} />
                        )}
                        slidesPerView={3}
                        showCounter={true}
                        titleBtnLabel="View All Properties"
                    />)}
            </div>
        </SectionWrapper>
    )
}

export default PropertiesSection
