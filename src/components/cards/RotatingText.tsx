"use client";
import { useEffect, useRef, useState } from "react";

export default function RotatingText() {
  const text = "Discover Your Dream Property ";
  const circleRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(88); 

  useEffect(() => {
    const updateRadius = () => {
      if (circleRef.current) {
        const { width } = circleRef.current.getBoundingClientRect();
        setRadius(width / 2);
      }
    };

    updateRadius(); // on mount
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="absolute bottom-[-55px] lg-custom:bottom-0 2xl:top-[275px] 2xl:left-[-80px] lg-custom:top-[200px] lg-custom:left-[-70px]  inline-block z-40">
      <style>{`
        @keyframes rotateText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="border border-gray15 rounded-full">
        <div
          ref={circleRef}
          className="relative w-28 h-28 lg-custom:w-32 lg-custom:h-32 2xl:w-44 2xl:h-44 flex items-center justify-center rounded-full bg-grey08 overflow-hidden"
        >
          <div
            className="absolute w-full h-full rounded-full"
            style={{
              animation: "rotateText 10s linear infinite",
            }}
          >
            <div className="absolute w-full h-full rounded-full bg-gray08 z-0" />

            {text.split("").map((char, i) => (
              <span
                key={i}
                className="absolute left-1/2 text-[11px] 2xl:text-[15px] font-semibold z-10 p-[8px]"
                style={{
                  transform: `rotate(${(360 / text.length) * i}deg)`,
                  transformOrigin: `0 ${radius}px`,
                }}
              >
                {char}
              </span>
            ))}
          </div>

          <div className=" bg-gray15 p-3 md:p-5 2xl:p-7 rounded-full border border-gray15 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img src="/assets/icons/arrowUpRight.svg" alt="Arrow"  />
          </div>
        </div>
      </div>
    </div>
  );
}