import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

/**
 * Authentic Indian Play School Hero Section
 * - High-clarity, bright, heartwarming imagery featuring happy Indian toddlers and loving teachers
 * - Soft luminous gradient overlays preserving vivid colors, smiling faces, and toys
 * - Cultural warmth: NEP 2020 play-based learning, Visakhapatnam campus, loving didis & educators
 * - Fully responsive across mobile, tablet, and desktop with smooth Ken Burns zoom & entrance animations
 */
const heroSlides = [
  {
    id: 1,
    image: "/assets/img/hero/hero-slide-1.jpg",
    badge: "🌟 VISAKHAPATNAM'S LOVED PLAY SCHOOL • AGES 1.5 TO 6 YRS",
    title: "Little Veda",
    subtitle: "Care & Joy for Little Minds",
    primaryCta: "Explore Programs",
    primaryHref: "#about",
    secondaryCta: "Schedule Campus Visit",
  },
  {
    id: 2,
    image: "/assets/img/hero/hero-slide-2.jpg",
    badge: "🌿 100% SAFE GREEN CAMPUS • LUSH PLAY TURF",
    title: "Play, Laugh & Blossom",
    subtitle: "Childhood Wonder in Every Little Step",
    primaryCta: "View Facilities",
    primaryHref: "#facilities",
    secondaryCta: "Admissions Open 2026–27",
  },
  {
    id: 3,
    image: "/assets/img/hero/hero-slide-3.jpg",
    badge: "🎨 RHYMES, CLAY ART & STORYTELLING CIRCLES",
    title: "Nurturing Little Minds",
    subtitle: "Loving Educators & Caring Didis",
    primaryCta: "Meet Our Teachers",
    primaryHref: "#teachers",
    secondaryCta: "Book a Campus Visit",
  },
];

export function HeroSection({ onBookVisit }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  // Auto-slide reliably every 5 seconds across all devices (without getting frozen by cursor hover)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Touch Swipe for Mobile Devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const slide = heroSlides[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full h-[580px] sm:h-[640px] md:h-[680px] lg:h-[720px] overflow-hidden bg-stone-900 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Welcome to Little Veda"
    >
      {/* Background Images with Ken Burns slow zoom and smooth cross-fade */}
      {heroSlides.map((item, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Small Blur Opacity Overlay:
                - Gentle backdrop-blur gives a subtle soft-focus cinematic depth of field
                - Soft opacity gradient preserves high clarity and color while letting typography pop
            */}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-t from-black/75 via-black/20 to-black/35" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/15 to-black/35 opacity-80" />
          </div>
        );
      })}

      {/* Central Content Container */}
      <div className="relative z-20 h-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center text-white pt-2 sm:pt-4">
        {/* Animated Indian Preschool Badge */}
        <div
          key={`badge-${slide.id}`}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-black/40 hover:bg-black/50 backdrop-blur-md border border-white/30 text-white font-display font-bold text-[11px] sm:text-xs md:text-sm px-3.5 sm:px-5 py-1.5 rounded-full mb-2.5 sm:mb-3.5 shadow-lg tracking-wider transition-all duration-300 animate-fade-in"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ffba06] shrink-0" />
          <span>{slide.badge}</span>
        </div>

        {/* Highly Legible Modern H1 Title */}
        <h1
          key={`title-${slide.id}`}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-2 sm:mb-3 tracking-tight animate-fade-in drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          {slide.title}
        </h1>

        {/* H2 Subtitle in Radiant Sunflower Gold */}
        <h2
          key={`sub-${slide.id}`}
          className="font-display text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#ffba06] mb-6 sm:mb-8 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] animate-fade-in"
        >
          {slide.subtitle}
        </h2>

        {/* Description Copy (only rendered if present) */}
        {slide.description && (
          <p
            key={`desc-${slide.id}`}
            className="text-xs sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] animate-fade-in px-2"
          >
            {slide.description}
          </p>
        )}

        {/* Action Buttons with high legibility & smooth hover micro-animations */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={slide.primaryHref}
            className="font-display font-extrabold text-xs sm:text-base md:text-lg uppercase tracking-wider bg-white hover:bg-[#f57f25] text-stone-900 hover:text-white px-6 sm:px-9 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 inline-flex items-center gap-2 group backdrop-blur-xs"
          >
            <span>{slide.primaryCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={onBookVisit}
            className="font-display font-extrabold text-xs sm:text-base md:text-lg uppercase tracking-wider bg-[#f57f25] hover:bg-[#e06c15] text-white px-6 sm:px-9 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_25px_rgba(245,127,37,0.5)] hover:scale-105 active:scale-95 inline-flex items-center gap-2 border-2 border-white/30"
          >
            <Calendar className="w-4 h-4" />
            <span>{slide.secondaryCta}</span>
          </button>
        </div>

        {/* Quick Indian Preschool Highlights (Tablet/Desktop) */}
        <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6 mt-8 text-xs md:text-sm font-semibold text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <HeartHandshake className="w-4 h-4 text-[#8bc34a]" />
            <span>Loving 1:8 Educator Ratio</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#00C3C9]" />
            <span>100% CCTV & Safety Turf</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <span className="text-[#ffba06]">🇮🇳</span>
            <span>NEP 2020 Aligned Play-way</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows (Hidden on phone screen, visible on tablet & desktop) */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/25 hover:bg-[#f57f25] text-white items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/30 shadow-lg hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/25 hover:bg-[#f57f25] text-white items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/30 shadow-lg hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Animated Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'w-7 sm:w-9 h-2.5 sm:h-3 bg-[#f57f25] shadow-[0_2px_8px_rgba(245,127,37,0.7)]'
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
