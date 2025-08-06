import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import TitleBtn from '../../ui/TitleBtn'
import { NextArrowIcon, PrevArrowIcon } from '../../icons/SliderArrows'

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
                        <span className="text-gray40 dark:text-gray60">
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
                        <PrevArrowIcon />
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
                        <NextArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GenericSlider
