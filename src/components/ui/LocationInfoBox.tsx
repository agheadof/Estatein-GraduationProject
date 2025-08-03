import type { ReactNode } from "react";

type LocationInfoBoxProps = {
  icon: ReactNode;
  text: string;
  className: string;
};

function LocationInfoBox({ icon, text, className }: LocationInfoBoxProps) {
  return (
    <div className={`${className} bg-gray10 border-1 border-gray15 rounded-[28px] 2xl:py-[14px] 2xl:px-5 py-[10px] px-4 flex items-center space-x-1 2xl:space-x-1.5}`}>
      {icon}
      <p className="text-sm/[1.5] 2xl:text-lg font-medium text-white">{text}</p>
    </div>
  );
}

export default LocationInfoBox;

