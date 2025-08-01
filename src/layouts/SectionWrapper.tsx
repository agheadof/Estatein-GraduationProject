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
      className={`px-4 md:px-8 lg-custom:px-20 2xl:px-[162px] huge:px-0 pb-[150px] ${className}`}
    >
      {children}
    </section>
  );
}
