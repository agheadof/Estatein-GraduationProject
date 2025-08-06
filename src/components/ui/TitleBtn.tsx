type Props = {
  label: string;
  btnStyle?: boolean;
  onClick?: () => void;
};

const TitleBtn = ({ label, btnStyle,onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        btnStyle ? " w-full md:w-auto " : ""
      } py-3.5 px-5 2xl:py-[18px] 2xl:px-6 bg-white97 dark:bg-gray10 border border-white90 dark:border-gray15 whitespace-nowrap rounded-lg 2xl:rounded-[10px] text-black dark:text-white text-sm 2xl:text-lg font-medium`}
    >
      {label}
    </button>
  );
};

export default TitleBtn;
