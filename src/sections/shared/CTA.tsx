import { Link } from "react-router-dom";
import Title from "../../components/shared/Title";
import TitleBtn from "../../components/ui/TitleBtn";

type CTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
  className?: string;
};

export function CTA({ title, description, buttonLabel, className}: CTAProps) {
  return (
    <section
      role="region"
      aria-labelledby="cta-heading"
      className={`relative mx-break-out border-t border-t-gray15 px-break-out py-12.5 overflow-hidden flex flex-col gap-12.5 lg-custom:flex-row lg-custom:items-center lg-custom:justify-between px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] huge:px-0  ${className ?? ""}`}>

      <div className="z-10 flex flex-col gap-1.5 md:gap-2.5 xl:gap-5 lg:grow">
        <Title heading={title} paragraph={description} starImg = {false} paragraphStyle="w-full md:w-[85%] 2xl:w-[80%]"/>
      </div>
      <img
         src="/assets/images/StartJourney/AbstractDesign.png"
        alt="Abstarct"
        className="absolute top-0 left-0 pointer-events-none scale-x-[-1]"
      />
      <img
        src="/assets/images/StartJourney/AbstractDesign.png"
        alt="Abstarct"
        className="absolute bottom-0 right-0 pointer-events-none"
      />
    </section>
  );
}
