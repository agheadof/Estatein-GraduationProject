import { featuresData } from "../../data/featuresData"

const KeyFeaturesComponent = () => {
    return (
        <div className="p-5 lg-custom:p-10 2xl:p-[50px] rounded-3 border border-gray15 flex flex-col gap-5 lg-custom:gap-10 2xl:gap-[50px] rounded-xl">
            <h3 className="text-white font-semibold text-lg leading-[150%] lg-custom:text-xl 2xl:text-2xl">Key Features and Amenities</h3>
            <div className="flex flex-col gap-[18px] lg-custom:gap-5 2xl:gap-[30px]">
                {featuresData.map((feature, id) => (
                        <div key={id} className="flex w-full border-l border-purple60  gap-2.5 px-3 py-2.5 lg-custom:px-3.5 lg-custom:py-4  2xl:px-6 2xl:py-[18px] bg-[linear-gradient(to_right,#1A1A1A_0%,#1A1A1A00_100%)]">
                            <img src="/assets/icons/FeaturedProperties/FeaturesIcon.svg" alt="icon" className="w-[18px] h-[18px] lg-custom:w-5 lg-custom:h-5 2xl:w-6 2xl:h-6" />
                            <span className="text-gray60 font-medium  text-sm leading[150%] lg-custom:text-base 2xl:text-lg ">{feature.title}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default KeyFeaturesComponent