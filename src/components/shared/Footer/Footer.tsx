// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   FacebookIcon,
//   LinkedinIcon,
//   TwitterIcon,
//   YoutubeIcon,
// } from "../../icons/FooterIcons";
// import { Link } from "react-router-dom";
// import { FooterNewsletter } from "./Newsletter";
// import LogoIcon from "../../icons/LogoIcon";
// import { scrollToTop } from "../../../utlis/scrollToTop";
// import {
//   fetchSocialLinks,
//   type SocialLink,
// } from "../../../redux/slices/footerLinksSlice";
// import type { AppDispatch, RootState } from "../../../redux/store";

// type FooterLinkItem = {
//   label: string;
//   to: string;
// };

// type FooterLinkColumn = {
//   title: string;
//   to: string;
//   items: FooterLinkItem[];
// };

// type FooterProps = {
//   links?: FooterLinkColumn[];
//   footerNote?: string;
//   logo: string;
// };

// export default function Footer({ links, footerNote }: FooterProps) {
//   const dispatch = useDispatch<AppDispatch>();

//   const { links: socialLinks, loading } = useSelector(
//     (state: RootState) => state.footerLinks
//   );

//   useEffect(() => {
//     dispatch(fetchSocialLinks());
//   }, [dispatch]);

//   const renderSocialIcon = (link: SocialLink) => {
//     let IconComponent;
//     switch (link.platform.toLowerCase()) {
//       case "facebook":
//         IconComponent = FacebookIcon;
//         break;
//       case "linkedin":
//         IconComponent = LinkedinIcon;
//         break;
//       case "twitter":
//         IconComponent = TwitterIcon;
//         break;
//       case "youtube":
//         IconComponent = YoutubeIcon;
//         break;
//       default:
//         return null;
//     }

//     return (
//       <a
//         key={link.platform}
//         href={link.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="w-[52px] h-[52px] bg-purple70 dark:bg-gray08 rounded-full flex items-center justify-center hover:bg-purple60 hover:-translate-y-1 duration-300 ease-in-out"
//       >
//         <IconComponent className="h-6 w-6 text-gray-800 dark:text-gray-400" />
//       </a>
//     );
//   };

//   return (
//     <footer className="bg-purple97 dark:bg-gray08 text-black dark:text-white">
//       <div className="huge:max-w-[1920px] huge:mx-auto px-4 md:px-8 lg-custom:!px-[80px] 2xl:!px-[162px]">
//         <div className="pt-[50px] pb-5 md:pt-20 md:pb-3 2xl:pb-[16px] 2xl:pt-[100px]">
//           {/* Top Section */}
//           <div className="flex flex-col lg-custom:flex-row justify-between gap-[50px] lg-custom:gap-5">
//             {/* Logo & Newsletter */}
//             <div className="flex flex-col gap-5 lg-custom:gap-6 2xl:gap-[30px]">
//               <LogoIcon className="w-28 h-8 2xl:w-40 2xl:h-12 text-black dark:text-white" />
//               <FooterNewsletter />
//             </div>

//             {/* Footer Links */}
//             <div className="grid grid-cols-2 lg-custom:grid-cols-5 gap-5 lg-custom:gap-[10px] 2xl:gap-[100px]">
//               {links?.map(
//                 ({ title, to, items }: FooterLinkColumn, i: number) => (
//                   <div
//                     key={i}
//                     className="flex flex-col space-y-2 pb-5 border-b  border-b-white90 dark:border-b-gray15 odd:border-r border-r-white90 dark:border-r-gray15 lg-custom:pb-0 lg-custom:border-none"
//                   >
//                     <Link
//                       to={to}
//                       // onClick={() => scrollToSection(to)}
//                       // onClick={scrollToTop}
//                       className="font-medium text-base 2xl:whitespace-nowrap md:text-[18px] 2xl:text-xl text-purple70 dark:text-gray40 hover:text-purple70 transition-colors mb-4 md:mb-6 2xl:mb-[30px]"
//                     >
//                       {title}
//                     </Link>
//                     {items.map(({ label, to }: FooterLinkItem, j: number) => (
//                       <Link
//                         key={j}
//                         to={to}
//                         // onClick={() => scrollToSection(to)}
//                         // onClick={scrollToTop}
//                         className="font-medium text-black dark:text-white 2xl:whitespace-nowrap hover:text-gray60 text-sm md:text-base lg-custom:!text-sm lg:!text-[18px] 2xl:!text-lg transition-colors leading-6"
//                       >
//                         {label}
//                       </Link>
//                     ))}
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-[50px] md:mt-20 2xl:mt-[100px] bg-purple97 dark:bg-gray10 py-4">
//         <div className=" huge:max-w-[1920px] huge:mx-auto px-4 md:px-8 lg-custom:!px-[80px] 2xl:!px-[162px]">
//           <div className="flex flex-col-reverse gap-[20px] lg-custom:flex-row justify-between items-center">
//             <div className="flex flex-col lg-custom:flex-row justify-center items-center flex-wrap gap-[10px] lg-custom:gap-[38px] text-black dark:text-white font-medium text-sm 2xl:text-[18px] leading-6">
//               <p>{footerNote}</p>
//               <Link to={"/under-process"} onClick={scrollToTop}>
//                 Terms & Conditions
//               </Link>
//             </div>

