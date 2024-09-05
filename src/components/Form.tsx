import React, { FormEvent, ReactNode } from 'react';

interface FormProps {
  onSubmit: (e: FormEvent) => void;
  children: ReactNode;
  className?: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, children, className = '' }) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
      {children}
    </form>
  );
};

export default Form;
