import type { CommonCardProps } from "../../types/CommonCard";

const CommonCard = ({
  cardImg,
  cardTitle,
  titleStyle,
  titleSize = "text-xl lg-custom:text-2xl",
  cardDesc,
  cardStyle,
  isArrow,
}: CommonCardProps) => {
  return (
    <div
      className={`relative rounded-[10px] 2xl:rounded-xl border flex flex-col justify-center ${cardStyle}`}
    >
      {isArrow && (
        <img
          src="/assets/icons/CardUnderHero/arrowRight.svg"
          className="absolute top-5 right-5 w-[26px] h-[26px]"
          alt="arrow icon"
        />
      )}
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

export default CommonCard;
