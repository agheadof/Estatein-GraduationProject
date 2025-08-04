import { type ReactNode } from "react";

type BtnVaritans = "normalPurple" | "darkBg" | "lightMode"

type MainButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    // to set the width and other properties corresponding to the section design.
    className?: string;
    // normalPurple: for the purpule btn , darkBg: when the bg is dark , lightMode: when light mode is active
    variant: BtnVaritans;
}

const MainButton = ({ children, onClick, className, variant }: MainButtonProps) => {

    const buttonVariants = {
        normalPurple: 'bg-purple90 dark:bg-purple60 text-black dark:text-white hover:bg-purple75',
        darkBg: 'bg-white97 dark:bg-gray10 text-black dark:text-white border border-white90 dark:border-gray15 hover:bg-gray15',
        lightMode: ''
    }

    return (
        <button
            className={`py-[14px] huge:py-[18px] text-center px-5 rounded-lg huge:rounded-[10px]
            text-sm huge:text-lg font-medium leading-[150%] cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-opacity-75 duration-200
            ${className} ${buttonVariants[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default MainButton
