import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => (
  <div className="flex items-center justify-center h-full">
    <div className="flex flex-col items-center">
      <div className="loader border-t-blue-500 border-4 border-t-4 border-gray-200 rounded-full w-16 h-16"></div>
      {message && <p className="mt-2 text-center text-wrap">{message}</p>}
    </div>
  </div>
);

export default Loading;
