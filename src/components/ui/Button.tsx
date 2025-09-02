// src/components/Button.tsx
import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  isExternal?: boolean;
  disabled? :boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  href,
  onClick,
  className = "",
  ariaLabel,
  isExternal,
  disabled = false,
  type = "button"
}: ButtonProps) => {

  if (href) {
    if (isExternal){
      return (
        <a 
          href={href} 
          className={`button text-center ${className}`}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link 
          href={href} 
          className={`button text-center ${className}`}
          aria-label={ariaLabel}
        >
          {children}
        </Link>
      );
    }
  }

  return (
    <button 
      onClick={onClick} 
      className={`button ${className}`} 
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
