import React from 'react'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon: React.ReactNode
  'aria-label': string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    icon,
    className = '', 
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-full'
    
    const variantClasses = {
      primary: 'bg-cyan-100 text-white hover:bg-cyan-80 focus:ring-cyan-60',
      secondary: 'bg-cyan-60 text-white hover:bg-cyan-80 focus:ring-cyan-60',
      outline: 'bg-white text-cyan-100 border border-cyan-100 hover:bg-cyan-20 focus:ring-cyan-60',
      ghost: 'text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:ring-gray-300'
    }
    
    const sizeClasses = {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3'
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
        {icon}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'

export default IconButton

