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
  
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col group w-full relative" ref={ref}>
      <label
        htmlFor={name}
        className="2xl:mb-4 lg-custom:mb-3.5 mb-2.5 2xl:text-xl text-base/[1.5] text-black dark:text-white font-semibold"
      >
        {label}
      </label>

      <div className="relative">
        <div
          id={name}
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer appearance-none w-full rounded-lg dark:bg-gray10  bg-white97 dark:text-gray40 text-gray60 2xl:text-lg/[20px] text-sm/[20px] whitespace-nowrap font-medium border-1 dark:border-gray15 border-white90 px-5 py-4 2xl:py-5.5 flex items-center justify-between"
        >
          <span className={value ? "" : "text-gray-400"}>
            {value || placeholder || "Select"}
          </span>
          <DropdownIcon
            className={`ml-2 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            } text-black dark:text-white`}
          />
        </div>

        {open && (
          <ul className="absolute z-10 mt-2 w-full rounded-lg border border-white90 dark:border-gray15 bg-white97 dark:bg-gray10 shadow-lg max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange({
                    target: { name, value: opt },
                  } as React.ChangeEvent<HTMLSelectElement>);
                  setOpen(false);
                }}
                className={`px-5 py-3 text-sm cursor-pointer hover:bg-purple90 dark:hover:bg-gray20 ${
                  value === opt
                    ? "bg-purple10 dark:bg-gray20 font-semibold text-white90"
                    : "text-black dark:text-white"
                }`}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormSelect;
