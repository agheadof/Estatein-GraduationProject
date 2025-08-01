import { Link } from "react-router-dom"
import { type LinkGroup } from "../../../data/footerData"
import { FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "../../icons/FooterIcons"
import { FooterNewsletter } from "./Newsletter"

type FooterProps = {
    links?: LinkGroup[]
    footerNote?: string
    logo: string;
}

export default function Footer({ links, footerNote, logo }: FooterProps) {
    return (
        <footer className="bg-gray10 text-white min-[992px]:px-20 2xl:px-[162px]">
            <div className="max-w-[1920px] mx-auto py-16">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col space-y-[15px] mb-10 lg:mb-0">
                        <img src={logo} alt="logo" className="w-40 h-12" />
                        <FooterNewsletter/>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 min-[992px]:gap-[4%] 2xl:gap-[100px]">
                        {links?.map(({ title, to, items }, i) => (
                            <div key={i} className="flex flex-col space-y-2">
                                <Link
                                    to={to}
                                    className="font-meduim text-lg text-gray60 hover:text-purple60 transition-colors mb-4">
                                    {title}
                                </Link>
                                {items.map(({ label, to }, j) => (
                                    <Link
                                        key={j}
                                        to={to}
                                        className="font-meduim text-white hover:text-gray60 text-[16px] transition-colors leading-6">
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            {footerNote}
                        </p>
                        <div className="flex space-x-4 mt-4 lg:mt-0">
                            <FacebookIcon
                                className="h-6 w-6 text-gray-400"
                                hoverClassName="hover:text-purple-600 transition-colors duration-300 ease-in-out"
                                color="currentColor"
                            />
                            <LinkedinIcon className="h-6 w-6 text-gray-400"
                                hoverClassName="hover:text-purple-600 transition-colors duration-300 ease-in-out"
                                color="currentColor" />
                            <TwitterIcon className="h-6 w-6 text-gray-400"
                                hoverClassName="hover:text-purple-600 transition-colors duration-300 ease-in-out"
                                color="currentColor" />
                            <YoutubeIcon className="h-6 w-6 text-gray-400"
                                hoverClassName="hover:text-purple-600 transition-colors duration-300 ease-in-out"
                                color="currentColor" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
