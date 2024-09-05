import React from 'react';

interface InputFieldProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-sm">{label}</label>}
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
