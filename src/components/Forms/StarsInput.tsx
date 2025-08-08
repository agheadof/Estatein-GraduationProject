import { useState } from "react";
import StarIcon from "../icons/StarIcon";

type StarsInputProps = {
  label: string;
  onChange: (rating: number) => void;
};

function StarsInput({ label, onChange }: StarsInputProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    setSelectedRating(rating);
    onChange(rating);
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-base/[1.5] 2xl:text-xl text-black dark:text-white font-semibold">{label}</p>
      <div className="flex gap-3 px-2">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = hoverRating !== null 
            ? star <= hoverRating 
            : star <= selectedRating;

          return (
            <div
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              onClick={() => handleClick(star)}
              className="cursor-pointer transition-all "
            >
              <StarIcon
                className="w-6 h-6"
                fill={isFilled ? "#FFD700" : "#fbfaff"}
                stroke="#FFD700"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StarsInput;
