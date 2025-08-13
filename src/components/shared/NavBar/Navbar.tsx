import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import HamburgerButton from "./HamburgerButton";
import ToggleButton from "../../ui/ToggleButton";
import { SectionWrapper } from "../../../layouts/SectionWrapper";
import { navData } from "../../../data/navData";
import { scrollToTop } from "../../../utlis/scrollToTop";
import AOS from "aos";
import {
  navDesktopItemAos,
  navDesktopContactAos,
  navMobileContainerAos,
  navMobileItemAos,
  navMobileContactAos,
} from "../../../utlis/Anamation";
import LogoIcon from "../../icons/LogoIcon";

type NavbarProps = {
  isBannerVisible: boolean;
};


const Navbar = ({ isBannerVisible }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      requestAnimationFrame(() => AOS.refresh());
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`bg-purple70/60 backdrop-blur-xl dark:backdrop-blur-none dark:bg-gray10 dark:text-white py-5 lg-custom:py-3.5 2xl:py-5 fixed w-full z-50 border-b-2 border-purple75 dark:border-b-2 dark:border-b-gray15 transition-all duration-700 ease-in-out ${
        isBannerVisible ? "top-[78px] md:top-[49px] 2xl:top-[63px]" : "top-0"
      }`}
    >
      <SectionWrapper>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToTop();
            }}
          >
            <LogoIcon className="w-24 md:w-28 2xl:w-40 text-white" />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg-custom:flex lg-custom:gap-6 2xl:gap-[30px] 2xl:font-medium">
            {navData.map((link, index) => (
              <li
                key={index}
                {...navDesktopItemAos(index)}
                onClick={() => {
                  scrollToTop();
                }}
              >
                <NavItem to={link.path} label={link.name} />
              </li>
            ))}
          </ul>

          {/* Desktop Button + Toggle + Hamburger */}
          <div className="flex items-center gap-4 lg-custom:gap-6">
            <NavLink
              to="/contact"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
              className={({ isActive }) =>
                `hidden lg-custom:block text-white font-medium lg-custom:py-3 lg-custom:px-5 2xl:py-3.5 2xl:px-6 lg-custom:rounded-lg 2xl:rounded-[10px] dark:border dark:border-gray15 ${
                  isActive ? "dark:bg-gray08 bg-gray08/60" : "dark:bg-gray08 bg-gray08/60"
                } transition-all duration-300 ease-in-out`
              }
              {...navDesktopContactAos()}
            >
              Contact Us
            </NavLink>

            <div className="flex gap-3 items-center">
              <ToggleButton />
              <HamburgerButton
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="overflow-hidden lg-custom:hidden mt-4"
            {...navMobileContainerAos()}
          >
            <ul className="flex flex-col gap-4 bg-gray08/60 dark:bg-gray08 p-5 rounded-lg border border-gray15">
              {navData.map((link, index) => (
                <li key={index} {...navMobileItemAos(index)}>
                  <NavItem
                    to={link.path}
                    label={link.name}
                    mobile
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  />
                </li>
              ))}

              <li
                className="mx-auto flex gap-3"
                {...navMobileContactAos(navData.length)}
              >
                <NavLink
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-md text-center text-white ${
                      isActive
                        ? "dark:bg-purple60 bg-purple60/80"
                        : "dark:bg-gray08 bg-gray08/60"
                    }`
                  }
                >
                  Contact Us
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
