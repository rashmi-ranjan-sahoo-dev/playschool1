import React from 'react';
import { Baby } from 'lucide-react';

/**
 * SectionHeading designed exactly like the reference template's .theme-heading
 * Features:
 * - Lobster cursive heading (e.g. 'Our Facilities', 'Our Gallery', 'Why Choose Us')
 * - Centered child icon with horizontal divider lines on both sides
 * - Subtitle paragraph below
 */
export function SectionHeading({
  title,
  subtitle,
  theme = 'dark', // 'dark' = for white/light backgrounds, 'light' = for purple/dark backgrounds
  className = '',
}) {
  const isLight = theme === 'light';

  return (
    <div className={`text-center max-w-2xl mx-auto mb-6 sm:mb-8 ${className}`}>
      <h3
        className={`font-script text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide capitalize mb-2 ${
          isLight ? 'text-white' : 'text-[#f57f25]'
        }`}
      >
        {title}
      </h3>

      {/* Signature Child Icon with Divider Lines */}
      <div className="flex items-center justify-center gap-3 my-3">
        <span
          className={`w-14 sm:w-20 h-[1.5px] ${
            isLight ? 'bg-white/70' : 'bg-stone-400'
          }`}
        />
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isLight
              ? 'text-white bg-white/20'
              : 'text-[#f57f25] bg-[#f57f25]/10'
          }`}
        >
          <Baby className="w-5 h-5 fill-current" />
        </div>
        <span
          className={`w-14 sm:w-20 h-[1.5px] ${
            isLight ? 'bg-white/70' : 'bg-stone-400'
          }`}
        />
      </div>

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed max-w-lg mx-auto ${
            isLight ? 'text-white/90' : 'text-stone-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
