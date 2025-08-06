import TitleBtn from "../../ui/TitleBtn";

type TitleProps = {
  starImg?: boolean;
  titleStyle?: string;
  heading: string;
  paragraph: string;
  paragraphStyle?: string;
  buttonLabel?: string;
};

const Title = ({
  starImg = true,
  titleStyle,
  heading,
  paragraph,
  paragraphStyle,
  buttonLabel,
}: TitleProps) => {
  return (
    <div className={`${titleStyle}`}>
      {starImg && (
        <div className="lg-custom:mb-1.5 2xl:mb-2.5">
          <img
            src="/assets/icons/MainTitle/stars.svg"
            alt="icon"
            className="w-[68px] h-[30px] -ml-2 md:-ml-2.5 2xl:-ml-5"
          />
        </div>
      )}
      <div className="flex justify-between items-center 2xl:items-end">
        <div>
          <h2 className="text-black dark:text-white font-semibold text-[28px] lg-custom:text-[38px] 2xl:text-5xl mb-1.5 lg-custom:mb-2.5 2xl:mb-3.5">
            {heading}
          </h2>
          <p
            className={`text-gray40 dark:text-gray60 text-sm lg-custom:text-base 2xl:text-lg font-medium ${paragraphStyle}`}
          >
            {paragraph}
          </p>
        </div>
        {buttonLabel && (
          <div className="hidden lg-custom:block">
            <TitleBtn label={buttonLabel} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Title;
