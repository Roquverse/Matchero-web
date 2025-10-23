import React from 'react';

interface PrelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const PrelineModal: React.FC<PrelineModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-preline">
      <div className="modal-preline-backdrop" onClick={onClose}></div>
      <div className="modal-preline-content">
        <div className="modal-preline-header">
          <h3 className="modal-preline-title">{title}</h3>
          <button
            type="button"
            className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 6-12 12"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <div className="modal-preline-body">
          {children}
        </div>
        {footer && (
          <div className="modal-preline-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrelineModal;
