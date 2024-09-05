import React from 'react';

interface TextAreaProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-sm">{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />
    </div>
  );
};

export default TextArea;
