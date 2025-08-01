export default function RotatingText() {
  const text = "Discover Your Dream Property ";

  return (
    <div className="fixed top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block z-50">
      <style>{`
        @keyframes rotateText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="border border-gray15 rounded-full">
        <div className="relative w-44 h-44 flex items-center justify-center rounded-full bg-grey08 overflow-hidden">
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
                className="absolute left-1/2 text-[15px] font-semibold z-10 p-[8px]"
                style={{
                  transform: `rotate(${(360 / text.length) * i}deg)`,
                  transformOrigin: "0 88px",
                }}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="text-[20px] bg-gray15 p-7 rounded-full border border-gray15 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img src="/assets/icons/arrowUpRight.svg" alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
