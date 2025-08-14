import React, { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import TitleBtn from "../../ui/TitleBtn"
import { NextArrowIcon, PrevArrowIcon } from "../../icons/SliderArrows"

type Props<T> = {
  items: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  showCounter?: boolean;
  titleBtnLabel?: string;
  counterClassName?: string;
  navigateTo?: string;
};

const GenericSlider = <T,>({
  items,
  renderSlide,
  slidesPerView = 3,
  showCounter = true,
  titleBtnLabel = "",
  counterClassName = "",
  navigateTo,
}: Props<T>) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [currentGroup, setCurrentGroup] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentSlidesPerGroup, setCurrentSlidesPerGroup] =
    useState(slidesPerView);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: currentSlidesPerGroup,
      spacing: 30,
    },
    rubberband: false,
    breakpoints: {
      "(max-width: 767px)": {
        slides: { perView: 1, spacing: 30 },
      },
      "(min-width: 768px) and (max-width: 991px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 992px)": {
        slides: { perView: slidesPerView, spacing: 30 },
      },
    },
    created(slider) {
      updateNav(slider);
    },
    slideChanged(slider) {
      updateNav(slider);
    },
  });

  useEffect(() => {
    if (!slider || !slider.current) return;

    slider.current.update();

    const details = slider.current.track?.details;
    const rel = details?.rel ?? 0;
    const perView =
      typeof slider.current?.options?.slides === "object" &&
      slider.current.options.slides !== null &&
      "perView" in slider.current.options.slides
        ? (slider.current.options.slides.perView as number) ||
          currentSlidesPerGroup ||
          1
        : currentSlidesPerGroup || 1;

    const maxRel = Math.max(0, Math.ceil(Math.max(0, items.length - perView)));

    if (rel > maxRel) {
      slider.current.moveToIdx(Math.max(0, maxRel));
    }

    requestAnimationFrame(() => updateNav(slider.current));
  }, [items.length, currentSlidesPerGroup, slider]);

  const updateNav = (slider: any) => {
    const details = slider?.track?.details;
    const rel = details?.rel;
    const perView = slider?.options?.slides?.perView || 1;

    if (details && rel != null) {
      const group = Math.ceil(rel / perView) + 1;
      setCurrentGroup(group);
      setIsBeginning(rel === 0);
      setIsEnd(rel + perView >= items.length);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setCurrentSlidesPerGroup(slidesPerView);
      } else if (width >= 768) {
        setCurrentSlidesPerGroup(2);
      } else {
        setCurrentSlidesPerGroup(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesPerView]);

  const totalGroups = Math.ceil(items.length / currentSlidesPerGroup);

  return (
    <div data-aos="fade-up" className="w-full mt-[80px] " >
      <div ref={sliderRef} className="keen-slider mb-[50px] w-full ">
        {items.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            {renderSlide(item, index)}
          </div>
        ))}
      </div>
      <div 
        className={`${counterClassName} flex justify-between items-center pt-4 2xl:pt-5 border-t border-t-white90 dark:border-t-gray15`}
      >
        {showCounter && (
          <p data-aos="fade-right" className="text-black dark:text-white text-base 2xl:text-xl font-medium hidden md:block">
            {String(currentGroup).padStart(2, "0")}
            <span className="text-gray40 dark:text-gray60">
              {" "}
              of {String(totalGroups).padStart(2, "0")}
            </span>
          </p>
        )}

        {titleBtnLabel && (
          <div className="block md:hidden">
            <TitleBtn
              label={titleBtnLabel}
              className="whitespace-pre-wrap"
              navigateTo={navigateTo}
            />
          </div>
        )}

        <div           data-aos="fade-left"
  className="flex items-center gap-2.5">
          <button
            ref={prevRef}
            disabled={isBeginning}
            onClick={() => slider.current?.prev()}
            className={`
              p-2.5 2xl:p-3.5 border rounded-full w-[44px] 2xl:w-[58px]
              transition-all duration-300 border-white90 dark:border-gray15
              ${
                isBeginning
                  ? "bg-inherit opacity-50 cursor-not-allowed"
                  : "bg-white97 dark:bg-gray10 border-white90 dark:border-gray15"
              }
            `}
          >
            <PrevArrowIcon />
          </button>

          {showCounter && (
            <p className="text-black dark:text-white text-base 2xl:text-xl font-medium block md:hidden">
              {String(currentGroup).padStart(2, "0")}
              <span className="text-gray40 dark:text-gray60">
                {" "}
                of {String(totalGroups).padStart(2, "0")}
              </span>
            </p>
          )}

          <button
          
            ref={nextRef}
            disabled={isEnd}
            onClick={() => slider.current?.next()}
            className={`
              p-2.5 2xl:p-3.5 border rounded-full w-[44px] 2xl:w-[58px]
              transition-all duration-300 border-white90 dark:border-gray15
              ${
                isEnd
                  ? "bg-inherit opacity-50 cursor-not-allowed"
                  : "bg-white97 dark:bg-gray10"
              }
            `}
          >
            <NextArrowIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GenericSlider;
