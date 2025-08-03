import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../../../data/NavData";
import NavItem from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import { scrollToTop } from "../../../utlis/scrollToTop";

type NavbarProps = {
  isBannerVisible: boolean;
};

const Navbar = ({ isBannerVisible }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav
      className={`bg-gray10 text-white py-5 px-4 md:px-10 fixed w-full z-50 transition-all duration-700 ease-in-ou
    ${isBannerVisible ? "top-[78px] md:top-[49px] 2xl:top-[63px]" : "top-0"}`}
    >
      <div className="flex justify-between items-center huge:container huge:mx-auto">
        {/* Logo */}
        <img
          src="/assets/icons/Navbar/logo.svg"
          alt="Logo"
          className="w-24 md:w-28 2xl:w-40"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-6 2xl:gap-[30px] 2xl:font-medium">
          {NavData.map((link, index) => (
            <li key={index}>
              <NavItem to={link.path} label={link.name} />
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <NavLink
          to="/contact"
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className={({ isActive }) =>
            `hidden md:block text-white font-medium  md:py-3 md:px-5 2xl:py-3.5 2xl:px-6 md:rounded-lg 2xl:rounded-[10px] border border-gray15
           ${isActive ? "bg-purple60" : "bg-gray08"}`
          }
        >
          Contact Us
        </NavLink>

        {/* Mobile Menu Toggle */}
        <HamburgerButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-4 mt-4 md:hidden bg-gray08 p-5 rounded-lg border border-gray15 "
          >
            {NavData.map((link, index) => (
              <li key={index}>
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

            <li className="mx-auto">
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md text-center text-white ${
                    isActive ? "bg-purple60" : "bg-gray15 "
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
