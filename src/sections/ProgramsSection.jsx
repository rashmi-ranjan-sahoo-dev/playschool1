import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { programsData } from '../data/programs';
import { Check, Clock, Users, ArrowRight } from 'lucide-react';

/**
 * Programs Section with reference .theme-heading and vibrant colorful cards
 */
export function ProgramsSection({ onSelectProgram }) {
  const cardColorThemes = [
    { border: 'border-t-4 border-[#a9d63b]', badgeBg: 'bg-[#a9d63b]', titleHover: 'hover:text-[#a9d63b]', btn: 'bg-[#a9d63b]' },
    { border: 'border-t-4 border-[#00C3C9]', badgeBg: 'bg-[#00C3C9]', titleHover: 'hover:text-[#00C3C9]', btn: 'bg-[#00C3C9]' },
    { border: 'border-t-4 border-[#ffba06]', badgeBg: 'bg-[#ffba06]', titleHover: 'hover:text-[#ffba06]', btn: 'bg-[#ffba06]' },
    { border: 'border-t-4 border-[#f57f25]', badgeBg: 'bg-[#f57f25]', titleHover: 'hover:text-[#f57f25]', btn: 'bg-[#f57f25]' },
    { border: 'border-t-4 border-[#907ee2]', badgeBg: 'bg-[#907ee2]', titleHover: 'hover:text-[#907ee2]', btn: 'bg-[#907ee2]' },
  ];

  return (
    <section id="programs" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Our Programs"
          subtitle="Carefully tiered early childhood curricula tailored for the distinct developmental milestones of each age cohort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((prog, idx) => {
            const theme = cardColorThemes[idx % cardColorThemes.length];
            return (
              <div
                key={prog.id}
                className={`bg-white rounded-none shadow-[0_5px_15px_rgba(0,0,0,0.08)] p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 ${theme.border}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold text-white ${theme.badgeBg} px-3 py-1 rounded-full uppercase tracking-wider`}>
                    {prog.age}
                  </span>
                  <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {prog.timing}
                  </span>
                </div>

                <h3 className={`font-display font-bold text-2xl text-black mb-3 ${theme.titleHover} transition-colors`}>
                  {prog.name}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {prog.shortDesc}
                </p>

                <div className="mb-6 flex-grow">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                    Curriculum Highlights:
                  </h5>
                  <ul className="space-y-2">
                    {prog.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-[#a9d63b] shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectProgram(prog)}
                  className={`w-full font-script text-lg text-white ${theme.btn} hover:opacity-90 py-2.5 rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2`}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
