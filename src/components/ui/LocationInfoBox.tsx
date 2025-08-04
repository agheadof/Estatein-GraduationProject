import type { ReactNode } from "react";

type LocationInfoBoxProps = {
  icon: ReactNode;
  text: string;
  className: string;
};

function LocationInfoBox({ icon, text, className }: LocationInfoBoxProps) {
  return (
    <div className={`${className} flex justify-between items-center dark:bg-gray10 bg-purple95 border-1 dark:border-gray15 border-purple70 rounded-[28px] 2xl:py-[14px] 2xl:px-5 py-[10px] px-4 space-x-1 2xl:space-x-1.5}`}>
      {icon}
      <p className="text-sm/[1.5] 2xl:text-lg font-medium dark:text-white text-black">{text}</p>
    </div>
  );
}

export default LocationInfoBox;

