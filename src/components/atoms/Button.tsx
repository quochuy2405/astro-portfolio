import clsx from 'clsx'
import React, { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'default' | 'danger' | 'warning'
  className?: string
}

const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ mode = 'default', children, className, disabled, ...props }, ref) => {
    const classNames = clsx('outline-none rounded-lg text-sm flex items-center justify-center h-10', {
      'px-4': 'default',
      'text-black bg-yellow-500 hover:bg-yellow-400': mode === 'warning',
      'text-white bg-red-500 hover:bg-red-600 d:bg-red-600': mode === 'danger',
      'text-black bg-gray-100 hover:bg-gray-200 d:bg-gray-200': mode === 'default',
      'opacity-70': disabled,
      [className as string]: !!className
    })
    return (
      <button ref={ref} type="button" {...props} className={classNames} disabled={disabled}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'button'

export default Button
