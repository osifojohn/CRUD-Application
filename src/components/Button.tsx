import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded text-white ${className} ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
