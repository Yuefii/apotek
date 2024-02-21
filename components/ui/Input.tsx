import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  name?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  onChange,
  placeholder,
  defaultValue,
  disabled,
  value,
}) => {
  return (
    <>
      <div className="mt-2">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          onChange={onChange}
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          disabled={disabled}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
        />
      </div>
    </>
  );
};

export default Input;
