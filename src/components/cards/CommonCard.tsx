import { Link } from "react-router-dom";
import type { CommonCardProps } from "../../types/CommonCard";


const CommonCard = ({
  HeadingTag = "h5",
  titleLink_1,
  titleLink_2,
  titleLink_3,
  cardImg,
  cardTitle_1,
  cardTitle_2,
  cardTitle_3,
  titleStyle,
  titleSize = "text-xl lg-custom:text-2xl",
  cardDesc,
  cardStyle,
  isArrow,
}: CommonCardProps) => {
  return (
    <div
      className={`group relative rounded-[10px] 2xl:rounded-xl border flex flex-col  ${cardStyle}`}
    >
      {isArrow && (
        <img
          src="/assets/icons/CardUnderHero/arrowRight.svg"
          className="absolute top-5 right-5 w-[26px] h-[26px]"
          alt="arrow icon"
        />
      )}
      <div
        className={`flex items-center gap-2.5 md:gap-4 2xl:gap-5 ${titleStyle}`}
      >
        <div className="relative border-gradient-base border-gradient-2">
          <div className="relative m-1.5 border-gradient-base border-gradient-1">
            <img src={cardImg} alt="card image" className="p-2" />
          </div>
        </div>

        {HeadingTag === Link ? (
          <div className="flex flex-wrap justify-center gap-2.5 lg-custom:gap-5 2xl:gap-[30px]">
            {[
              { title: cardTitle_1, link: titleLink_1 },
              { title: cardTitle_2, link: titleLink_2 },
              { title: cardTitle_3, link: titleLink_3 },
            ]
              .filter((e) => e.title)
              .map((e, index) => (
                <Link
                  key={index}
                  to={e.link!}
                  className={`text-black dark:text-white font-semibold border-b border-transparent group-hover:border-purple75 transform-border duration-300 ${titleSize}`}
                >
                  {e.title}
                </Link>
              ))}
          </div>
        ) : HeadingTag === "a" ? (
          <a
            href={titleLink_1}
            className={` text-black dark:text-white font-semibold border-b border-transparent group-hover:border-purple75 transform-border duration-300 ${titleSize}`}
          >
            {cardTitle_1}
          </a>
        ) : (
          <HeadingTag
            className={`text-black dark:text-white font-semibold ${titleSize}`}
          >
            {cardTitle_1}
          </HeadingTag>
        )}
      </div>

      {cardDesc && (
        <p className="text-sm md:text-base 2xl:text-lg font-medium leading-[150%] text-gray40 dark:text-gray60">
          {cardDesc}
        </p>
      )}
    </div>
  );
};

export default CommonCard;
