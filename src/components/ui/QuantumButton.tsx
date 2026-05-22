import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
  showIcon?: boolean;
}

export const QuantumButton = ({ 
  variant = 'primary', 
  children, 
  showIcon = false,
  className,
  ...props 
}: ButtonProps) => {
  const baseStyles = "font-space font-semibold transition-all duration-300 flex items-center gap-2 rounded-soft";
  
  const variants = {
    primary: "quantum-button-primary",
    ghost: "quantum-button-ghost"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
      {showIcon && <ArrowUpRight size={18} />}
    </button>
  );
};
