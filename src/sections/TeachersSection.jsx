import React, { useRef } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { teachersData } from '../data/teachers';
import { Facebook, Twitter, Linkedin, Award } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * Our Loving Teachers Section:
 * - Caribbean Blue theme background (#00C3C9) matching Facilities layout
 * - Top & bottom white ribbon curve dividers
 * - Centered theme-heading with theme="light"
 * - Clean white cards with real Indian preschool educators
 * - Safe GSAP ScrollTrigger animation
 */
export function TeachersSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    try {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 25, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              once: true,
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      }
    } catch {
      // Fallback
    }
  }, [], sectionRef);

  const cardThemes = [
    {
      roleColor: 'text-[#00C3C9]',
      borderHover: 'hover:border-[#00C3C9]/40',
      badgeBg: 'bg-[#00C3C9]',
      circleHover: 'hover:bg-[#00C3C9] hover:border-[#00C3C9]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(0,195,201,0.25)]',
    },
    {
      roleColor: 'text-[#8bc34a]',
      borderHover: 'hover:border-[#8bc34a]/40',
      badgeBg: 'bg-[#8bc34a]',
      circleHover: 'hover:bg-[#8bc34a] hover:border-[#8bc34a]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(139,195,74,0.25)]',
    },
    {
      roleColor: 'text-[#f57f25]',
      borderHover: 'hover:border-[#f57f25]/40',
      badgeBg: 'bg-[#f57f25]',
      circleHover: 'hover:bg-[#f57f25] hover:border-[#f57f25]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(245,127,37,0.25)]',
    },
    {
      roleColor: 'text-[#907ee2]',
      borderHover: 'hover:border-[#907ee2]/40',
      badgeBg: 'bg-[#907ee2]',
      circleHover: 'hover:bg-[#907ee2] hover:border-[#907ee2]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(144,126,226,0.25)]',
    },
  ];

  return (
    <section ref={sectionRef} id="teachers" className="bg-[#00C3C9] text-white relative overflow-hidden select-none">
      {/* Top Ribbon Curve Divider matching Facilities Section */}
      <div className="w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 50"
          className="w-full h-7 sm:h-10 lg:h-14 fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q720,50 1440,0 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-8 pb-8 sm:pb-12 relative z-10">
        {/* Centered White Theme Heading */}
        <SectionHeading
          title="Our Loving Teachers"
          subtitle="Meet our certified, compassionate early childhood educators dedicated to nurturing your child's emotional warmth, curiosity, and daily joy."
          theme="light"
        />

        {/* 4 Clean Educator Cards on White with 3D drop shadow */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {teachersData.map((teacher, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div
                key={teacher.id}
                className={`bg-white text-stone-900 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] ${theme.shadow} overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-white flex flex-col group select-none`}
              >
                {/* Photo Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700"
                  />

                  {/* Corner Badge */}
                  <div
                    className={`absolute top-3.5 right-3.5 ${theme.badgeBg} text-white font-display font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-xs`}
                  >
                    {teacher.badge}
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-stone-800 shadow-xs flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#f57f25]" />
                    <span>{teacher.experience}</span>
                  </div>
                </div>

                {/* Clean Content Details */}
                <div className="p-5 text-center flex flex-col items-center">
                  <h4 className="font-display font-black text-lg sm:text-xl text-stone-900 group-hover:text-[#f57f25] transition-colors leading-snug">
                    {teacher.name}
                  </h4>

                  <p className={`font-display font-extrabold text-xs uppercase tracking-wider ${theme.roleColor} mt-1 mb-4`}>
                    {teacher.role}
                  </p>

                  {/* Social Connect Icons */}
                  <div className="flex items-center justify-center gap-2 pt-3 border-t border-stone-100 w-full">
                    <a
                      href="#"
                      className={`w-8 h-8 rounded-full border border-stone-200 text-stone-500 flex items-center justify-center transition-all duration-300 hover:text-white ${theme.circleHover}`}
                      aria-label={`${teacher.name} Facebook`}
                    >
                      <Facebook className="w-3.5 h-3.5 fill-current" />
                    </a>
                    <a
                      href="#"
                      className={`w-8 h-8 rounded-full border border-stone-200 text-stone-500 flex items-center justify-center transition-all duration-300 hover:text-white ${theme.circleHover}`}
                      aria-label={`${teacher.name} Twitter`}
                    >
                      <Twitter className="w-3.5 h-3.5 fill-current" />
                    </a>
                    <a
                      href="#"
                      className={`w-8 h-8 rounded-full border border-stone-200 text-stone-500 flex items-center justify-center transition-all duration-300 hover:text-white ${theme.circleHover}`}
                      aria-label={`${teacher.name} LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Ribbon Curve Divider matching Facilities Section */}
      <div className="w-full overflow-hidden leading-none pointer-events-none mt-2">
        <svg
          viewBox="0 0 1440 50"
          className="w-full h-7 sm:h-10 lg:h-14 fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,50 Q720,0 1440,50 L1440,50 L0,50 Z" />
        </svg>
      </div>
    </section>
  );
}

export default TeachersSection;
