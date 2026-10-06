import React from 'react';
import PremiumGlassButton from './PremiumGlassButton';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/**
 * EyeFollowButton Component
 * Backward-compatible wrapper that renders the refined architectural button.
 */
export default function EyeFollowButton({
  children,
  onClick,
  type = 'button',
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = 'none', // 'up-right' | 'right' | 'none' | ReactNode
  className = '',
  baseColor = '#000000',
  glassColor = '#D9D9D9',
}) {
  const renderIcon = () => {
    if (!icon || icon === 'none') return null;
    if (React.isValidElement(icon)) return icon;
    if (icon === 'up-right') {
      return <ArrowUpRight className="w-4 h-4 text-brand-red ml-1 shrink-0" />;
    }
    if (icon === 'right') {
      return <ArrowRight className="w-4 h-4 text-brand-red ml-1 shrink-0" />;
    }
    return null;
  };

  return (
    <PremiumGlassButton
      onClick={onClick}
      type={type}
      size={size}
      className={className}
      icon={renderIcon()}
      baseColor={baseColor}
      glassColor={glassColor}
      showEye={true}
    >
      {children}
    </PremiumGlassButton>
  );
}
