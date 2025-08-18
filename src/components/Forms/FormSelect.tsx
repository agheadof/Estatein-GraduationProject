import { useState, useRef, useEffect } from "react";
import type { SelectProps } from "../../types/Form";
import { DropdownIcon } from "../icons/FormIcons";

function FormSelect({
  label,
  name,
  value,
  placeholder,
  onChange,
  options,
  error,
  classNameCustom,
  classExtra = "bg-white97 dark:bg-gray10",
  classIcon,
  children,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(value || "");
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    onChange(opt);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col group shrink-0" ref={selectRef}>
      {label && (
        <label
          htmlFor={name}
          className="2xl:mb-4 lg-custom:mb-3.5 mb-2.5 2xl:text-xl text-base/[1.5] text-black dark:text-white font-semibold"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {label}
        </label>
      )}

      <div
        className={`relative flex flex-col border-1  border-white90 dark:border-gray15 hover:text-purple75 font-medium ${classExtra}`}
      >
        <div
          className={`flex gap-2.5 items-center cursor-pointer ${classNameCustom}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {children}
          <span
            className={`${
              selected ? "text-black dark:text-white" : ""
            }`}
          >
            {selected || placeholder || "Select"}
          </span>
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 ${classIcon}`}
          >
            <DropdownIcon
              className={`text-black dark:text-white transition-transform duration-200 cursor-pointer ${
                isOpen ? "rotate-180" : ""
              } `}
            />
          </div>
        </div>

        {isOpen && (
          <ul className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-auto bg-white dark:bg-gray10 border border-gray-200 dark:border-gray15 rounded-lg shadow-lg z-10">
            {options.map((opt) => (
              <li
                key={opt}
                className={`px-5 py-3 hover:bg-purple75 dark:hover:bg-purple90 cursor-pointer text-black dark:text-gray40 text-sm font-medium ${
                  selected === opt ? "bg-purple90 dark:bg-purple90" : ""
                }`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FormSelect;
