import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Activity, Paintbrush, BookOpen, Music, ChevronLeft, ChevronRight, Dribbble } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * Facilities Section matching Baby House reference:
 * - Purple theme background (#907ee2) with top & bottom smooth ribbon curve dividers
 * - Centered "Our Facilities" theme-heading with signature child icon divider
 * - Exact 2-Column Split with GSAP ScrollTrigger entrance animations
 */
export function FacilitiesSection() {
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const touchStartX = useRef(null);
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    try {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { y: 25, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 90%',
              once: true,
            },
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      }
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { scale: 0.96, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 90%',
              once: true,
            },
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      }
    } catch {
      // Fallback
    }
  }, [], sectionRef);

  const facilityImages = [
    {
      url: "/assets/img/hero/hero-slide-2.jpg",
      title: "Outdoor Green Play Turf & Sports",
      tag: "MANY SPORTS",
    },
    {
      url: "/assets/img/hero/hero-slide-3.jpg",
      title: "Creative Painting & Art Studio",
      tag: "PAINTING",
    },
    {
      url: "/assets/img/hero/hero-slide-1.jpg",
      title: "Montessori Reading & Story Corner",
      tag: "LIBRARY",
    },
    {
      url: "/assets/img/facilities/facility-music.jpg",
      title: "Rhythms & Music Room",
      tag: "MUSIC LESSON",
    },
  ];

  // Auto-slide every 4.5 seconds with smooth cross-fade
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFacilityIndex((prev) => (prev + 1) % facilityImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeFacilityIndex]);

  const prevFacility = () => {
    setActiveFacilityIndex((prev) => (prev === 0 ? facilityImages.length - 1 : prev - 1));
  };

  const nextFacility = () => {
    setActiveFacilityIndex((prev) => (prev + 1) % facilityImages.length);
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
      nextFacility();
    } else if (diff < -50) {
      prevFacility();
    }
    touchStartX.current = null;
  };

  const miniServices = [
    {
      id: 'sports',
      title: 'MANY SPORTS',
      desc: 'Rubberized play turf, toddler soccer, and joyful active balance play.',
      icon: Dribbble,
    },
    {
      id: 'painting',
      title: 'PAINTING',
      desc: 'Organic finger painting, clay sculpting, and sensory craft workshops.',
      icon: Paintbrush,
    },
    {
      id: 'library',
      title: 'LIBRARY',
      desc: 'Sunlit cozy reading corners with illustrated storybooks & puppets.',
      icon: BookOpen,
    },
    {
      id: 'music',
      title: 'MUSIC LESSON',
      desc: 'Mini xylophones, Indian classical notes, and lively action rhymes.',
      icon: Music,
    },
  ];

  return (
    <section ref={sectionRef} id="facilities" className="bg-[#907ee2] text-white relative overflow-hidden select-none">
      {/* Top Ribbon Curve Divider matching reference screenshot */}
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
        {/* Centered White Theme Heading matching screenshot */}
        <SectionHeading
          title="Our Facilities"
          subtitle="Explore our thoughtfully designed campus spaces that inspire safe exploration, imaginative play, and joyful learning every day."
          theme="light"
        />

        {/* 2-Column Split: Left = Text & 4 Items, Right = Photo Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols): Headline, Narrative, and 2x2 Feature Items */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col text-left">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 tracking-tight">
              Safe & Inspiring Early Childhood Spaces
            </h3>

            <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed mb-8 max-w-xl">
              Every square foot of Little Veda is built with child safety, Indian warmth, and wonder in mind. From non-toxic rounded furniture and child-height amenities to shock-absorbing play turf and vibrant activity studios, our environment nurtures carefree discovery.
            </p>

            {/* 2x2 Grid of 4 Facilities (Clean layout matching reference screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-7">
              {miniServices.map((box) => {
                const Icon = box.icon;
                return (
                  <div
                    key={box.id}
                    className="flex items-start gap-3.5 sm:gap-4 group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* White Icon with smooth hover bounce */}
                    <div className="text-white shrink-0 pt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h4 className="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white mb-1 leading-snug group-hover:text-[#ffba06] transition-colors">
                        {box.title}
                      </h4>
                      <p className="text-xs text-white/85 leading-relaxed font-normal">
                        {box.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (6 cols): Auto-Sliding Indian Preschool Photo Carousel */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] sm:aspect-[16/10] bg-stone-900 group">
              {/* Stacked Images with Cross-Fade Animation */}
              {facilityImages.map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeFacilityIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out scale-105"
                  />

                  {/* Gentle gradient overlay for high clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute top-3.5 right-3.5 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-display font-extrabold uppercase tracking-wider text-white">
                    {item.tag}
                  </div>
                </div>
              ))}

              {/* Slider Arrows */}
              <button
                onClick={prevFacility}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-[#f57f25] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                aria-label="Previous facility photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextFacility}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-[#f57f25] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                aria-label="Next facility photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Dot Indicators on bottom of slider matching reference screenshot */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
                {facilityImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFacilityIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      activeFacilityIndex === idx
                        ? 'w-3 h-3 bg-[#ffba06] scale-125 shadow-sm'
                        : 'w-2 h-2 bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ribbon Curve Divider matching reference screenshot */}
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

export default FacilitiesSection;