//             {/* Social Media Links */}
//             <div className="flex space-x-[10px] mt-4 lg:mt-0">
//               {loading
//                 ? Array.from({ length: 4 }).map((_, index) => (
//                     <div
//                       key={index}
//                       className="w-[52px] h-[52px] bg-purple70 rounded-full animate-pulse"
//                     ></div>
//                   ))
//                 : socialLinks.map((link: SocialLink) => renderSocialIcon(link))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../icons/FooterIcons";
import LogoIcon from "../../icons/LogoIcon";
import { FooterNewsletter } from "./Newsletter";
import { scrollToTop } from "../../../utlis/scrollToTop";
import {
  fetchSocialLinks,
  type SocialLink,
} from "../../../redux/slices/footerLinksSlice";
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
  const navigate = useNavigate();
  const location = useLocation();

  const { links: socialLinks, loading } = useSelector(
    (state: RootState) => state.footerLinks
  );

  useEffect(() => {
    dispatch(fetchSocialLinks());
  }, [dispatch]);

  // ==============================
  // دالة التنقل/التمرير
  const scrollToSection = (to: string) => {
    const [path, hash] = to.split("#");

    if (window.location.pathname === path) {
      // نفس الصفحة
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // صفحة مختلفة
      navigate(path, { state: { scrollToHash: hash } });
    }
  };

  // عند تغيير الصفحة، إذا كان هناك hash في state، نمرر التمرير
  useEffect(() => {
    const stateHash = location.state?.scrollToHash;
    if (stateHash) {
      const el = document.getElementById(stateHash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // ==============================
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
      <a
        key={link.platform}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[52px] h-[52px] bg-purple70 dark:bg-gray08 rounded-full flex items-center justify-center hover:bg-purple60 hover:-translate-y-1 duration-300 ease-in-out"
      >
        <IconComponent className="h-6 w-6 text-gray-800 dark:text-gray-400" />
      </a>
    );
  };

  // ==============================
  return (
    <footer className="bg-purple97 dark:bg-gray08 text-black dark:text-white">
      <div className="huge:max-w-[1920px] huge:mx-auto px-4 md:px-8 lg-custom:!px-[80px] 2xl:!px-[162px]">
        <div className="pt-[50px] pb-5 md:pt-20 md:pb-3 2xl:pb-[16px] 2xl:pt-[100px]">
          <div className="flex flex-col lg-custom:flex-row justify-between gap-[50px] lg-custom:gap-5">
            <div className="flex flex-col gap-5 lg-custom:gap-6 2xl:gap-[30px]">
              <LogoIcon className="w-28 h-8 2xl:w-40 2xl:h-12 text-black dark:text-white" />
              <FooterNewsletter />
            </div>

            <div className="grid grid-cols-2 lg-custom:grid-cols-5 gap-5 lg-custom:gap-[10px] 2xl:gap-[100px]">
              {links?.map(({ title, to, items }, i) => (
                <div
                  key={i}
                  className="flex flex-col space-y-2 pb-5 border-b border-b-white90 dark:border-b-gray15 odd:border-r border-r-white90 dark:border-r-gray15 lg-custom:pb-0 lg-custom:border-none"
                >
                  <Link
                    to={to}
                    onClick={() => scrollToSection(to)}
                    className="font-medium text-base 2xl:whitespace-nowrap md:text-[18px] 2xl:text-xl text-purple70 dark:text-gray40 hover:text-purple70 transition-colors mb-4 md:mb-6 2xl:mb-[30px]"
                  >
                    {title}
                  </Link>
                  {items.map(({ label, to }, j) => (
                    <Link
                      key={j}
                      to={to}
                      onClick={() => scrollToSection(to)}
                      className="font-medium text-black dark:text-white 2xl:whitespace-nowrap hover:text-gray60 text-sm md:text-base lg-custom:!text-sm lg:!text-[18px] 2xl:!text-lg transition-colors leading-6"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] md:mt-20 2xl:mt-[100px] bg-purple97 dark:bg-gray10 py-4">
        <div className="huge:max-w-[1920px] huge:mx-auto px-4 md:px-8 lg-custom:!px-[80px] 2xl:!px-[162px]">
          <div className="flex flex-col-reverse gap-[20px] lg-custom:flex-row justify-between items-center">
            <div className="flex flex-col lg-custom:flex-row justify-center items-center flex-wrap gap-[10px] lg-custom:gap-[38px] text-black dark:text-white font-medium text-sm 2xl:text-[18px] leading-6">
              <p>{footerNote}</p>
              <Link to={"/under-process"} onClick={scrollToTop}>
                Terms & Conditions
              </Link>
            </div>

            <div className="flex space-x-[10px] mt-4 lg:mt-0">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-[52px] h-[52px] bg-purple70 rounded-full animate-pulse"
                    />
                  ))
                : socialLinks.map((link: SocialLink) => renderSocialIcon(link))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
