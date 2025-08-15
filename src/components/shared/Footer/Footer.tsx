import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "../../icons/FooterIcons";
import { Link } from "react-router-dom";
import { FooterNewsletter } from "./Newsletter";
import LogoIcon from "../../icons/LogoIcon";
import { scrollToTop } from "../../../utlis/scrollToTop";
import { fetchSocialLinks, type SocialLink } from "../../../redux/slices/footerLinksSlice";
import type { AppDispatch, RootState } from "../../../redux/store";

type FooterLinkItem = {
  label: string;
  to: string;
};

type FooterLinkColumn = {
  title: string;
  to: string;
  items: FooterLinkItem[];
};

type FooterProps = {
  links?: FooterLinkColumn[];
  footerNote?: string;
  logo: string;
};

export default function Footer({ links, footerNote }: FooterProps) {
  const dispatch = useDispatch<AppDispatch>();

  const { links: socialLinks, loading } = useSelector(
    (state: RootState) => state.footerLinks
  );

  useEffect(() => {
    dispatch(fetchSocialLinks());
  }, [dispatch]);

  const renderSocialIcon = (link: SocialLink) => {
    let IconComponent;
    switch (link.platform.toLowerCase()) {
      case "facebook":
        IconComponent = FacebookIcon;
        break;
      case "linkedin":
        IconComponent = LinkedinIcon;
        break;
      case "twitter":
        IconComponent = TwitterIcon;
        break;
      case "youtube":
        IconComponent = YoutubeIcon;
        break;
      default:
        return null;
    }

    return (
      <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"
        className="w-[52px] h-[52px] bg-purple70 dark:bg-gray08 rounded-full flex items-center justify-center hover:bg-purple60 hover:-translate-y-1 duration-300 ease-in-out"
      >
        <IconComponent className="h-6 w-6 text-gray-800 dark:text-gray-400" />
      </a>
    );
  };

  return (
    <footer className="bg-purple97 dark:bg-gray10 text-black dark:text-white">
      <div className="huge:max-w-[1920px] huge:mx-auto px-4 md:px-8 lg-custom:!px-[120px] 2xl:!px-[162px]">
        <div className="pt-[50px] pb-5 md:pt-20 md:pb-3 2xl:pb-[16px] 2xl:pt-[100px]">
          {/* Top Section */}
          <div className="flex flex-col lg-custom:flex-row justify-between gap-[50px] lg-custom:gap-5">
            {/* Logo & Newsletter */}
            <div className="flex flex-col gap-5 lg-custom:gap-6 2xl:gap-[30px]">
              <LogoIcon className="w-28 h-8 2xl:w-40 2xl:h-12 text-black dark:text-white" />
              <FooterNewsletter />
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 lg-custom:grid-cols-5 gap-5 lg-custom:gap-[10px] 2xl:gap-[100px]">
              {links?.map(({ title, to, items }: FooterLinkColumn, i: number) => (
                <div
                  key={i}
                  className="flex flex-col space-y-2 pb-5 border-b odd:border-r border-r-white90 dark:border-r-gray15 lg-custom:pb-0 lg-custom:border-none"
                >
                  <Link
                    to={to}
                    onClick={scrollToTop}
                    className="font-medium text-base 2xl:whitespace-nowrap md:text-[18px] 2xl:text-lg text-purple70 dark:text-gray40 hover:text-purple70 transition-colors mb-4"
                  >
                    {title}
                  </Link>
                  {items.map(({ label, to }: FooterLinkItem, j: number) => (
                    <Link
                      key={j}
                      to={to}
                      onClick={scrollToTop}
                      className="font-medium text-black dark:text-white 2xl:whitespace-nowrap hover:text-gray60 text-sm md:text-base lg-custom:!text-sm lg:!text-[18px] 2xl:!text-lg transition-colors leading-6"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 border-t border-gray30 pt-8">
            <div className="flex flex-col-reverse gap-[20px] lg-custom:flex-row justify-between items-center">
              <div className="flex justify-center items-center flex-wrap gap-[10px] md:gap-[38px] text-black dark:text-white font-medium lg-custom:text-sm 2xl:text-[18px] leading-6">
                <p>{footerNote}</p>
                <Link to={"/under-process"}>Terms & Conditions</Link>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-4 lg:mt-0">
                {loading
                  ? Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-[52px] h-[52px] bg-purple70 dark:bg-gray-600 rounded-full animate-pulse"
                      ></div>
                    ))
                  : socialLinks.map((link: SocialLink) => renderSocialIcon(link))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
