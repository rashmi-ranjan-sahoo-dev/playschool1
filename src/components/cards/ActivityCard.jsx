import React from 'react';
import { Card } from '../common/Card';
import { Palette, BookOpenText, Music, Calculator, Leaf, HeartHandshake } from 'lucide-react';

export function ActivityCard({ activity }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Palette': return Palette;
      case 'BookOpenText': return BookOpenText;
      case 'Music': return Music;
      case 'Calculator': return Calculator;
      case 'Leaf': return Leaf;
      case 'HeartHandshake': return HeartHandshake;
      default: return Palette;
    }
  };

  const IconComponent = getIcon(activity.icon);

  return (
    <Card className="flex flex-col h-full group hover:border-brand-coral-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-coral-50 text-brand-coral-500 group-hover:bg-brand-coral-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-xs font-display font-semibold text-brand-coral-600 bg-brand-coral-50/70 border border-brand-coral-200/60 px-3 py-1 rounded-full">
          {activity.badge}
        </span>
      </div>

      <h3 className="font-display font-bold text-xl text-brand-slate mb-1.5 group-hover:text-brand-coral-500 transition-colors">
        {activity.title}
      </h3>

      <span className="text-xs font-display font-medium text-brand-teal-600 mb-3 block">
        {activity.domain}
      </span>

      <p className="text-sm text-brand-charcoal/80 leading-relaxed">
        {activity.description}
      </p>
    </Card>
  );
}
