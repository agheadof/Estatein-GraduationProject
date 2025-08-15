import { useNavigate } from "react-router-dom";
import Title from "../../components/shared/Title";
import MainButton from "../../components/ui/MainButton";
import { scrollToTop } from "../../utlis/scrollToTop";


type CTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
  className?: string;
};

export function CTA({ title, description, buttonLabel, className }: CTAProps) {
  const navigate = useNavigate();
  return (
    <section
      role="region"
      aria-labelledby="cta-heading"
      className={`relative mx-break-out border-t bg-gradient-to-br from-[#FBFAFF] via-[#DBCEFD] to-[#703BF7] dark:bg-none border-t-gray75 dark:border-t-gray15 px-break-out py-12.5 overflow-hidden flex flex-col gap-12.5 lg-custom:flex-row lg-custom:items-center lg-custom:justify-between px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] huge:!max-w-[1920px] huge:!mx-auto ${className ?? ""}`}>
      <div className="z-10 flex flex-col gap-1.5 md:gap-2.5 xl:gap-5 lg:grow lg-custom:w-[80%]">
        <Title heading={title} paragraph={description} starImg={false} paragraphStyle="w-full md:w-[85%] 2xl:w-[80%]"   />
      </div>
      <MainButton variant="normalPurple" className=" z-10" onClick={() => {
        navigate('/properties');
        scrollToTop();
      }} >
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
