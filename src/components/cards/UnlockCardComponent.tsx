import { img } from "framer-motion/client";

type unlockCardComponentProps = {
  cardStyle?: string;
  title: string;
  desc: string;
};

const UnlockCardComponent = ({
  cardStyle,
  title,
  desc,
}: unlockCardComponentProps) => {
  return (
    <div
      className={`py-[59.5px] px-[50px] h-[266px] rounded-xl bg-gray10 border border-gray15 w-[1052px] ${cardStyle}`}
    >
      <div className="flex justify-between items-center mb-[39px]">
        <h2 className="text-[30px] font-bold text-white"> {title} </h2>
        <button className="bg-gray08 text-lg font-medium text-white rounded-xl border border-gray15 py-[18px] px-6">
          Learn More
        </button>
      </div>

      <p className="text-gray60 text-sm lg-custom:text-base 2xl:text-lg font-medium">
        {desc}
      </p>
    </div>
  );
};

export default UnlockCardComponent;
