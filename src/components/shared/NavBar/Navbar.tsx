import { useState, useEffect, useCallback, type FC, memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import HamburgerButton from "./HamburgerButton";
import ToggleButton from "../../ui/ToggleButton";
import { SectionWrapper } from "../../../layouts/SectionWrapper";
import { scrollToTop } from "../../../utlis/scrollToTop";
import AOS from "aos";
import { navDesktopItemAos, navDesktopContactAos, navMobileContainerAos, navMobileItemAos, navMobileContactAos } from "../../../utlis/Anamation";

type NavLinkType = {
  name: string;
  path: string;
};

type NavbarProps = {
  isBannerVisible: boolean;
  logo: FC<{ className?: string }>; 
  navData: NavLinkType[];         
};

const MemoNavItem = memo(NavItem);
const MemoHamburgerButton = memo(HamburgerButton);

const Navbar = ({ isBannerVisible, logo: Logo, navData }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
    scrollToTop();
  }, []);

  const mainNavLinks = useMemo(() => navData.slice(0, 4), [navData]);
  const contactLink = useMemo(() => navData.at(-1) || { name: "Contact Us", path: "/contact" }, [navData]);

  useEffect(() => {
    if (isMenuOpen) {
      const raf = requestAnimationFrame(() => AOS.refresh());
      return () => cancelAnimationFrame(raf);
    }
  }, [isMenuOpen]);

  return (
    <nav className={`bg-purple70/60 backdrop-blur-xl dark:backdrop-blur-none dark:bg-gray10 dark:text-white py-5 lg-custom:py-3.5 2xl:py-5 fixed w-full z-50 border-b-2 border-purple75 dark:border-b-2 dark:border-b-gray15 transition-all duration-700 ease-in-out h-[95px]${
        isBannerVisible ? "top-[78px] md:top-[49px] 2xl:top-[63px]" : "top-0"}`} role="navigation">
      <SectionWrapper>
        <div className="flex justify-between items-center">
          <NavLink to="/" onClick={handleCloseMenu}>
            <Logo className="w-24 md:w-28 2xl:w-40 text-white" />
          </NavLink>
          <ul className="hidden lg-custom:flex lg-custom:gap-6 2xl:gap-[30px] 2xl:font-medium leading-[150%] lg-custom:text-sm 2xl:text-lg" role="menubar">
            {mainNavLinks.map((link, index) => (
              <li key={link.name} {...navDesktopItemAos(index)}
                onClick={scrollToTop}
                role="none">
                <MemoNavItem to={link.path} label={link.name} />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 lg-custom:gap-6">
            <NavLink to={contactLink.path} onClick={handleCloseMenu}
              className={({ isActive }) =>
                `hidden lg-custom:block text-white font-medium lg-custom:py-3 lg-custom:px-5 2xl:py-3.5 2xl:px-6 lg-custom:rounded-lg 2xl:rounded-[10px] dark:border dark:border-gray15 ${
                  isActive ? "dark:bg-gray08 bg-gray08/60 hover:bg-gray08/50 dark:hover:bg-gray10/60" : "dark:bg-gray08 bg-gray08/60 hover:bg-gray08/80 dark:hover:bg-gray10"
                } transition-all duration-300 ease-in-out`
              } {...navDesktopContactAos()}>
              {contactLink.name}
            </NavLink>

            <div className="flex gap-3 items-center">
              <ToggleButton />
              <MemoHamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen((prev) => !prev)}/>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="overflow-hidden lg-custom:hidden mt-4" {...navMobileContainerAos()}>
            <ul className="flex flex-col gap-4 bg-gray08/60 dark:bg-gray08 p-5 rounded-lg border border-gray15" role="menu">
              {mainNavLinks.map((link, index) => (
                <li key={link.name} {...navMobileItemAos(index)} role="none">
                  <MemoNavItem to={link.path} label={link.name} mobile onClick={handleCloseMenu} />
                </li>
              ))}

              <li className="mx-auto flex gap-3" {...navMobileContactAos(navData.length)} role="none">
                <NavLink onClick={handleCloseMenu} to={contactLink.path}
                  className={({ isActive }) => `block py-2 px-4 rounded-md text-center text-white ${
                      isActive ? "dark:bg-purple60 bg-purple60/80" : "dark:bg-gray08 bg-gray08/60"}`}>
                  {contactLink.name}
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </SectionWrapper>
    </nav>
  );
};

export default Navbar;
