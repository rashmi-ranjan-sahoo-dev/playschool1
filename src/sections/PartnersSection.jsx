import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { partnersData } from '../data/partners';
import { GraduationCap, Compass, Activity, Leaf, BookOpen } from 'lucide-react';

/**
 * Educational Partners & Affiliations Section:
 * - Reduced top padding: pt-5 sm:pt-7 pb-10 sm:pb-14
 * - Clean layout with child icon divider
 * - Elevated partner badge cards with smooth hover physics & colored accents
 */
export function PartnersSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Compass': return Compass;
      case 'Activity': return Activity;
      case 'Leaf': return Leaf;
      case 'BookOpen': return BookOpen;
      default: return GraduationCap;
    }
  };

  const partnerAccents = [
    'hover:border-[#00C3C9] group-hover:text-[#00C3C9] group-hover:bg-[#00C3C9]/5',
    'hover:border-[#8bc34a] group-hover:text-[#8bc34a] group-hover:bg-[#8bc34a]/5',
    'hover:border-[#f57f25] group-hover:text-[#f57f25] group-hover:bg-[#f57f25]/5',
    'hover:border-[#907ee2] group-hover:text-[#907ee2] group-hover:bg-[#907ee2]/5',
    'hover:border-[#e868a7] group-hover:text-[#e868a7] group-hover:bg-[#e868a7]/5',
  ];

  return (
    <section className="pt-5 sm:pt-7 pb-10 sm:pb-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered Theme Heading */}
        <SectionHeading
          title="Our Educational Partners"
          subtitle="National early childhood councils, Montessori associations, and pediatric healthcare networks supporting our standards."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {partnersData.map((partner, idx) => {
            const Icon = getIcon(partner.icon);
            const accent = partnerAccents[idx % partnerAccents.length];
            return (
              <div
                key={partner.id}
                className={`border border-stone-200/90 p-5 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group bg-white shadow-xs select-none ${accent}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-stone-50 group-hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 mb-2.5 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.8] text-stone-500 group-hover:text-current transition-colors" />
                </div>
                <h4 className="font-display font-black text-xs sm:text-sm uppercase text-stone-800 tracking-wider group-hover:text-stone-900 transition-colors leading-tight">
                  {partner.name}
                </h4>
                <span className="text-[10px] text-stone-400 font-bold uppercase mt-1 tracking-wider">
                  Accredited
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
