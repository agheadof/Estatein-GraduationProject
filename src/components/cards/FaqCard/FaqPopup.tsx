import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../../icons/CloseIcon";

type FaqPopupProps = {
  question?: string;
  answer?: string;
  onClick: () => void;
};

const FaqPopup = ({ question, answer, onClick }: FaqPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClick, 300);
  };

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } backdrop-blur-xs bg-[#00000033] dark:bg-[#e3e3e380]`}
      onClick={handleClose}
    >
      <div
        className={`relative w-5xl max-h-[70vh] overflow-y-auto bg-white dark:bg-gray08 border dark:border-gray15 border-white90 rounded-[10px] 2xl:rounded-xl p-[30px] lg-custom:p-[40px] 2xl:p-[50px] m-5 transition-transform duration-300 ${
          isVisible ? "translate-y-0 scale-100" : "translate-y-5 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="dark:text-white text-black text-lg lg-custom:text-xl 2xl:text-2xl font-semibold mb-[20px] lg-custom:mb-[24px] 2xl:mb-[30px] border-b-2 border-purple65 pb-5">
          {question}
        </h2>
        <p className="text-gray40 dark:text-gray60 text-sm lg-custom:text-base 2xl:text-lg font-medium leading-[150%]">
          {answer}
        </p>
        <CloseIcon
          className="close_icon w-6 h-6 text-purple65 absolute top-4 right-4 cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </div>,
    document.body
  );
};

export default FaqPopup;
