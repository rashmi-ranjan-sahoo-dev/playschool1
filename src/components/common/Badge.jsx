import React from 'react';

/**
 * Reusable Badge component for age tiers, status notices, and feature tags.
 */
export function Badge({
  children,
  variant = 'coral',
  size = 'md',
  icon: Icon,
  className = '',
}) {
  const variantStyles = {
    coral: 'bg-brand-coral-50 text-brand-coral-600 border-brand-coral-200',
    teal: 'bg-brand-teal-50 text-brand-teal-700 border-brand-teal-200',
    honey: 'bg-brand-honey-50 text-brand-honey-600 border-brand-honey-200',
    azure: 'bg-brand-azure-50 text-brand-azure-600 border-brand-azure-200',
    sprout: 'bg-brand-sprout-50 text-brand-sprout-600 border-brand-sprout-200',
    neutral: 'bg-stone-100 text-brand-charcoal border-stone-200',
    white: 'bg-white/90 text-brand-slate border-white/60 shadow-sm',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs sm:text-sm px-3.5 py-1 gap-1.5',
    lg: 'text-sm sm:text-base px-4 py-1.5 gap-2',
  };

  return (
    <span
      className={`inline-flex items-center font-display font-medium rounded-full border ${
        variantStyles[variant] || variantStyles.coral
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
