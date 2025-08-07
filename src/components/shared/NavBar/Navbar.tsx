import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import { scrollToTop } from "../../../utlis/scrollToTop";
import ToggleButton from "../../ui/ToggleButton";
import { SectionWrapper } from "../../../layouts/SectionWrapper";
import { navData } from "../../../data/NavData";

type NavbarProps = {
  isBannerVisible: boolean
}

const Navbar = ({ isBannerVisible }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-purple70/60 backdrop-blur-xl dark:backdrop-blur-none dark:bg-gray10 dark:text-white py-5 lg-custom:py-3.5 2xl:py-5 fixed w-full z-50 border-b-2 border-purple75  dark:border-b-2  dark:border-b-gray15 transition-all duration-700 ease-in-out
    ${isBannerVisible ? "top-[78px] md:top-[49px] 2xl:top-[63px]" : "top-0"}`}
    >
      <SectionWrapper>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => {
              setIsMenuOpen(false)
              scrollToTop()
            }}
          >
            <img
              src="/assets/icons/Navbar/logo.svg"
              alt="Logo"
              className="w-24 md:w-28 2xl:w-40"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg-custom:flex lg-custom:gap-6 2xl:gap-[30px] 2xl:font-medium">
            {navData.map((link, index) => (
              <li
                key={index}
                onClick={() => {
                  scrollToTop()
                }}
              >
                <NavItem to={link.path} label={link.name} />
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="flex items-center gap-4 lg-custom:gap-6">
            <NavLink
              to="/contact"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToTop()
              }}
              className={({ isActive }) =>
                `hidden lg-custom:block text-white font-medium  lg-custom:py-3 lg-custom:px-5 2xl:py-3.5 2xl:px-6 lg-custom:rounded-lg 2xl:rounded-[10px] dark:border dark:border-gray15
           ${
             isActive
               ? " dark:bg-gray08 bg-gray08/60"
               : "dark:bg-gray08 bg-gray08/60"
           }
           transition-all duration-300 ease-in-out`
              }
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg-custom:hidden mt-4"
            >
              <ul className="flex flex-col gap-4 bg-gray08/60 dark:bg-gray08 p-5 rounded-lg border border-gray15">
                {navData.map((link, index) => (
                  <li key={index}>
                    <NavItem
                      to={link.path}
                      label={link.name}
                      mobile
                      onClick={() => {
                        setIsMenuOpen(false)
                        scrollToTop()
                      }}
                    />
                  </li>
                ))}
                <li className="mx-auto flex gap-3">
                  <NavLink
                    onClick={() => {
                      setIsMenuOpen(false)
                      scrollToTop()
                    }}
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded-md text-center text-white ${
                        isActive
                          ? "dark:bg-purple60 bg-purple60/80"
                          : " dark:bg-gray08 bg-gray08/60"
                      }`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionWrapper>
   </motion.nav>
  );
};

export default Navbar
