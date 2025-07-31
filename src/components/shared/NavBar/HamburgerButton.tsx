// components/navbar/HamburgerButton.tsx

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick}) => {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      {/* Top Line */}
      <span
        className={`w-6 h-0.5 bg-white absolute transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-2"
        }`}
      ></span>

      {/* Middle Line */}
      <span
        className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>

      {/* Bottom Line */}
      <span
        className={`w-6 h-0.5 bg-white absolute transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-2"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
