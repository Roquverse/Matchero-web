import React from 'react';

type AlertType = 'success' | 'warning' | 'error' | 'info';

interface PrelineAlertProps {
  type: AlertType;
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

const PrelineAlert: React.FC<PrelineAlertProps> = ({
  type,
  title,
  message,
  onClose,
  className = ''
}) => {
  const getAlertClasses = () => {
    const baseClasses = 'alert-preline';
    const typeClasses = {
      success: 'alert-preline-success',
      warning: 'alert-preline-warning',
      error: 'alert-preline-error',
      info: 'alert-preline-info'
    };
    return `${baseClasses} ${typeClasses[type]} ${className}`;
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4"/>
            <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
          </svg>
        );
      case 'warning':
        return (
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="M12 17h.01"/>
          </svg>
        );
      case 'error':
        return (
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 6-12 12"/>
            <path d="m6 6 12 12"/>
          </svg>
        );
      case 'info':
        return (
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={getAlertClasses()}>
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      <div className="flex-1">
        {title && (
          <h3 className="text-base-semibold mb-1">{title}</h3>
        )}
        <p className="text-base-regular">{message}</p>
      </div>
      {onClose && (
        <button
          type="button"
          className="flex-shrink-0 ml-3 p-1.5 rounded-lg hover:bg-black/10 transition-colors"
          onClick={onClose}
        >
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 6-12 12"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default PrelineAlert;
