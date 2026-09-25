import React, { useRef } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { blogData } from '../data/blog';
import { Calendar } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * Our Blog Section:
 * - Fresh Apple Green theme background (#8bc34a) matching Facilities layout
 * - Top & bottom white ribbon curve dividers
 * - Centered theme-heading with theme="light"
 * - Auto infinite scrolling from right to left (marquee)
 * - Pauses smoothly on hover and touch
 * - Fully responsive, especially for phone screens
 * - GSAP ScrollTrigger entrance animation with clearProps
 */
export function BlogSection() {
  const sectionRef = useRef(null);
  const marqueeContainerRef = useRef(null);

  // GSAP ScrollTrigger entrance reveal
  useGsap((gsap, ScrollTrigger) => {
    try {
      if (marqueeContainerRef.current) {
        gsap.fromTo(
          marqueeContainerRef.current,
          { y: 25, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              once: true,
            },
            y: 0,
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

  // Authentic local preschool photography
  const blogImages = [
    "/assets/img/gallery/gallery-celebration.jpg",
    "/assets/img/gallery/gallery-snack.jpg",
    "/assets/img/facilities/facility-music.jpg",
    "/assets/img/hero/hero-slide-3.jpg",
  ];

  // Base list of clean posts
  const cleanPosts = blogData.map((p, idx) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    date: p.date,
    image: blogImages[idx % blogImages.length],
  }));

  // Duplicate posts for seamless, glitch-free infinite looping
  const infinitePosts = [...cleanPosts, ...cleanPosts];

  return (
    <section ref={sectionRef} id="blog" className="bg-[#8bc34a] text-white relative overflow-hidden select-none">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-8 pb-3 relative z-10">
        {/* Centered White Theme Heading */}
        <SectionHeading
          title="Our Blog"
          subtitle="Helpful parenting tips, early childhood development advice, and joyful learning insights from our educators in Visakhapatnam."
          theme="light"
        />
      </div>

      {/* Infinite Horizontal Marquee Container (Right-to-Left Auto-Scroll) */}
      <div
        ref={marqueeContainerRef}
        className="relative w-full overflow-hidden py-3 select-none"
      >
        {/* Soft edge gradient fades on desktop matching the green background */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#8bc34a] to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#8bc34a] to-transparent z-10 pointer-events-none" />

        {/* The Animated Infinite Track */}
        <div className="animate-marquee-left flex gap-5 sm:gap-6 px-4">
          {infinitePosts.map((post, idx) => (
            <div
              key={`${post.id}-${idx}`}
              className="w-[260px] sm:w-[320px] shrink-0 flex flex-col bg-white text-stone-900 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white overflow-hidden group cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Clean Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-0.5 rounded-full text-[10px] font-display font-extrabold uppercase tracking-wider text-[#f57f25] shadow-xs">
                  {post.category}
                </div>
              </div>

              {/* Clean Concise Details */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow text-left">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#f57f25]" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h4 className="font-display font-black text-base sm:text-lg text-stone-900 group-hover:text-[#f57f25] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ribbon Curve Divider matching Facilities Section */}
      <div className="w-full overflow-hidden leading-none pointer-events-none mt-4">
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

export default BlogSection;
