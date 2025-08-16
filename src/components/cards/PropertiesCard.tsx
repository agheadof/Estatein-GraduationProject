import React, { type ReactNode, useCallback, useMemo } from "react";
import MainButton from "../ui/MainButton";
import { useNavigate } from "react-router-dom";
import { Icon1 as BedIcon, Icon2 as BathIcon, Icon3 as VillaIcon } from "../../components/icons/PropertiesIcons";
import { scrollToTop } from "../../utlis/scrollToTop";
import type { PropertyType, PropertyDetailType } from "../../types/Property";

const PropertyDetail = React.memo(({ item }: { item: PropertyDetailType }) => {
  const iconMap: Record<"bed" | "bath" | "villa", ReactNode> = {
    bed: <BedIcon />,
    bath: <BathIcon />,
    villa: <VillaIcon />,
  };

  return (
    <div className="flex-shrink flex justify-center items-center py-1.5 2xl:py-2 px-3.5  bg-purple97 dark:bg-gray10 border dark:border-gray15 border-white90 rounded-full gap-1 max-w-full">
      <span className="text-black dark:text-white w-5 2xl:w-6 h-5 2xl:h-6 flex items-center justify-center">
        {item.icon ? iconMap[item.icon] : null}
      </span>
      <span className="text-black dark:text-white text-sm xl:text-xs 2xl:text-lg whitespace-nowrap">
        {item.label ?? "-"}
      </span>
    </div>
  );
});

type PropertiesCardProps = {
  property: PropertyType;
  showDetails?: boolean;
  showTags?: boolean;
};

function PropertiesCard({ property, showDetails = true, showTags = false }: PropertiesCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = useCallback(() => {
    if (property.id) {
      navigate(`/properties/${property.id}`);
      scrollToTop();
    }
  }, [navigate, property.id]);

  const shortDesc = useMemo(() => {
    if (!property.desc) return "";
    const words = property.desc.split(" ");
    return words.length <= 10 ? property.desc : words.slice(0, 10).join(" ") + "…";
  }, [property.desc]);

  const renderImage = useMemo(() => {
    return property.image ? (
      <img
        loading="lazy"
        className="object-cover w-full h-[210px] lg-custom:h-[255px] 2xl:h-[318px] rounded-[10px]  "
        src={property.image}
        alt={property.title ?? "Property Image"}
      />
    ) : (
      <div className="bg-gray20 dark:bg-gray15 w-full h-[210px] lg-custom:h-[255px] 2xl:h-[318px] rounded-[10px] mb-4 lg-custom:mb-5 2xl:mb-[30px]" />
    );
  }, [property.image, property.title]);

  const renderTags = useMemo(() => {
    if (!showTags || !property.tags) return null;
    return (
      <span className="text-nowrap text-[clamp(12px,1.2vw,18px)] font-medium text-black dark:text-white py-1.5 2xl:py-2 px-3 2xl:px-3.5 bg-white97 dark:bg-gray10 dark:border-gray15 border-white90 rounded-[28px]">
        {property.tags}
      </span>
    );
  }, [showTags, property.tags]);

  return (
    <div className=" flex flex-col justify-between  w-full gap-4 lg-custom:gap-5 2xl:gap-[30px] h-full 2xl:!min-h-[692px] 2xl:!max-h-[692px] lg-custom:!min-h-[549px] lg-custom:!max-h-[549px] lg-custom:p-[30px] 2xl:p-[40px] p-6  border dark:border-gray15 border-white90 rounded-xl">
      {renderImage}
      {renderTags}

      <div className=" flex flex-col 2xl:gap-1.5 lg-custom:gap-1 gap-0.5 ">
        <h2 className="line-clamp-1 text-lg lg-custom:text-xl 2xl:text-2xl font-semibold dark:text-white text-black ">
          {property.title ?? "No Title"}
        </h2>
        <p className="line-clamp-2 inline text-sm lg-custom:text-base 2xl:text-lg text-gray40 dark:text-gray60 font-medium">
          {shortDesc}
          <span className="dark:text-white text-black">Read More</span>
        </p>
      </div>

      {showDetails && property.details?.length ? (
        <div className="flex flex-wrap gap-1.5 2xl:gap-2.5 ">
          {property.details.map((item: PropertyDetailType, index: number) => (
            <PropertyDetail key={index} item={item} />
          ))}
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-sm 2xl:text-lg text-gray40 dark:text-gray60 font-medium">Price</span>
          <h2 className="text-lg lg-custom::text-xs xl:text-xl 2xl:text-2xl dark:text-white text-black font-semibold">
            {property.Price ?? "N/A"}
          </h2>
        </div>

        {property.id && (
          <MainButton
            variant="normalPurple"
            onClick={handleViewDetails}
            className=" whitespace-nowrap !py-3.5 !px-5 lg-custom::!py-2.5 xl:!py-3.5 lg-custom::!px-4 xl:!px-5 2xl:!py-[18px] 2xl:!px-6 md:!text-xs xl:!text-sm 2xl:!text-lg xl:rounded-lg 2xl:!rounded-[10px] "
          >
            View Property Details
          </MainButton>
        )}
      </div>
    </div>
  );
}

export default React.memo(PropertiesCard);
