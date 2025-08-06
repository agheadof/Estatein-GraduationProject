import { Link } from "react-router-dom"
import { type LinkGroup } from "../../../data/footerData"
import { FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "../../icons/FooterIcons"
import { FooterNewsletter } from "./Newsletter"
import { scrollToTop } from "../../../utlis/scrollToTop"

type FooterProps = {
    links?: LinkGroup[]
    footerNote?: string
    logo: string;
}

export default function Footer({ links, footerNote, logo }: FooterProps) {
    return (
        <footer className=" bg-purple97 dark:bg-gray10 text-black dark:text-white ">
            <div className="huge:max-w-[1920px] huge:mx-auto px-4 md:px-8 lg-custom:!px-[120px] 2xl:!px-[162px]">
                <div className=" pt-[50px] pb-5 md:pt-20 md:pb-3 2xl:pb-[16px] 2xl:pt-[100px]">
                    <div className="flex flex-col lg-custom:flex-row justify-between gap-[50px] lg-custom:gap-5">
                        <div className="flex flex-col gap-5 lg-custom:gap-6 2xl:gap-[30px]">
                            <img src={logo} alt="logo" className=" w-28 h-8 2xl:w-40 2xl:h-12" />
                            <FooterNewsletter />
                        </div>
                        <div className="grid grid-cols-2 lg-custom:grid-cols-5  gap-5 lg-custom:gap-[10px] 2xl:gap-[100px]">
                            {links?.map(({ title, to, items }, i) => (
                                <div key={i} className="flex flex-col space-y-2 pb-5 border-b odd:border-r border-r-white90 dark:border-r-gray15 border-white90 dark:border-gray15 lg-custom:pb-0 lg-custom:border-none">
                                    <Link
                                        to={to}
                                        onClick={scrollToTop}
                                        className="font-meduim text-base 2xl:whitespace-nowrap md:text-[18px] 2xl:text-lg text-purple70 dark:text-gray40  hover:text-purple70 transition-colors mb-4">
                                        {title}
                                    </Link>
                                    {items.map(({ label, to }, j) => (
                                        <Link
                                            key={j}
                                            to={to}
                                            onClick={scrollToTop}
                                            className="font-meduim text-black dark:text-white 2xl:whitespace-nowrap hover:text-gray60 text-sm md:text-base lg-custom:!text-sm lg:!text[18px]  2xl:!text-lg transition-colors leading-6">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 border-t border-gray30 pt-8">
                        <div className="flex flex-col-reverse gap-[20px] lg-custom:flex-row justify-between items-center">
                            <div className="flex justify-center items-center flex-wrap gap-[10px] md:gap-[38px] text-black dark:text-white font-medium lg-custom:text-sm 2xl:text-[18px] leading-6">
                                <p>{footerNote}</p>
                                <Link to={"/"}>Terms & Conditions</Link>
                            </div>
                            <div className="flex space-x-4 mt-4 lg:mt-0">
                                <a href="#" className="w-[52px] h-[52px] bg-purple70 dark:bg-gray08 rounded-full flex items-center justify-center hover:bg-purple60 hover:-translate-y-1 duration-300 ease-in-out">
                                    <FacebookIcon
                                        className="h-6 w-6 text-gray-800 dark:text-gray-400" /></a>
                                <a href="#" className="w-[52px] h-[52px] bg-purple70 dark:bg-gray08 rounded-full flex items-center justify-center hover:bg-purple60 hover:-translate-y-1 duration-300 ease-in-out">
                                    <LinkedinIcon className="h-6 w-6 text-gray-400" /></a>
                                <a href="#" className="w-[52px] h-[52px] bg-purple70 dark:bg-gray08 rounded-full flex items-center justify-center hover:bg-purple60 hover:-translate-y-1 duration-300 ease-in-out">
                                    <TwitterIcon className="h-6 w-6 text-gray-400" />
                                </a>
                                <a href="#" className="w-[52px] h-[52px]  bg-purple70 dark:bg-gray08 rounded-full flex items-center justify-center hover:bg-purple60 hover:-translate-y-1 duration-300 ease-in-out">
                                    <YoutubeIcon className="h-6 w-6 text-gray-400"
                                    />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
