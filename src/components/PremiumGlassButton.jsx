import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function PremiumGlassButton({
  children = 'Click me',
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'dark' | 'outline'
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = null,
  showArrow = true,
  disabled = false,
}) {
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs tracking-wide',
    md: 'px-7 py-3.5 text-xs sm:text-sm tracking-wide',
    lg: 'px-9 py-4 text-sm sm:text-base tracking-wide',
  };

  const variantStyles = {
    primary: 'bg-[#171717] text-white hover:bg-[#C41E1E] shadow-sm',
    secondary: 'bg-white text-black/85 hover:bg-[#F5F3F0] border border-[#E8E5E0] shadow-sm',
    dark: 'bg-[#141517] text-white hover:bg-[#C41E1E] border border-white/15',
    outline: 'bg-transparent text-black/85 hover:text-[#C41E1E] border border-[#D8D4CC] hover:border-[#C41E1E] hover:bg-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group select-none inline-flex items-center justify-center gap-3 rounded-full font-sans font-medium transition-all duration-300 focus:outline-none cursor-pointer ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
        {children}
      </span>

      {icon ? (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      ) : showArrow ? (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 text-inherit" />
      ) : null}
    </button>
  );
}
