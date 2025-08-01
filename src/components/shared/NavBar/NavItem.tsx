import { NavLink } from "react-router-dom";

interface NavItemProps {
    to: string;
    label: string;
    onClick?: () => void;
    mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick, mobile = false }) => {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                isActive
                    ? mobile
                        ? "block py-2 px-4 rounded-md bg-gray15"
                        : "bg-gray08 md:py-3 md:px-5 2xl:py-3.5 2xl:px-6 md:rounded-lg 2xl:rounded-[10px] border border-gray15"
                    : mobile
                        ? "block py-2 px-4"
                        : ""
            }
        >
            {label}
        </NavLink>
    );
};

export default NavItem;
