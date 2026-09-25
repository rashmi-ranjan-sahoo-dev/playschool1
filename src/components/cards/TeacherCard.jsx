import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Award, BookOpen, Quote } from 'lucide-react';

export function TeacherCard({ teacher }) {
  return (
    <Card padding="p-0" className="overflow-hidden flex flex-col h-full group hover:border-brand-coral-300">
      {/* Educator Portrait */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
        <img
          src={teacher.image}
          alt={`Demo educator profile: ${teacher.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute top-3 right-3">
          <Badge variant="white" size="sm">
            {teacher.badge}
          </Badge>
        </div>

        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="text-[10px] uppercase font-bold tracking-wider text-brand-honey block mb-0.5">
            Demo Profile
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl leading-tight">
            {teacher.name}
          </h3>
          <p className="text-xs text-white/90 font-medium mt-0.5">
            {teacher.role}
          </p>
        </div>
      </div>

      {/* Educator Information */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex flex-col gap-1.5 text-xs text-brand-muted mb-4 pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2 font-medium text-brand-slate">
            <Award className="w-3.5 h-3.5 text-brand-coral-500 shrink-0" />
            <span>{teacher.qualification}</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-brand-teal-700">
            <BookOpen className="w-3.5 h-3.5 text-brand-teal-600 shrink-0" />
            <span>{teacher.experience}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed mb-4">
          {teacher.bio}
        </p>

        {/* Philosophy Quote */}
        <div className="mt-auto bg-brand-cream/80 border border-brand-coral-100 p-3 rounded-2xl flex items-start gap-2.5 text-xs italic text-brand-slate">
          <Quote className="w-3.5 h-3.5 text-brand-coral-500 shrink-0 mt-0.5 fill-brand-coral-100" />
          <span>"{teacher.quote}"</span>
        </div>
      </div>
    </Card>
  );
}
