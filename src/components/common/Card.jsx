import React from 'react';

/**
 * Reusable elevated Card container with modern rounded geometry and soft preschool elevation.
 */
export function Card({
  children,
  className = '',
  hoverEffect = true,
  border = true,
  padding = 'p-6 sm:p-8',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`bg-white rounded-3xl ${padding} ${
        border ? 'border border-brand-coral-100/80' : ''
      } shadow-soft-card ${
        hoverEffect
          ? 'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-hover hover:border-brand-coral-300'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
