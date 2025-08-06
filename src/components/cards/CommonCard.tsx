import { Link } from "react-router-dom";
import type { CommonCardProps } from "../../types/CommonCard";
import { motion } from "framer-motion";
import { commonCardMotionConfig } from "../../utlis/Anamation";

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
}: CommonCardProps) => {
  return (
    <motion.div
      {...commonCardMotionConfig}
      className={`relative rounded-[10px] 2xl:rounded-xl border flex flex-col justify-center ${cardStyle}`}
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
          <Link
            to={titleLink!}
            className={`text-black dark:text-white font-semibold border-b border-transparent hover:border-purple75 transform-border duration-300 ${titleSize}`}
          >
            {cardTitle}
          </Link>
        ) : HeadingTag === "a" ? (
          <a
            href={titleLink}
            className={` text-black dark:text-white font-semibold border-b border-transparent hover:border-purple75 transform-border duration-300 ${titleSize}`}
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
    </motion.div>
  );
};

export default CommonCard;
