'use client';

const TryItButton = ({ onClick, className = '' }) => {
  return (
    <button
      className={`bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors ${className}`}
      onClick={onClick}
    >
      Try it Yourself »
    </button>
  );
};

export default TryItButton; 