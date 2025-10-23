import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  value: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

interface PrelineDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
}

const PrelineDropdown: React.FC<PrelineDropdownProps> = ({
  trigger,
  items,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown-preline ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-x-2 text-base-regular text-gray-800 hover:text-green-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <svg
          className={`flex-shrink-0 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-preline-menu">
          {items.map((item, index) => (
            <button
              key={index}
              type="button"
              className="dropdown-preline-item flex items-center gap-x-2"
              onClick={() => {
                item.onClick?.();
                setIsOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrelineDropdown;
