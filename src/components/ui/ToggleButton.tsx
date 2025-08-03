import { useDispatch } from "react-redux";
import { useState } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import { toggleTheme } from "../../redux/slices/themeSlice";

const Switch = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((prev) => !prev);
    dispatch(toggleTheme());
  };

  return (
    <label className="relative w-10 h-10 bg-white dark:bg-gray20 shadow-[0_0_30px_10px_rgba(0,0,0,0.05)] rounded-full grid place-items-center cursor-pointer transition-all duration-300">
      <input type="checkbox" checked={checked} onChange={handleToggle} className="hidden" />

      <div className={`absolute transition-transform duration-500 grid place-items-center ${
          checked ? "rotate-[360deg] scale-0 delay-200" : "scale-100"}`}>
        <MoonIcon className="w-5 h-5 text-gray15 dark:text-white" />
      </div>

      <div
        className={`absolute transition-transform duration-500 grid place-items-center ${
          checked ? "scale-100 rotate-[360deg] delay-200" : "scale-0"
        }`}
      >
        <SunIcon className="w-5 h-5 text-yellow-400 dark:text-yellow-300" />
      </div>
    </label>
  );
};

export default Switch;
