import React from 'react';
import { Card } from '../common/Card';
import { Star, Quote } from 'lucide-react';

export function TestimonialCard({ testimonial }) {
  return (
    <Card className="flex flex-col h-full relative group hover:border-brand-honey">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 mb-4">
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-brand-honey">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Demo Review Disclaimer Badge */}
        <span className="text-[10px] font-semibold text-brand-muted bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-full">
          {testimonial.parentNote}
        </span>
      </div>

      {/* Quote Body */}
      <div className="relative mb-6 flex-grow">
        <Quote className="w-6 h-6 text-brand-coral-200 fill-brand-coral-50 mb-2" />
        <p className="text-sm sm:text-base text-brand-charcoal/90 leading-relaxed italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Parent Information */}
      <div className="flex items-center gap-3 pt-4 border-t border-stone-100 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.parentName}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover border-2 border-brand-coral-200 shrink-0"
        />

        <div className="flex flex-col min-w-0">
          <span className="font-display font-bold text-sm text-brand-slate truncate">
            {testimonial.parentName}
          </span>
          <span className="text-xs text-brand-coral-600 font-medium">
            Parent of {testimonial.childName} ({testimonial.childClass})
          </span>
        </div>
      </div>
    </Card>
  );
}
