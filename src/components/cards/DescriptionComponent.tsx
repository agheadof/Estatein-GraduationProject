import { descriptionFeatures, descriptionText } from "../../data/descriptionData"

const DescriptionComponent = () => {
    return (
        <div className="p-5 lg-custom:p-10 2xl:p-[50px] rounded-2.5 border border-gray15 flex flex-col gap-5 lg:custom:gap-10 2xl:gap-[50px] w-1/2 h-fit rounded-[10px]">
            <div className="flex flex-col gap-1.5 lg-custom:gap-2.5 2xl:gap-3.5">
                <h3 className="text-white font-semibold text-lg leading-[150%] lg-custom:text-xl 2xl:text-2xl">Description</h3>
                <p className="text-gray60 font-medium  text-sm leading[150%] lg-custom:text-base 2xl:text-lg">{descriptionText}</p>
            </div>
            <div className="flex gap-20 border-t border-t-gray15 pt-4">
                {descriptionFeatures.map((data, index) => (
                    <div key={index} className="flex flex-col" >
                        <div className="flex  gap-1 lg-custom:gap-1.5">
                            <img src={data.icon} alt="icon" className="w-5 h-5 2xl:w-6 2xl:h-6" />
                            <span className="text-gray60 font-medium leading[150%] text-sm  2xl:text-lg">{data.title}</span>
                        </div>
                        <div>
                            <span className="text-white font-semibold leading[150%] text-lg lg-custom:text-xl  2xl:text-lg">{data.number}</span>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default DescriptionComponent