import MainButton from "../ui/MainButton";

type Props = {
    property: {
        image: string;
        title: string;
        desc: string;
        details: {
            label: string;
            icon: string;
        }[];
        Price: string;
    };
};
function PropertiesCard({ property }: Props) {
    return (
        <>
            <div className=" min-h-[506px] lg-custom:min-h-[549px] 2xl:min-h-[692px] p-6 lg-custom:p-[30px] 2xl:p-[40px] border border-gray15 rounded-xl ">
                <img className=" object-cover w-full h-[210px] lg-custom:h-[255px] 2xl:h-[318px] rounded-[10px] mb-4 lg-custom:mb-5 2xl:mb-[30px] " src={property.image} alt="img" />
                <div className=" mb-5 lg-custom:mb-6 2xl:mb-[30px] ">
                    <h2 className=" text-lg lg-custom:text-xl 2xl:text-2xl font-semibold text-white mb-0.5 lg-custom:mb-1 2xl:mb-1.5 ">
                        {property.title}
                    </h2>
                    <p className=" text-sm lg-custom:text-base 2xl:text-lg text-gray60 font-medium ">
                        {property.desc} <span className=" text-white">Read More</span>
                    </p>
                </div>
                <div className=" flex flex-wrap gap-1.5 2xl:gap-2.5 mb-5 lg-custom:mb-6 2xl:mb-[30px]">
                    {property.details.map((item, index) => (
                        <div key={index} className="flex items-center py-1.5 2xl:py-2 px-3.5 2xl:px-3.5 bg-gray10 border border-gray15 rounded-[28px] gap-1">
                            <img className=" w-5 2xl:w-6 h-5 2xl:h-6 " src={item.icon} alt={item.label} />
                            <span className=" text-white text-sm 2xl:text-lg font-medium whitespace-nowrap ">{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className=" flex items-center justify-between gap-[30px] lg-custom:gap-[40px] 2xl:gap-[50px] ">
                    <div className=" flex flex-col">
                        <span className=" text-sm 2xl:text-lg text-gray60 font-medium ">Price</span>
                        <h2 className=" text-lg lg-custom:text-xl 2xl:text-2xl text-white font-semibold ">
                            {property.Price}
                        </h2>
                    </div>

                    <MainButton variant="normalPurple" onClick={() => console.log('clicked')}>
                        View Property Details
                    </MainButton>
                </div>
            </div>
        </>
    )
}

export default PropertiesCard