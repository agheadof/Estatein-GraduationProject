import Title from "../../components/shared/Title";
import MainButton from "../../components/ui/MainButton";


type CTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
  className?: string;
};

export function CTA({ title, description, buttonLabel, className }: CTAProps) {
  return (
    <section
      role="region"
      aria-labelledby="cta-heading"
<<<<<<< HEAD
      className={`relative mx-break-out border-t border-t-white90 dark:border-t-gray15 px-break-out py-12.5 overflow-hidden flex flex-col gap-12.5 lg-custom:flex-row lg-custom:items-center lg-custom:justify-between px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] huge:px-0  ${className ?? ""}`}>
=======
      className={`relative mx-break-out border-t bg-gradient-to-br from-[#FBFAFF] via-[#DBCEFD] to-[#703BF7] dark:bg-none border-t-gray75 dark:border-t-gray15 px-break-out py-12.5 overflow-hidden flex flex-col gap-12.5 lg-custom:flex-row lg-custom:items-center lg-custom:justify-between px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] huge:!max-w-[1920px] huge:!mx-auto ${className ?? ""}`}>
>>>>>>> 953284cff2ac1d101a0f231b53a888ce6829f0f1

      <div className="z-10 flex flex-col gap-1.5 md:gap-2.5 xl:gap-5 lg:grow lg-custom:w-[80%]">
        <Title heading={title} paragraph={description} starImg={false} paragraphStyle="w-full md:w-[85%] 2xl:w-[80%]" />
      </div>
      <MainButton variant="normalPurple" className=" z-10" >
        {buttonLabel}
      </MainButton>
      <img
        src="/assets/images/StartJourney/AbstractDesign.png"
        alt="Abstract"
        className="absolute top-0 left-0 pointer-events-none scale-x-[-1] opacity-5 dark:opacity-100"
      />

      <img
        src="/assets/images/StartJourney/AbstractDesign.png"
        alt="Abstract"
        className="absolute bottom-0 right-0 pointer-events-none opacity-5 dark:opacity-100"
      />
    </section>
  );
}
