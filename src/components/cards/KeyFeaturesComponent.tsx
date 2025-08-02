
const KeyFeaturesComponent = () => {
    return (
        <div className="paddding-5 lg-custom:padding-10 2xl:padding-[50px]  rounded-3 border border-gray15 flex flex-col gap-5 lg-custom:gap-10 2xl:gap-[50px]">
            <h3 className="text-white font-semibold text-lg leading-[150%] lg-custom:text-xl 2xl:text-2xl">Key Features and Amenities</h3>
            <div>
                {/* {Features.map((feature, id) => (
                    <div key={id} className="flex flex-col gap-[18px] lg-custom:gap-5 2xl:gap-[30px]">
                        <div className="flex w-full border-l border-purple/60 gap-2.5 px-3 py-2.5 lg-custom:px-3.5 lg-custom:py-4  2xl:px-6 2xl:py-[18px] bg-[linear-gradient(to_right,#1A1A1A_0%,#1A1A1A00_100%)]">
                            <img src="/assets/icons/FeaturedProperties/FeaturesIcon.svg" alt="icon" className="w-[18px] h-[18px] lg-custom:w-5 lg-custom:h-5 2xl:w-6 2xl:h-6" />
                            <span className="text-gray60 font-medium  text-sm leading[150%] lg-custom:text-base 2xl:text-lg ">{feature.title}</span>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default KeyFeaturesComponent