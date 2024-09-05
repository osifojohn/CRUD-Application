import React from 'react';

interface CardProps {
  title: string;
  body: string;
  isLoading: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  body,
  onEdit,
  onDelete,
  isLoading,
  className = '',
}) => (
  <div className={`bg-white p-4 rounded shadow ${className}`}>
    <h2 className="text-[15px]  md:text-lg font-bold mb-2">{title}</h2>
    <p className="text-sm md:text-base  text-gray-700 mb-4">{body}</p>
    <div className="flex space-x-2">
      {onEdit && (
        <button
          onClick={onEdit}
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
        >
          Edit
        </button>
      )}
      {onDelete && (
        <button
          onClick={onDelete}
          className={`bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
      )}
    </div>
  </div>
);

export default Card;
