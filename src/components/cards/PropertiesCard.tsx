import MainButton from "../ui/MainButton";
import { useNavigate } from 'react-router-dom';
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
        id: string
        showDetails?: boolean;
        tags?:string[]
    };
    showDetails?: boolean;

};
function PropertiesCard({ property, showDetails = true }: Props) {
    const navigate = useNavigate();
    return (
        <>
            <div className="  p-6 lg-custom:p-[30px] 2xl:p-[40px] border dark:border-gray15 border-white90 rounded-xl ">
                <img className=" object-cover w-full h-[210px] lg-custom:h-[255px] 2xl:h-[318px] rounded-[10px] mb-4 lg-custom:mb-5 2xl:mb-[30px] " src={property.image} alt="img" />
                <div className=" mb-5 lg-custom:mb-6 2xl:mb-[30px] ">
                    <h2 className=" line-clamp-1 text-lg lg-custom:text-xl 2xl:text-2xl font-semibold dark:text-white text-black mb-0.5 lg-custom:mb-1 2xl:mb-1.5 ">
                        {property.title}
                    </h2>
                    <p className=" line-clamp-2 text-sm lg-custom:text-base 2xl:text-lg text-gray40 dark:text-gray60 font-medium ">
                        {property.desc} <span className=" dark:text-white text-black">Read More</span>
                    </p>
                </div>
                <div className=" flex flex-wrap gap-1.5 2xl:gap-2.5 mb-5 lg-custom:mb-6 2xl:mb-[30px]">
                    {showDetails && property.details?.map((item, index) => (
                        <div key={index} className="flex items-center py-1.5 2xl:py-2 px-3.5 2xl:px-3.5 dark:bg-gray10 bg-purple97 border dark:border-gray15 border-white90 rounded-[28px] gap-1">
                            <img className=" w-5 2xl:w-6 h-5 2xl:h-6 " src={item.icon} alt={item.label} />
                            <span className=" dark:text-white text-black text-sm 2xl:text-lg font-medium whitespace-nowrap ">{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className=" flex flex-wrap items-center justify-between gap-[30px] lg-custom:gap-[40px] 2xl:gap-[50px] ">
                    <div className=" flex flex-col">
                        <span className=" text-sm 2xl:text-lg text-gray40 dark:text-gray60 font-medium ">Price</span>
                        <h2 className=" text-lg lg-custom:text-xl 2xl:text-2xl dark:text-white text-black font-semibold ">
                            {property.Price}
                        </h2>
                    </div>

                    <MainButton variant="normalPurple" onClick={() => navigate(`/properties/${property.id}`)}>
                        View Property Details
                    </MainButton>
                </div>
            </div>
        </>
    )
}

export default PropertiesCard