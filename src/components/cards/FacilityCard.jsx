import React from 'react';
import { Card } from '../common/Card';
import { ShieldCheck, SunMedium, Smile, Sparkles, Sparkle, Utensils, Check } from 'lucide-react';

export function FacilityCard({ facility }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'SunMedium': return SunMedium;
      case 'Smile': return Smile;
      case 'Sparkles': return Sparkles;
      case 'Sparkle': return Sparkle;
      case 'Utensils': return Utensils;
      default: return ShieldCheck;
    }
  };

  const IconComponent = getIcon(facility.icon);

  return (
    <Card padding="p-0" className="overflow-hidden flex flex-col h-full group hover:border-brand-teal-300">
      {/* Visual Image Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
        <img
          src={facility.image}
          alt={facility.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
          <span className="text-xs font-display font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
            {facility.category}
          </span>
          <div className="w-8 h-8 rounded-full bg-brand-coral-500 text-white flex items-center justify-center shadow-md">
            <IconComponent className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Facility Description */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl text-brand-slate mb-2 group-hover:text-brand-teal-700 transition-colors">
          {facility.title}
        </h3>

        <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-4">
          {facility.description}
        </p>

        <div className="mt-auto pt-3 border-t border-stone-100">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {facility.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-1.5 text-xs text-brand-slate font-medium">
                <Check className="w-3.5 h-3.5 text-brand-teal-600 shrink-0" />
                <span className="truncate">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
