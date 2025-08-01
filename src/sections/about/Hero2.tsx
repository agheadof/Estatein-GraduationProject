import CountUpComponent from "../../components/cards/CountUpComponent"
import Title from "../../components/shared/Title"

const Hero2 = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row  gap-5 md:gap-[50px] 2xl:gap-20 h-screen items-center ">
            <div>
                <Title buttonLabel="hidden" heading="Our Journey" paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients." />
                <CountUpComponent />
            </div>

            <div className="relative border border-gray15 rounded-xl overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/AbstractDesign5.png"
                        alt="Abstract Design"
                        className="w-full h-full object-cover"
                    />
                </div>

                <img
                    src="/assets/images/MainHero/ourJourney.png"
                    alt=""
                    className="relative z-10 w-full h-auto object-contain"
                />
            </div>

        </div>
    )
}

export default Hero2