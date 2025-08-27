"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-gray-900 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400",
  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
  link: "bg-transparent underline-offset-4 hover:underline text-gray-900",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 flex items-center justify-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
