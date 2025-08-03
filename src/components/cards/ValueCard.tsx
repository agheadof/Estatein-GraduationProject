import type { CommonCardProps } from "../../types/CommonCard";

const ValueCard = ({
  cardImg,
  cardTitle,
  titleStyle,
  titleSize = "text-xl lg-custom:text-2xl",
  cardDesc,
  cardStyle,
}: CommonCardProps) => {
  return (
    <div
      className={`first:rounded-tl-[10px] 2xl:rounded-tl-xl flex flex-col justify-center ${cardStyle}`}
    >
      <div className={`flex gap-2.5 md:gap-4 2xl:gap-5 ${titleStyle}`}>
        <img
          src={cardImg}
          alt="card image"
        />
        <h5 className={`text-white font-semibold ${titleSize}`}>{cardTitle}</h5>
      </div>
      {cardDesc && (
        <p className="text-sm md:text-base 2xl:text-lg font-medium leading-[150%] text-gray60">
          {cardDesc}
        </p>
      )}
    </div>
  );
};

export default ValueCard;
