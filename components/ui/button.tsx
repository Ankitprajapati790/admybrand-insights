import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "sm" | "md"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    const baseStyle = "rounded px-3 py-1 text-sm font-medium border"

    const variants = {
      default: "bg-black text-white border-black",
      outline: "bg-white text-black border-gray-300",
    }

    const sizes = {
      sm: "text-xs py-1 px-2",
      md: "text-sm py-2 px-3",
    }

    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
