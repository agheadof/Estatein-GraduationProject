import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import CloseIcon from "../../icons/CloseIcon";

type FaqPopupProps = {
  question: string;
  answer: string;
  onClick: () => void;
};

const FaqPopup = ({ question, answer, onClick }: FaqPopupProps) => {
  return createPortal(
    <motion.div
      className="fixed h-screen z-50 inset-0 bg-[#00000033] dark:bg-[#e3e3e380] backdrop-blur-xs flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-5xl max-h-[70vh] overflow-y-auto bg-white dark:bg-gray08 border dark:border-gray15 border-white90 rounded-[10px] 2xl:rounded-xl p-[30px] lg-custom:p-[40px] 2xl:p-[50px] m-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        transition={{ duration: 0.7 }}
      >
        <h2 className="dark:text-white text-black text-lg lg-custom:text-xl 2xl:text-2xl font-semibold mb-[20px] lg-custom:mb-[24px] 2xl:mb-[30px] border-b-2 border-purple65 pb-5">
          {question}
        </h2>
        <p className="text-gray40 dark:text-gray60 text-sm lg-custom:text-base 2xl:text-lg font-medium leading-[150%]">
          {answer}
        </p>
        <CloseIcon
          className="close_icon w-6 h-6 text-purple65 absolute top-4 right-4 cursor-pointer"
          onClick={onClick}
        />
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default FaqPopup;
