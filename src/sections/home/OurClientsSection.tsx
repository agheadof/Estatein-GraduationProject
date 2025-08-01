import React, { useRef } from 'react'
import Title from '../../components/shared/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
    {
        name: 'Wade Warren',
        title: "Exceptional Service!",
        location: 'USA, California',
        image: '/assets/images/Clients/wade.webp',
        message:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",

    },
    {
        name: 'Wade Warren',
        title: "Exceptional Service!",
        location: 'USA, California',
        image: '/assets/images/Clients/wade.webp',
        message:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",

    },
    {
        name: 'Wade Warren',
        title: "Exceptional Service!",
        location: 'USA, California',
        image: '/assets/images/Clients/wade.webp',
        message:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
        name: 'Wade Warren',
        title: "Exceptional Service!",
        location: 'USA, California',
        image: '/assets/images/Clients/wade.webp',
        message:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
        name: 'Wade Warren',
        title: "Exceptional Service!",
        location: 'USA, California',
        image: '/assets/images/Clients/wade.webp',
        message:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
];
function OurClientsSection() {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)
    return (
        <>
            <Title
                heading="What Our Clients Say"
                paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                buttonLabel="Testimonials"
            />
            <div>
                <div className=' w-full '>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        slidesPerGroup={1}
                        spaceBetween={30}
                        // slidesPerView={3}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        className='flex w-full justify-between mb-[30px] lg-custom:mb-[40px] 2xl:mb-[50px] '
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index} className=' w-[32.08%]  '>
                                <div className=' p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl bg-gray08 border border-gray15 '>
                                    <div className=' flex gap-2 2xl:gap-2.5 mb-6 lg-custom:mb-[30px] 2xl:mb-10'>
                                        {[...Array(5)].map((_, index) => (
                                            <div
                                                key={index}
                                                className=" p-1.5 lg-custom:p-2 2xl:p-2.5 bg-gray10 border border-gray15 rounded-full w-[30px] h-[30px] lg-custom:w-[38px] lg-custom:h-[36px] 2xl:w-11 2xl:h-11"
                                            >
                                                <img
                                                    src="/assets/icons/clients/star.svg"
                                                    alt="star"
                                                    className="w-full"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='lg-custom:mb-[30px] 2xl:mb-10'>
                                        <h3 className=' lg-custom:text-xl 2xl:text-2xl text-white font-semibold lg-custom:mb-2.5 2xl:mb-3.5'>{client.title}</h3>
                                        <p className=' lg-custom:text-base 2xl:text-lg text-white font-medium'>{client.message}</p>
                                    </div>
                                    <div className=' flex gap-2.5 2xl:gap-3'>
                                        <img src={client.image} alt="image" className=' w-[50px] 2xl:w-[60px] h-[50px] 2xl:h-[60px] rounded-full object-cover ' />
                                        <div>
                                            <h4 className=' text-white text-lg lg-custom:text-xl 2xl:text-xl font-medium '>{client.name}</h4>
                                            <span className=' text-gray60 text-sm lg-custom:text-base 2xl:text-lg font-medium'>{client.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <div className=' p-[50px] rounded-xl bg-gray08 border border-gray15 w-[32.08%] '>
                        <div className=' flex gap-2.5 mb-10'>
                            {[...Array(5)].map((_, index) => (
                                <div
                                    key={index}
                                    className="p-2.5 bg-gray10 border border-gray15 rounded-full w-11 h-11"
                                >
                                    <img
                                        src="/assets/icons/clients/star.svg"
                                        alt="star"
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className=' mb-10'>
                            <h3 className=' text-2xl text-white font-semibold mb-3.5'>Exceptional Service!</h3>
                            <p className=' text-lg text-white font-medium'>Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                        </div>
                        <div className=' flex gap-3'>
                            <img src="/assets/images/Clients/wade.webp" alt="image" className=' w-[60px] h-[60px] rounded-full object-cover ' />
                            <div>
                                <h4 className=' text-white text-xl font-medium '>Wade Warren</h4>
                                <span className=' text-gray60 text-lg font-medium'>USA, California</span>
                            </div>
                        </div>
                    </div>
                    <div className=' p-[50px] rounded-xl bg-gray08 border border-gray15 w-[32.08%] '>
                        <div className=' flex gap-2.5 mb-10'>
                            {[...Array(5)].map((_, index) => (
                                <div
                                    key={index}
                                    className="p-2.5 bg-gray10 border border-gray15 rounded-full w-11 h-11"
                                >
                                    <img
                                        src="/assets/icons/clients/star.svg"
                                        alt="star"
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className=' mb-10'>
                            <h3 className=' text-2xl text-white font-semibold mb-3.5'>Exceptional Service!</h3>
                            <p className=' text-lg text-white font-medium'>Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                        </div>
                        <div className=' flex gap-3'>
                            <img src="/assets/images/Clients/wade.webp" alt="image" className=' w-[60px] h-[60px] rounded-full object-cover ' />
                            <div>
                                <h4 className=' text-white text-xl font-medium '>Wade Warren</h4>
                                <span className=' text-gray60 text-lg font-medium'>USA, California</span>
                            </div>
                        </div>
                    </div>
                    <div className=' p-[50px] rounded-xl bg-gray08 border border-gray15 w-[32.08%] '>
                        <div className=' flex gap-2.5 mb-10'>
                            {[...Array(5)].map((_, index) => (
                                <div
                                    key={index}
                                    className="p-2.5 bg-gray10 border border-gray15 rounded-full w-11 h-11"
                                >
                                    <img
                                        src="/assets/icons/clients/star.svg"
                                        alt="star"
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className=' mb-10'>
                            <h3 className=' text-2xl text-white font-semibold mb-3.5'>Exceptional Service!</h3>
                            <p className=' text-lg text-white font-medium'>Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                        </div>
                        <div className=' flex gap-3'>
                            <img src="/assets/images/Clients/wade.webp" alt="image" className=' w-[60px] h-[60px] rounded-full object-cover ' />
                            <div>
                                <h4 className=' text-white text-xl font-medium '>Wade Warren</h4>
                                <span className=' text-gray60 text-lg font-medium'>USA, California</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className=' flex justify-between '>
                    <p className=' text-xl text-white font-medium'>01 <span className=' text-gray60'>of 10</span></p>
                    <div className=' flex gap-2.5'>
                        <button ref={prevRef} className=' p-3.5 bg-gray10 border border-gray15 rounded-full'>
                            <img src="/assets/icons/arrowLeft.svg" alt="icon" />
                        </button>
                        <button ref={nextRef} className=' p-3.5 bg-gray10 border border-gray15 rounded-full'>
                            <img src="/assets/icons/arrowRight.svg" alt="icon" />
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default OurClientsSection
