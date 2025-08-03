import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { SectionWrapper } from '../../layouts/SectionWrapper'
import TitleBtn from '../../components/ui/TitleBtn'
import Title from '../../components/shared/Title'
import { testimonials } from '../../data/testimonialsData'
import { useRef, useState } from 'react'

function OurClientsSection() {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)

    const [currentSlide, setCurrentSlide] = useState(1)

    return (
        <SectionWrapper>
            <Title
                heading="What Our Clients Say"
                paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                buttonLabel="View All Testimonials"
            />

            <div className="w-full pt-[80px]">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    slidesPerGroup={1}
                    spaceBetween={30}
                    onSlideChange={(swiper) => {
                        const slidesPerView = swiper.params.slidesPerView as number
                        const realIndex = swiper.realIndex
                        setCurrentSlide(realIndex + 1)
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                    className="flex w-full justify-between mb-[30px] lg-custom:mb-[40px] 2xl:mb-[50px]"
                >
                    {testimonials.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl bg-gray08 border border-gray15">
                                <div className="flex gap-2 2xl:gap-2.5 mb-6 lg-custom:mb-[30px] 2xl:mb-10">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-center items-center p-1.5 lg-custom:p-2 2xl:p-2.5 bg-gray10 border border-gray15 rounded-full w-[30px] h-[30px] lg-custom:w-[38px] lg-custom:h-[36px] 2xl:w-11 2xl:h-11"
                                        >
                                            <img
                                                src="/assets/icons/clients/star.svg"
                                                alt="star"
                                                className="w-full"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="lg-custom:mb-[30px] 2xl:mb-10">
                                    <h3 className="text-white font-semibold lg-custom:text-xl 2xl:text-2xl lg-custom:mb-2.5 2xl:mb-3.5">
                                        {client.title}
                                    </h3>
                                    <p className="text-white font-medium lg-custom:text-base 2xl:text-lg">
                                        {client.message}
                                    </p>
                                </div>

                                <div className="flex gap-2.5 2xl:gap-3">
                                    <img
                                        src={client.image}
                                        alt="client image"
                                        className="w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-white font-medium text-lg lg-custom:text-xl 2xl:text-xl">
                                            {client.name}
                                        </h4>
                                        <span className="text-gray60 font-medium text-sm lg-custom:text-base 2xl:text-lg">
                                            {client.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-between pt-4 2xl:pt-5 border-t border-t-gray15  ">
                    <p className="text-white text-base 2xl:text-xl font-medium hidden md:block">
                        {String(currentSlide).padStart(2, '0')}{' '}
                        <span className="text-gray60">of {testimonials.length}</span>
                    </p>
                    <div className=' block md:hidden'>
                        <TitleBtn label='Testimonials' />
                    </div>
                    <div className="flex items-center gap-2.5">
                        <button
                            ref={prevRef}
                            className=" p-2.5 2xl:p-3.5 bg-gray10 border border-gray15 rounded-full w-[44px] 2xl:w-[58px] "
                        >
                            <img src="/assets/icons/arrowLeft.svg" alt="prev" />
                        </button>
                        <p className="text-white text-base 2xl:text-xl font-medium block md:hidden">
                            {String(currentSlide).padStart(2, '0')}{' '}
                            <span className="text-gray60">of {testimonials.length}</span>
                        </p>
                        <button
                            ref={nextRef}
                            className=" p-2.5 2xl:p-3.5 bg-gray10 border border-gray15 rounded-full w-[44px] 2xl:w-[58px] "
                        >
                            <img src="/assets/icons/arrowRight.svg" alt="next" />
                        </button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default OurClientsSection
