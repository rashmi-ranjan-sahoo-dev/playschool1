import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Check, Clock, Users, Baby, Sparkles, BookOpen, GraduationCap, Home, ArrowRight } from 'lucide-react';

export function ProgramCard({ program, onSelectProgram }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Baby': return Baby;
      case 'Sparkles': return Sparkles;
      case 'BookOpen': return BookOpen;
      case 'GraduationCap': return GraduationCap;
      case 'Home': return Home;
      default: return Sparkles;
    }
  };

  const IconComponent = getIcon(program.icon);

  return (
    <Card className="flex flex-col h-full relative group overflow-hidden border-2 border-transparent hover:border-brand-coral-200">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-coral-50 text-brand-coral-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>
        <Badge variant="coral" size="sm">
          {program.age}
        </Badge>
      </div>

      {/* Program Name & Description */}
      <h3 className="font-display font-bold text-2xl text-brand-slate mb-2 group-hover:text-brand-coral-500 transition-colors">
        {program.name}
      </h3>

      <p className="text-sm text-brand-charcoal/80 mb-5 leading-relaxed line-clamp-3">
        {program.shortDesc}
      </p>

      {/* Program Metas */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted mb-5 pt-3 border-t border-stone-100">
        <span className="flex items-center gap-1 font-medium text-brand-charcoal">
          <Clock className="w-3.5 h-3.5 text-brand-coral-500" />
          {program.timing}
        </span>
        <span className="flex items-center gap-1 font-medium text-brand-charcoal">
          <Users className="w-3.5 h-3.5 text-brand-teal-600" />
          {program.ratio}
        </span>
      </div>

      {/* Key Milestones */}
      <div className="mb-6 flex-grow">
        <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-brand-slate mb-2.5">
          Curriculum Milestones:
        </h4>
        <ul className="space-y-2">
          {program.milestones.map((milestone, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-brand-charcoal/90">
              <span className="w-4 h-4 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{milestone}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button
        variant="outline"
        size="md"
        className="w-full justify-center group-hover:bg-brand-coral-500 group-hover:text-white group-hover:border-brand-coral-500 transition-all"
        onClick={() => onSelectProgram(program)}
        icon={ArrowRight}
        iconPosition="right"
      >
        Enquire for {program.name}
      </Button>
    </Card>
  );
}
