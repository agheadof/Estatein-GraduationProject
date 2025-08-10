import { useState } from "react";
import TitleBtn from "../../ui/TitleBtn";
import FaqPopup from "./FaqPopup";
import { AnimatePresence } from "framer-motion";

type Props = {
  question: {
    question: string;
    description: string;
  };
};

function FaqCard({ question }: Props) {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div className=" h-[242px] lg-custom:h-[282px] 2xl:h-[346px]  flex flex-col items-start justify-between border dark:border-gray15 border-white90 p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl ">
        <h2 className="line-clamp-2 dark:text-white text-black text-lg lg-custom:text-xl 2xl:text-2xl font-semibold mb-[20px] lg-custom:mb-[24px] 2xl:mb-[30px] ">
          {question.question}
        </h2>
        <p className=" line-clamp-2 text-gray40 dark:text-gray60 text-sm lg-custom:text-base 2xl:text-lg  font-medium  mb-[20px] lg-custom:mb-[24px] 2xl:mb-[30px] ">
          {question.description}
        </p>
        <TitleBtn label="Read More" btnStyle={true} onClick={handleShowPopup} />
      </div>

      <AnimatePresence>
        {showPopup && (
          <FaqPopup
            key="faq-popup"
            question={question.question}
            answer={question.description}
            onClick={() => setShowPopup(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default FaqCard;
