import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  trailingDivider?: React.ReactNode
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    block = false,
    leadingIcon,
    trailingIcon,
    trailingDivider,
    children, 
    className = '', 
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variantClasses = {
      primary: 'bg-cyan-100 text-white hover:bg-cyan-80 focus:ring-cyan-60 border border-cyan-100 hover:border-cyan-80',
      secondary: 'bg-white text-cyan-100 border border-cyan-100 hover:bg-cyan-20 focus:ring-cyan-60',
      text: 'text-cyan-100 hover:bg-cyan-20 focus:ring-cyan-60 border border-transparent'
    }
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-lg'
    }
    
    const blockClasses = block ? 'w-full' : ''
    
    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      blockClasses,
      className
    ].filter(Boolean).join(' ')

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {leadingIcon && (
          <span className="mr-2 flex-shrink-0">
            {leadingIcon}
          </span>
        )}
        {children}
        {trailingIcon && (
          <span className="ml-2 flex-shrink-0">
            {trailingIcon}
          </span>
        )}
        {trailingDivider && (
          <span className="ml-2 mr-2 flex-shrink-0">
            {trailingDivider}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

