import { Link } from "react-router-dom"
import { type LinkGroup } from "../../../data/footerData"
import { FacebookIcon, FlagIcon, LinkedinIcon, MailIcon, SendIcon, TwitterIcon, YoutubeIcon } from "../../icons/FooterIcons"

type FooterProps = {
    links?: LinkGroup[]
    footerNote?: string
    name: string;
}

export default function Footer({ links, footerNote, name }: FooterProps) {
    return (
        <footer className="bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col space-y-4 mb-10 lg:mb-0">
                        <div className="flex items-center space-x-2">
                            <FlagIcon className="h-8 w-8 text-purple-600" />
                            <span className="text-2xl font-bold">{name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MailIcon className="text-gray-400" />
                            <input
                                className="bg-black text-white placeholder:text-gray-500"
                                placeholder="Enter Your Email"
                                type="email"
                            />
                            <button className="bg-purple-600 text-white hover:bg-purple-700">
                                <SendIcon className="text-white" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                        {links?.map(({ title, to, items }, i) => (
                            <div key={i} className="flex flex-col space-y-2">
                                <Link
                                    to={to}
                                    className="font-semibold text-lg text-white hover:text-purple-400 transition-colors">
                                    {title}
                                </Link>
                                {items.map(({ label, to }, j) => (
                                    <Link
                                        key={j}
                                        to={to}
                                        className="text-gray-400 hover:text-white text-sm transition-colors">
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
