// src/components/Tooltip.js
export default function Tooltip({ children, text }) {
    return (
      <div className="relative inline-block">
        {children}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </div>
      </div>
    );
  }