import React from 'react';

/**
 * Reusable Button component supporting various brand themes, sizes, and icon placements.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  href,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 rounded-full gap-2 shadow-sm',
    lg: 'text-base sm:text-lg px-7 py-3.5 rounded-full gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary:
      'bg-brand-coral-500 hover:bg-brand-coral-600 text-white shadow-brand-coral-500/25 hover:shadow-brand-coral-500/40 hover:-translate-y-0.5 focus-visible:ring-brand-coral-300',
    secondary:
      'bg-brand-teal-600 hover:bg-brand-teal-700 text-white shadow-brand-teal-600/25 hover:shadow-brand-teal-600/40 hover:-translate-y-0.5 focus-visible:ring-brand-teal-300',
    honey:
      'bg-brand-honey text-brand-slate hover:bg-brand-honey-600 shadow-brand-honey/25 hover:shadow-brand-honey/40 hover:-translate-y-0.5 focus-visible:ring-brand-honey-200',
    outline:
      'bg-white/80 backdrop-blur-sm border-2 border-brand-coral-200 hover:border-brand-coral-500 text-brand-coral-600 hover:bg-brand-coral-50 focus-visible:ring-brand-coral-200',
    outlineTeal:
      'bg-white/80 backdrop-blur-sm border-2 border-brand-teal-200 hover:border-brand-teal-600 text-brand-teal-700 hover:bg-brand-teal-50 focus-visible:ring-brand-teal-200',
    whatsapp:
      'bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-[#25D366]/40',
    ghost:
      'bg-transparent hover:bg-brand-coral-50 text-brand-coral-600 hover:text-brand-coral-700 focus-visible:ring-brand-coral-200',
    white:
      'bg-white hover:bg-brand-cream text-brand-slate shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-white/50',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const iconElement = Icon && (
    <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} shrink-0`} />
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        target={isExternal && href.startsWith('http') ? '_blank' : undefined}
        rel={isExternal && href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {Icon && iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && iconElement}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {Icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && iconElement}
    </button>
  );
}
