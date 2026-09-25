import React, { useRef } from 'react';
import { schoolConfig } from '../config/schoolConfig';
import { Clock, Mail, Bus, Phone } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * Quick Info / Services Bar:
 * - Clean, elegant layout matching reference screenshot
 * - 4 columns with colorful icons, bold titles, and subtitles
 * - Safe GSAP ScrollTrigger entrance animation with clearProps: 'all'
 * - 100% visible and responsive across all devices
 */
export function StatsSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    try {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 20, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 95%',
              once: true,
            },
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.06,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      }
    } catch {
      // Fallback
    }
  }, [], sectionRef);

  const quickItems = [
    {
      id: 'hours',
      icon: Clock,
      color: 'text-[#e868a7]',
      hoverBg: 'group-hover:bg-[#e868a7]/10',
      title: 'Opening hours',
      desc: schoolConfig.academic.timings.preschool,
    },
    {
      id: 'email',
      icon: Mail,
      color: 'text-[#f57f25]',
      hoverBg: 'group-hover:bg-[#f57f25]/10',
      title: 'Our Email',
      desc: schoolConfig.contact.emailGeneral,
      href: `mailto:${schoolConfig.contact.emailGeneral}`,
    },
    {
      id: 'bus',
      icon: Bus,
      color: 'text-[#8bc34a]',
      hoverBg: 'group-hover:bg-[#8bc34a]/10',
      title: 'Bus Timing',
      desc: '8.00 am (Safe Kid Van)',
    },
    {
      id: 'phone',
      icon: Phone,
      color: 'text-[#907ee2]',
      hoverBg: 'group-hover:bg-[#907ee2]/10',
      title: 'Phone Number',
      desc: schoolConfig.contact.phoneDisplay,
      href: schoolConfig.contact.phoneHref || `tel:${schoolConfig.contact.phone || '+919848022334'}`,
    },
  ];

  return (
    <section ref={sectionRef} className="py-4 sm:py-5 bg-white border-b border-stone-200/90 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {quickItems.map((item) => {
            const Icon = item.icon;
            const CardWrapper = item.href ? 'a' : 'div';
            return (
              <CardWrapper
                key={item.id}
                href={item.href}
                className="flex items-center gap-4 group transition-transform duration-300 hover:-translate-y-1 cursor-pointer select-none"
              >
                {/* Colorful Icon with gentle hover rotation and scale */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${item.color} ${item.hoverBg}`}
                >
                  <Icon className="w-9 h-9 stroke-[2]" />
                </div>

                {/* Text Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="font-display font-bold text-base sm:text-lg text-black leading-snug group-hover:text-[#f57f25] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 font-medium truncate mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
