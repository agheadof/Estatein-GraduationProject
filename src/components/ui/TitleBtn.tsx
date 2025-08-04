type Props = {
    label: string;
    btnStyle?: boolean;
};

const TitleBtn = ({ label,btnStyle }: Props) => {
    return (
        <button className={`${btnStyle? " w-full md:w-auto " : ""} py-3.5 px-5 2xl:py-[18px] 2xl:px-6 bg-gray10 border border-gray15 whitespace-nowrap rounded-lg 2xl:rounded-[10px] text-white text-sm 2xl:text-lg font-medium`}>
            {label}
        </button>
    )
}

export default TitleBtn;
