import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import TitleBtn from '../../ui/TitleBtn'

type Props<T> = {
    items: T[]
    renderSlide: (item: T, index: number) => React.ReactNode
    slidesPerView?: number
    showCounter?: boolean
    titleBtnLabel?: string
}

const GenericSlider = <T,>({
    items,
    renderSlide,
    slidesPerView = 3,
    showCounter = true,
    titleBtnLabel = '',
}: Props<T>) => {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)
    const [currentGroup, setCurrentGroup] = useState(1)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const [currentSlidesPerGroup, setCurrentSlidesPerGroup] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            if (width >= 992) {
                setCurrentSlidesPerGroup(slidesPerView)
            } else if (width >= 768) {
                setCurrentSlidesPerGroup(2)
            } else {
                setCurrentSlidesPerGroup(1)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [slidesPerView])

    const totalGroups = Math.ceil(items.length / currentSlidesPerGroup)

    return (
        <div className="w-full mt-[80px]">
            <Swiper

                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (
                        swiper.params?.navigation !== undefined &&
                        typeof swiper.params.navigation !== 'boolean'
                    ) {
                        swiper.params.navigation.prevEl = prevRef.current
                        swiper.params.navigation.nextEl = nextRef.current
                    }
                }}
                spaceBetween={30}
                loop={false}
                watchOverflow={true}
                onSlideChange={(swiper) => {
                    const lastVisibleIndex = swiper.activeIndex + currentSlidesPerGroup - 1
                    const groupIndex = Math.floor(lastVisibleIndex / currentSlidesPerGroup) + 1
                    setCurrentGroup(groupIndex)

                    setIsBeginning(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    992: {
                        slidesPerView: slidesPerView,
                        slidesPerGroup: slidesPerView,
                    },
                }}
                className=" w-full  mb-[50px]"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} >
                        {renderSlide(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-between items-center pt-4 2xl:pt-5 border-t border-t-white90 dark:border-t-gray15">
                {showCounter && (
                    <p className="text-black dark:text-white text-base 2xl:text-xl font-medium hidden md:block">
                        {String(currentGroup).padStart(2, '0')}
                        <span className= "text-gray40 dark:text-gray60">
                            {' '}
                            of {String(totalGroups).padStart(2, '0')}
                        </span>
                    </p>
                )}

                {titleBtnLabel && (
                    <div className="block md:hidden">
                        <TitleBtn label={titleBtnLabel} />
                    </div>
                )}

                <div className="flex items-center gap-2.5">
                    <button
                        ref={prevRef}
                        disabled={isBeginning}
                        className={`
                            p-2.5 2xl:p-3.5 border rounded-full w-[44px] 2xl:w-[58px]
                            transition-all duration-300 border-white90 dark:border-gray15
                            ${isBeginning
                                ? 'bg-inherit opacity-50 cursor-not-allowed'
                                : 'bg-white97 dark:bg-gray10 border-white90 dark:border-gray15'}
                        `}
                    >
                        {/* Prev Arrow */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 30 30"
                            fill="none"
                            className="text-black dark:text-white hover:text-gray60 transition-colors duration-300"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.5 15C25.5 15.6213 24.9963 16.125 24.375 16.125L8.41812 16.125L14.6547 22.0641C15.1026 22.4947 15.1166 23.2069 14.6859 23.6548C14.2553 24.1026 13.5431 24.1166 13.0953 23.6859L4.84525 15.8109C4.62466 15.5988 4.5 15.306 4.5 15C4.5 14.694 4.62466 14.4012 4.84525 14.1891L13.0953 6.31406C13.5431 5.88342 14.2553 5.89739 14.6859 6.34525C15.1166 6.79312 15.1026 7.5053 14.6547 7.93594L8.41812 13.875L24.375 13.875C24.9963 13.875 25.5 14.3787 25.5 15Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    {showCounter && (
                        <p className="text-black dark:text-white text-base 2xl:text-xl font-medium block md:hidden">
                            {String(currentGroup).padStart(2, '0')}
                            <span className="text-gray40 dark:text-gray60">
                                {' '}
                                of {String(totalGroups).padStart(2, '0')}
                            </span>
                        </p>
                    )}

                    <button
                        ref={nextRef}
                        disabled={isEnd}
                        className={`
                            p-2.5 2xl:p-3.5 border rounded-full w-[44px] 2xl:w-[58px]
                            transition-all duration-300 border-white90 dark:border-gray15
                            ${isEnd
                                ? 'bg-inherit opacity-50 cursor-not-allowed'
                                : 'bg-white97 dark:bg-gray10'}
                        `}
                    >
                        {/* Next Arrow */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 30 30"
                            fill="none"
                            className="text-black dark:text-white hover:text-gray60 transition-colors duration-300"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.5 15C4.5 14.3787 5.00368 13.875 5.625 13.875L21.5819 13.875L15.3453 7.93593C14.8974 7.50529 14.8834 6.79312 15.3141 6.34525C15.7447 5.89738 16.4569 5.88342 16.9047 6.31406L25.1547 14.1891C25.3753 14.4012 25.5 14.694 25.5 15C25.5 15.306 25.3753 15.5988 25.1547 15.8109L16.9047 23.6859C16.4569 24.1166 15.7447 24.1026 15.3141 23.6547C14.8834 23.2069 14.8974 22.4947 15.3453 22.0641L21.5819 16.125L5.625 16.125C5.00368 16.125 4.5 15.6213 4.5 15Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GenericSlider
