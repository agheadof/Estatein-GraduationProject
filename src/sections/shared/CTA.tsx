import { Link } from "react-router-dom";

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
      className={`relative mx-break-out px-break-out py-12.5 overflow-hidden flex flex-col gap-12.5 lg:flex-row lg:items-center lg:justify-between  ${className ?? ""}`}
    >

      <div className="z-10 flex flex-col gap-1.5 md:gap-2.5 xl:gap-5 lg:grow">
        <h2 id="cta-heading" className="text-white ">
          {title}
        </h2>
        <p className="text-white">{description}</p>
      </div>

      {/* Button */}
      <Link
        to="/properties"
        className="z-10 btn-primary btn-sm 3xl:btn-lg whitespace-nowrap text-center"
      >
        {buttonLabel}
      </Link>

      <img
        src="/assets/Images/StartJourney/AbstractDesign.png"
        alt="Abstarct"
        className="absolute top-0 left-0 pointer-events-none"
      />
      <img
        src="/assets/Images/StartJourney/AbstractDesign2.png"
        alt="Abstarct"
        className="absolute bottom-0 right-0 pointer-events-none"
      />
    </section>
  );
}
