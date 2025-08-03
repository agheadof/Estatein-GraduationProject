import CountUp from "react-countup"
import { countUpData } from "../../data/countUpData"

const CountUpComponent = () => {
  return (
    <div className="flex gap-3 md:gap-5 flex-wrap md:flex-nowrap w-full">
      {countUpData.map((item, index) => {
        const parsedNumber = parseFloat(item.counter.replace(/[^\d.]/g, ""))

        return (
          <div
            key={index}
            className="bg-gray10 border border-gray15 flex flex-col p-4 lg-custom:py-3.5 lg-custom:px-[18px] 2xl:py-4 2xl:px-6 rounded-lg lg-custom:rounded-xl flex-1 text-center lg-custom:text-start"
          >
            <h2 className="lg-custom:text-[30px] 2xl:text-[40px] font-bold text-white">
              <CountUp
                end={parsedNumber}
                duration={2}
                enableScrollSpy
                scrollSpyDelay={300}
                separator=","
              />
              {item.counter.replace(/[0-9.,]/g, "")}
            </h2>

            <p className="text-sm lg-custom:text-base 2xl:text-[18px] text-gray60 leading-[150%] w-[135px] lg-custom:w-full mx-auto">
              {item.descrption}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default CountUpComponent
