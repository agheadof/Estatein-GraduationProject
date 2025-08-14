import type { ReactNode } from "react";
import MainButton from "../ui/MainButton";
import { useNavigate } from "react-router-dom";
import {
  Icon1 as BedIcon,
  Icon2 as BathIcon,
  Icon3 as VillaIcon,
} from "../../components/icons/PropertiesIcons";
import { scrollToTop } from "../../utlis/scrollToTop";

type Props = {
  property: {
    image?: string;
    title?: string;
    desc?: string;
    details?: {
      label?: string;
      icon?: "bed" | "bath" | "villa"; 
    }[];
    Price?: string;
    id?: string;
    showDetails?: boolean;
    tags?: string;
  };
  showDetails?: boolean;
  showTags?: boolean;
};

function PropertiesCard({
  property,
  showDetails = true,
  showTags = false,
}: Props) {
  const navigate = useNavigate();

  const iconMap: Record<"bed" | "bath" | "villa", ReactNode> = {
    bed: <BedIcon />,
    bath: <BathIcon />,
    villa: <VillaIcon />,
  };

  // دالة آمنة لقص الكلمات
  function truncateWords(text?: string, wordLimit: number = 10): string {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "…";
  }

  return (
    <div className="h-full p-6 lg-custom:p-[30px] 2xl:p-[40px] border dark:border-gray15 border-white90 rounded-xl">
      {property.image ? (
        <img
          className="object-cover w-full h-[210px] lg-custom:h-[255px] 2xl:h-[318px] rounded-[10px] mb-4 lg-custom:mb-5 2xl:mb-[30px]"
          src={property.image}
          alt={property.title ?? "Property Image"}
        />
      ) : (
        <div className="bg-gray20 dark:bg-gray15 w-full h-[210px] lg-custom:h-[255px] 2xl:h-[318px] rounded-[10px] mb-4 lg-custom:mb-5 2xl:mb-[30px]" />
      )}

      {showTags && property.tags && (
        <span className="text-nowrap text-[clamp(12px,1.2vw,18px)] font-medium text-black dark:text-white py-1.5 2xl:py-2 px-3 2xl:px-3.5 bg-white97 dark:bg-gray10 dark:border-gray15 border-white90 rounded-[28px]">
          {property.tags}
        </span>
      )}

      <div className="mb-5 lg-custom:mb-6 mt-5 2xl:mb-[30px]">
        <h2 className="line-clamp-1 text-lg lg-custom:text-xl 2xl:text-2xl font-semibold dark:text-white text-black mb-0.5 lg-custom:mb-1 2xl:mb-1.5">
          {property.title ?? "No Title"}
        </h2>
        <p className="line-clamp-2 inline text-sm lg-custom:text-base 2xl:text-lg text-gray40 dark:text-gray60 font-medium">
          {truncateWords(property.desc, 10)}
        </p>
        <span className="dark:text-white text-black">Read More</span>
      </div>

      <div className="flex gap-1 mb-4 lg-custom:mb-5 2xl:mb-[30px]">
        {showDetails &&
          property.details?.map((item, index) => (
            <div
              key={index}
              className="flex-shrink flex justify-center items-center py-[4px] px-[10px] bg-purple97 dark:bg-gray10 border dark:border-gray15 border-white90 rounded-full gap-[4px] max-w-full"
            >
              <span className="text-black dark:text-white w-3 2xl:w-4 h-3 2xl:h-4 flex items-center justify-center">
                {item.icon ? iconMap[item.icon] : null}
              </span>
              <span className="text-black dark:text-white md:text-[10px] lg-custom:text-[9px] xl:text-sm whitespace-nowrap">
                {item.label ?? "-"}
              </span>
            </div>
          ))}
      </div>

      <div className="flex items-center justify-between gap-2.5">
        <div className="flex flex-col">
          <span className="text-sm 2xl:text-lg text-gray40 dark:text-gray60 font-medium">
            Price
          </span>
          <h2 className="text-lg lg-custom:text-xl 2xl:text-2xl dark:text-white text-black font-semibold">
            {property.Price ?? "N/A"}
          </h2>
        </div>

        {property.id && (
          <MainButton
            variant="normalPurple"
            onClick={() => (
              navigate(`/properties/${property.id}`), scrollToTop()
            )}
            className=" whitespace-nowrap lg-custom:!text-[10px] xl:!text-xs 2xl:!text-[13px] 2xl:!py-[18px] 2xl:!px-6 "
          >
            View Property Details
          </MainButton>
        )}
      </div>
    </div>
  );
}

export default PropertiesCard;
