import React, { useState, useEffect, useRef } from 'react';
import { Bus, Trophy, Sparkles, Utensils, Music, Languages, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * About Section matching Baby House reference:
 * - Part 1: The 6 Signature Solid-Colored Feature Boxes
 * - Part 2: Split 50/50:
 *   - Left: Auto-Sliding Photo Carousel with butter-smooth cross-fade & floating badge
 *   - Right: "Why Choose Us" narrative, interactive feature checklist & animated CTA
 */
export function AboutSection({ onEnquireClick }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRef = useRef(null);
  const colorBoxesRef = useRef(null);
  const splitSectionRef = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    try {
      if (colorBoxesRef.current) {
        gsap.fromTo(
          colorBoxesRef.current.children,
          { y: 25, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: colorBoxesRef.current,
              start: 'top 90%',
              once: true,
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      }

      if (splitSectionRef.current) {
        gsap.fromTo(
          splitSectionRef.current.children,
          { y: 25, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: splitSectionRef.current,
              start: 'top 90%',
              once: true,
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      }
    } catch {
      // Fallback
    }
  }, [], sectionRef);

  const sliderImages = [
    "/assets/img/hero/hero-slide-1.jpg",
    "/assets/img/hero/hero-slide-2.jpg",
    "/assets/img/hero/hero-slide-3.jpg",
    "https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80",
  ];

  // Auto-slide every 4 seconds with smooth cross-fade
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeImageIndex]);

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const colorBoxes = [
    {
      id: 'bus',
      title: 'BUS SERVICE',
      desc: 'Safe GPS-monitored vans with female attendants ensuring peaceful, secure commutes across Visakhapatnam.',
      icon: Bus,
      bg: 'bg-[#8bc34a]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(139,195,74,0.35)]',
    },
    {
      id: 'sports',
      title: 'MANY SPORTS',
      desc: 'Gross-motor development with rubberized turf play, animal yoga, splash decks, and obstacle balance beams.',
      icon: Trophy,
      bg: 'bg-[#00C3C9]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(0,195,201,0.35)]',
    },
    {
      id: 'interactive',
      title: 'INTERACTIVE ELEMENTS',
      desc: 'Sensory discovery tables, Montessori wooden apparatus, and hands-on clay crafts sparking early curiosity.',
      icon: Sparkles,
      bg: 'bg-[#ffba06]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(255,186,6,0.35)]',
    },
    {
      id: 'food',
      title: 'CUSTOM FOOD',
      desc: 'Freshly prepared warm, vegetarian nutritious meals and fruit platters approved by pediatric dietitians.',
      icon: Utensils,
      bg: 'bg-[#f57f25]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(245,127,37,0.35)]',
    },
    {
      id: 'music',
      title: 'MUSIC LESSON',
      desc: 'Rhythm, percussion instruments, Indian classical notes, and lively action rhymes building auditory confidence.',
      icon: Music,
      bg: 'bg-[#907ee2]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(144,126,226,0.35)]',
    },
    {
      id: 'languages',
      title: 'LANGUAGES',
      desc: 'Bilingual phonics, expressive Panchatantra puppet storytelling, and joyful vocabulary immersion in English & Telugu.',
      icon: Languages,
      bg: 'bg-[#e868a7]',
      shadow: 'hover:shadow-[0_16px_36px_rgba(232,104,167,0.35)]',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="pt-3 sm:pt-4 pb-12 sm:pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* PART 1: The 6 Signature Solid-Colored Feature Boxes */}
        <div ref={colorBoxesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {colorBoxes.map((box) => {
            const Icon = box.icon;
            return (
              <div
                key={box.id}
                className={`${box.bg} text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_10px_24px_rgba(0,0,0,0.12)] ${box.shadow} transition-all duration-300 hover:-translate-y-2 active:scale-[0.99] flex items-start gap-4 sm:gap-5 relative overflow-hidden group cursor-pointer select-none`}
                onClick={onEnquireClick}
              >
                {/* Subtle Ambient Hover Glow */}
                <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                {/* Left Icon with smooth hover rotation & bounce */}
                <div className="shrink-0 text-white pt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-10 h-10 stroke-[2]" />
                </div>

                {/* Title and Description */}
                <div className="flex-1">
                  <h4 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-wider text-white mb-2 leading-tight">
                    {box.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
                    {box.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PART 2: Split 50/50 About Us & Auto-Sliding Carousel */}
        <div ref={splitSectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-stone-50/80 p-6 sm:p-10 lg:p-12 rounded-3xl border border-stone-200/70 shadow-xs">
          {/* Left: About Us Auto-Sliding Carousel (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-stone-900 group">
              {/* Stacked Images with Smooth Cross-Fade Animation */}
              {sliderImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeImageIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt="About Little Veda Early Learning"
                    className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                </div>
              ))}

              {/* Floating Campus Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-display font-extrabold text-stone-900 uppercase tracking-wider">
                  Visakhapatnam Campus
                </span>
              </div>

              {/* Slider Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-[#f57f25] text-stone-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-[#f57f25] text-stone-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Expanding Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeImageIndex === idx
                      ? 'w-7 bg-[#f57f25] shadow-xs'
                      : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Why Choose Us Narrative & Interactive Checklist */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold uppercase tracking-wider text-[#f57f25] bg-[#f57f25]/10 px-3.5 py-1 rounded-full w-fit mb-3 border border-[#f57f25]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Where Learning Feels Like Play</span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-4 tracking-tight">
              Why Choose Us
            </h3>

            <p className="font-body text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
              At Little Veda, we create a sacred home-like haven where early childhood wonder is cherished and protected. Rooted in Visakhapatnam, our philosophy embraces play as the premier language of early development.
            </p>

            <p className="font-body text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              Guided by the foundational principles of NEP 2020 and Montessori sensorial exploration, we balance emotional security with creative freedom. Our 1:8 educator ratio ensures every toddler is seen, heard, and lovingly supported.
            </p>

            {/* Interactive Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200/70 shadow-xs hover:border-[#8bc34a] transition-colors">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Montessori Play Discovery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200/70 shadow-xs hover:border-[#00C3C9] transition-colors">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Caring 1:8 Ratio & Didis</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200/70 shadow-xs hover:border-[#ffba06] transition-colors">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>100% Safe CCTV & Turf</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200/70 shadow-xs hover:border-[#f57f25] transition-colors">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Warm Nutritious Meals</span>
              </div>
            </div>

            <div>
              <button
                onClick={onEnquireClick}
                className="font-display font-extrabold text-sm sm:text-base uppercase tracking-wider bg-[#f57f25] hover:bg-[#e06c15] text-white px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_25px_rgba(245,127,37,0.4)] inline-flex items-center gap-2.5 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Book a Tour</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
