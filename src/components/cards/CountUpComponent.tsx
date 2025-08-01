import { countUpData } from "../../data/countUpData";

const CountUpComponent = () => {
  return (
<div className="flex gap-3 md:gap-5 flex-wrap md:flex-nowrap w-full">
  {countUpData.map((item, index) => (
    <div
      key={index}
      className="flex flex-col  p-4 md:py-4 md:px-6 bg-gray15 rounded-lg md:rounded-xl border border-gray15  flex-1 text-center">
    
      <h2 className="md:text-[30px] 2xl:text-[40px] font-bold  text-white">{item.counter}</h2>
      <p className="text-sm md:text-base 2xl:text-[18px] text-gray60 leading-[150%] w-[135px] md:w-full mx-auto">{item.descrption}</p>
    </div>
  ))}
</div>
  );
};

export default CountUpComponent;