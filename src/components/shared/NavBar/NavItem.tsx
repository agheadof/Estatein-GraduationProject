import { NavLink } from "react-router-dom"

interface NavItemProps {
  to: string
  label: string
  onClick?: () => void
  mobile?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  onClick,
  mobile = false,
}) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? mobile
            ? "block py-2 px-4 rounded-md  bg-gray15/60 text-white dark:bg-gray15"
            : "dark:bg-gray08 bg-gray08/60 text-white md:py-3 md:px-5 2xl:py-3.5 2xl:px-6 md:rounded-lg 2xl:rounded-[10px] dark:border dark:border-gray15  transition-all duration-150 ease-in-out "
          : mobile
          ? "block py-2 px-4 text-white"
          : " transition-all duration-75 ease-in-out"
      }
    >
      {label}
    </NavLink>
  )
}

export default NavItem
