import type { ReactNode, ChangeEvent } from "react";

type PreferredContactMethodProps = {
  icon: ReactNode;
  type: "tel" | "email";
  name: "phone" | "email";
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
};

function PreferredContactMethod({
  icon,
  type,
  name,
  value,
  placeholder,
  onChange,
  onCheckboxChange,
  isChecked,
}: PreferredContactMethodProps) {
  return (
    <div className="relative w-full lg-custom:w-1/2 group">
      {icon}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border-1 border-purple70 bg-purple95 px-5 py-4 2xl:py-5.5 2xl:pl-15 pl-11.5 font-medium text-purple65 2xl:text-lg text-sm/[20px] dark:border-gray15 dark:bg-gray10 dark:text-gray40"
        disabled={!isChecked}
      />
      <input
        type="checkbox"
        name="preferredContact"
        value={name}
        checked={isChecked}
        onChange={onCheckboxChange}
        className="absolute 2xl:right-6 right-5 top-1/2 w-2.5 h-2.5 2xl:h-4 2xl:w-4 -translate-y-1/2 appearance-none rounded-full border-1 border-purple60 bg-purple95 dark:bg-gray10 checked:bg-purple60 cursor-pointer"
      />
    </div>
  );
}

export default PreferredContactMethod;
