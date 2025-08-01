import type { CommonCardProps } from "../../types/CommonCard";

const CommonCard = ({
  cardImg,
  cardTitle,
  titleStyle,
  titleSize = "text-2xl",
  cardDesc,
  cardStyle,
  isArrow,
}: CommonCardProps) => {
  return (
    <div
      className={`relative rounded-xl border flex flex-col justify-center ${cardStyle}`}
    >
      {isArrow && (
        <img
          src="/assets/icons/CardUnderHero/arrowRight.svg"
          className="absolute top-5 right-5"
          alt="arrow icon"
        />
      )}
      <div className={`flex gap-5 ${titleStyle}`}>
        <img
          src={cardImg}
          className="[border-image:linear-gradient(to_left,#FFFFFF,#A8A8A8,#FFFFFF)_1]"
          alt="card image"
        />
        <h5 className={`text-white font-semibold ${titleSize}`}>{cardTitle}</h5>
      </div>
      {cardDesc && (
        <p className="text-lg font-medium leading-[150%] text-gray60">
          {cardDesc}
        </p>
      )}
    </div>
  );
};

export default CommonCard;
