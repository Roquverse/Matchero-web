import React from 'react'

export interface AvatarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  avatar?: React.ReactNode
  children: React.ReactNode
  trailingIcon?: React.ReactNode
}

const AvatarButton = React.forwardRef<HTMLButtonElement, AvatarButtonProps>(
  ({ 
    variant = 'secondary', 
    size = 'md', 
    avatar,
    children,
    trailingIcon,
    className = '', 
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variantClasses = {
      primary: 'bg-cyan-100 text-white hover:bg-cyan-80 focus:ring-cyan-60 border border-cyan-100 hover:border-cyan-80',
      secondary: 'bg-white text-cyan-100 border border-cyan-100 hover:bg-cyan-20 focus:ring-cyan-60'
    }
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm rounded-lg',
      md: 'px-4 py-2 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-lg'
    }
    
    const avatarSizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10'
    }
    
    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    ].filter(Boolean).join(' ')

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {avatar && (
          <div className={`${avatarSizeClasses[size]} rounded-full bg-cyan-100 flex items-center justify-center text-white mr-3 flex-shrink-0`}>
            {avatar}
          </div>
        )}
        {children}
        {trailingIcon && (
          <span className="ml-2 flex-shrink-0">
            {trailingIcon}
          </span>
        )}
      </button>
    )
  }
)

AvatarButton.displayName = 'AvatarButton'

export default AvatarButton


