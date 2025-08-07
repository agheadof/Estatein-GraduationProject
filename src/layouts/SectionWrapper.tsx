import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      className={`huge:max-w-[1920px] huge:mx-auto px-4 md:px-8 lg-custom:!px-20 2xl:!px-[162px] huge:!px-0 ${className}`}
    >
      {children}
    </section>
  );
}
