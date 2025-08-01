import type { CheckboxProps } from "../../types/Form";

function FormCheckbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center text-lg font-medium text-gray60 space-x-[10px]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden peer"
      />
      <div
        className={`
          w-7 h-7 rounded-sm
          border border-gray15
          bg-gray10
          transition-colors duration-200
          flex items-center justify-center
          ${checked ? "bg-purple60 border-purple60" : ""}
          focus-within:ring-2 focus-within:ring-purple60/30
          hover:border-purple60
        `}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="text-sm" dangerouslySetInnerHTML={{ __html: label }} />
    </label>
  );
}

export default FormCheckbox;
