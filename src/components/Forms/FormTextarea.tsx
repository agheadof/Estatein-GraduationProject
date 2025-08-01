import type {TextareaProps} from '../../types/Form'
function FormTextarea({ label, name, value, onChange }: TextareaProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-4 text-xl lg-custom:text-base/[1.5] text-white font-semibold"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-lg bg-gray10 text-gray40 text-lg/[20px]  lg-custom:text-sm font-medium border-1 border-gray15 px-5 py-6"
      />
    </div>
  );
}

export default FormTextarea;
