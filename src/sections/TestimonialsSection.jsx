import React, { useRef } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { testimonialsData } from '../data/testimonials';
import { Star, MapPin, CheckCircle, Heart, Quote } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * Parents Feedback Section:
 * - Reduced top padding: pt-6 sm:pt-8 pb-12 sm:pb-16
 * - Popups completely removed
 * - Clean, authentic cards with star ratings & verified Vizag parents
 * - GSAP ScrollTrigger animation for entrance reveal
 * - Fully responsive for all devices including mobile phones
 */
export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  // GSAP ScrollTrigger reveal animation
  useGsap((gsap, ScrollTrigger) => {
    try {
      if (cardsContainerRef.current) {
        gsap.fromTo(
          cardsContainerRef.current.children,
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

  // Authentic local preschool photography for cards
  const cardImages = [
    "/assets/img/hero/hero-slide-3.jpg",
    "/assets/img/gallery/gallery-celebration.jpg",
    "/assets/img/gallery/gallery-snack.jpg",
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered Theme Heading */}
        <SectionHeading
          title="Parents Feedback"
          subtitle="Heartwarming reviews and genuine experiences from families whose little ones are blossoming with joy and confidence at Little Veda in Visakhapatnam."
        />

        {/* 3 Feedback Cards Grid (Clean, Direct, Zero Popups) */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonialsData.slice(0, 3).map((item, index) => {
            const imgUrl = cardImages[index % cardImages.length];

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-stone-200/80 overflow-hidden flex flex-col group"
              >
                {/* Visual Header with Gradient Backdrop */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-900">
                  <img
                    src={imgUrl}
                    alt={item.parentName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

                  {/* Top Verified Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-display font-extrabold uppercase tracking-wider text-emerald-600 shadow-xs flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Parent</span>
                  </div>

                  {/* Star Rating on Photo */}
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1 text-[#ffba06]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current drop-shadow-xs" />
                    ))}
                    <span className="text-[11px] font-bold text-white/90 ml-1.5">
                      5.0
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow text-left">
                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-4 flex-grow">
                    "{item.quote}"
                  </p>

                  {/* Parent & Child Info */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between flex-wrap gap-2 mt-auto">
                    <div>
                      <h4 className="font-display font-black text-sm sm:text-base text-stone-900 leading-snug">
                        {item.parentName}
                      </h4>
                      <p className="text-xs text-stone-500 font-medium">
                        Parents of {item.childName} ({item.childClass})
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#f57f25] bg-orange-50 px-2.5 py-1 rounded-full font-bold">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate max-w-[130px]">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
