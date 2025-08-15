export type ExperienceSectionCardProps = {
  step: string;
  title: string;
  description: string;
};

const ExperienceSectionCard = ({
  step,
  title,
  description,
}: ExperienceSectionCardProps) => {
  return (
    <div className="flex flex-col gap-0 items-start font-urbanist">
      <p className="text-black dark:text-white font-medium leading-[150%] text-base lg-custom:text-xl border-l border-l-[#703BF7] px-5 py-4">
        Step {step}
      </p>
      <div
        className="
          card_container_border 
          bg-[linear-gradient(117deg,rgba(112,59,247,1)_0%,rgba(228,228,231,1)_24%)]
          dark:bg-[linear-gradient(117deg,rgba(112,59,247,1)_0%,rgba(38,38,38,1)_24%)]
          relative rounded-xl !rounded-tl-none w-full flex items-center justify-center p-[1px]
            "
      >
        <div
          className="card flex flex-col items-start gap-[14px] lg-custom:gap-5 p-[30px] lg-custom:p-10  huge:p-[50px] rounded-xl !rounded-tl-none 
                        !bg-[linear-gradient(120deg,#DBCEFD_0%,rgba(228,228,231,0.8)_12%)]
                        dark:!bg-[linear-gradient(120deg,#271c44_0%,#141414_10%)]
                        "
        >
          <h2 className="text-black dark:text-white font-semibold text-lg md:text-xl huge:text-[26px] leading-[150%]">
            {title}
          </h2>
          <p className="font-medium text-sm md:text-base huge:text-lg leading-[150%] text-gray40 dark:text-gray60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceSectionCard;
