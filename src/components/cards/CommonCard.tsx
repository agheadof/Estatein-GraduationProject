import { Link } from "react-router-dom";
import type { CommonCardProps } from "../../types/CommonCard";

const CommonCard = ({
  HeadingTag = "h5",
  titleLink,
  cardImg,
  cardTitle,
  titleStyle,
  titleSize = "text-xl lg-custom:text-2xl",
  cardDesc,
  cardStyle,
  isArrow,
  links,
}: CommonCardProps) => {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`group relative rounded-[10px] 2xl:rounded-xl border flex flex-col ${cardStyle}`}
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

        {links && links.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2.5 lg-custom:gap-5 2xl:gap-[30px]">
            {links
              .filter((e) => e.title)
              .map((e, index) => (
                <Link
                  key={index}
                  to={e.link}
                  className={`text-black dark:text-white font-semibold border-b border-transparent group-hover:border-purple75 transform-border duration-300 ${titleSize}`}
                >
                  {e.title}
                </Link>
              ))}
          </div>
        ) : HeadingTag === Link ? (
          <Link
            to={titleLink || "#"}
            className={`text-black dark:text-white font-semibold border-b border-transparent group-hover:border-purple75 transform-border duration-300 ${titleSize}`}
          >
            {cardTitle}
          </Link>
        ) : HeadingTag === "a" ? (
          <a
            href={titleLink}
            onClick={(e) =>
              handleAnchorClick(e, titleLink?.split("#")[1] || "")
            }
            className={`text-black dark:text-white font-semibold border-b border-transparent group-hover:border-purple75 transform-border duration-300 ${titleSize}`}
          >
            {cardTitle}
          </a>
        ) : (
          <HeadingTag
            className={`text-black dark:text-white font-semibold ${titleSize}`}
          >
            {cardTitle}
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
