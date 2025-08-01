import CountUpComponent from "../../components/cards/CountUpComponent"
import Title from "../../components/shared/Title"
import { SectionWrapper } from "../../layouts/SectionWrapper"

const Hero2 = () => {
    return (
        <SectionWrapper>
            <div className="flex flex-col-reverse md:flex-row  gap-5 md:gap-[50px] 2xl:gap-20  mt-[160px]   ">
                <div className="flex flex-col gap-20 md:w-[48%]">
                    <Title heading="Our Journey" paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients." />
                    <CountUpComponent />
                </div>

                <div className="relative border border-gray15 rounded-xl overflow-hidden md:[453px] 2xl:h-[546px] md:w-[48%] ">
                    <img
                        src="/assets/images/AbstractDesign5.png"
                        alt="Abstract Design"
                        className="w-full h-full object-cover"
                    />
                        <img
                            src="/assets/images/MainHero/ourJourney.png"
                            alt=""
                            className=" z-10 w-full h-auto object-contain absolute bottom-0"
                        />

                </div>
            </div>
        </SectionWrapper>
    )
}

export default Hero2