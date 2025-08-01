import type { CommonCardProps } from "../../../types/CommonCard";

const CommonCard = ({
  cardImg,
  cardTitle,
  cardDesc,
  cardStyle,
  isArrow,
}: CommonCardProps) => {
  return (
    <div
      className={`relative p-[50px] rounded-xl border flex flex-col ${cardStyle}`}
    >
      {isArrow && (
        <img
          src="/assets/icons/arrowUpRight.svg"
          className="absolute top-5 right-5"
          alt="arrow icon"
        />
      )}
      <div className="flex gap-5">
        <img
          src={cardImg}
          className="[border-image:linear-gradient(to_left,#FFFFFF,#A8A8A8,#FFFFFF)_1]"
          alt="card image"
        />
        <h5 className="text-2xl text-white font-semibold">{cardTitle}</h5>
      </div>
      <p className="text-lg font-medium leading-[150%] text-gray60">
        {cardDesc}
      </p>
    </div>
  );
};

export default CommonCard;
