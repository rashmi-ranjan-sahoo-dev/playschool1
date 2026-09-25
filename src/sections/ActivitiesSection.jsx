import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { activitiesData } from '../data/activities';
import { Palette, BookOpenText, Music, Calculator, Leaf, HeartHandshake } from 'lucide-react';

/**
 * Activities Section matching Baby House reference:
 * - Centered theme-heading with child icon divider
 * - 6 colorful activity cards with icons, borders, and clean preschool descriptions
 */
export function ActivitiesSection() {
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

  const colorThemes = [
    { text: 'text-[#e868a7]', bg: 'bg-[#e868a7]/10', border: 'hover:border-[#e868a7]' },
    { text: 'text-[#00C3C9]', bg: 'bg-[#00C3C9]/10', border: 'hover:border-[#00C3C9]' },
    { text: 'text-[#ffba06]', bg: 'bg-[#ffba06]/10', border: 'hover:border-[#ffba06]' },
    { text: 'text-[#f57f25]', bg: 'bg-[#f57f25]/10', border: 'hover:border-[#f57f25]' },
    { text: 'text-[#907ee2]', bg: 'bg-[#907ee2]/10', border: 'hover:border-[#907ee2]' },
    { text: 'text-[#a9d63b]', bg: 'bg-[#a9d63b]/10', border: 'hover:border-[#a9d63b]' },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered Theme Heading */}
        <SectionHeading
          title="Learning Activities"
          subtitle="Holistic learning spheres that stimulate multiple intelligences through play, experimentation, and joyful movement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((act, idx) => {
            const Icon = getIcon(act.icon);
            const style = colorThemes[idx % colorThemes.length];
            return (
              <div
                key={act.id}
                className={`bg-white border-2 border-stone-200/80 p-8 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${style.border} group`}
              >
                <div className={`w-14 h-14 rounded-full ${style.bg} ${style.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h4 className="font-display font-bold text-xl text-black mb-2 group-hover:text-[#f57f25] transition-colors">
                  {act.title}
                </h4>

                <span className={`text-xs font-bold uppercase tracking-wider ${style.text} block mb-3`}>
                  {act.domain}
                </span>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {act.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
