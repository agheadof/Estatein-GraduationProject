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
      className={`px-4 md:px-8 lg-custom:px-20 2xl:px-[162px] huge:px-0 py-20 lg-custom:py-[120px] 2xl:py-[150px] ${className}`}
    >
      {children}
    </section>
  );
}