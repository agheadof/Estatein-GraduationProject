import { countUpData } from "../../data/countUpData";

const CountUpComponent = () => {
  return (
<div className="flex gap-5 flex-wrap md:flex-nowrap">
  {countUpData.map((item, index) => (
    <div
      key={index}
      className="flex flex-col py-4 px-6 bg-gray15 rounded-xl border border-gray15 w-[44%] md:w-[239px] [&:nth-child(3)]:w-full md:[&:nth-child(3)]:w-[44%]"
    >
      <h2 className="md:text-[30px] 2xl:text-[40px] font-bold">{item.counter}</h2>
      <p className="md:text-base 2xl:text-[18px] text-gray60">{item.descrption}</p>
    </div>
  ))}
</div>
  );
};

export default CountUpComponent;