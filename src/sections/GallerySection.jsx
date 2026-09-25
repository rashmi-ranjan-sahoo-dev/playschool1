import React, { useState, useRef } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Lightbox } from '../components/common/Lightbox';
import { galleryCategories, galleryData } from '../data/gallery';
import { Maximize2, Sparkles, Heart } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * Authentic Indian Playschool Gallery Section
 * - Reduced top padding: pt-6 sm:pt-8 pb-12 sm:pb-16
 * - High-resolution visuals featuring happy Indian children learning, painting, playing, and celebrating
 * - Dynamic category filtering with smooth responsive transition
 * - Asymmetric layout for 'All Moments' and clean responsive grid for categories
 * - GSAP ScrollTrigger entrance animations
 */
export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const galleryGridRef = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    try {
      if (galleryGridRef.current) {
        gsap.fromTo(
          galleryGridRef.current.children,
          { y: 25, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: galleryGridRef.current,
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
    } catch {
      // Fallback
    }
  }, [], sectionRef);

  const filteredItems =
    activeFilter === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  return (
    <section ref={sectionRef} id="gallery" className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered Theme Heading */}
        <SectionHeading
          title="Our Gallery"
          subtitle="Glimpses of daily joyful discoveries, colorful crafts, messy outdoor play, and celebration moments at Little Veda in Visakhapatnam."
        />

        {/* Dynamic Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {galleryCategories.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#f57f25] text-white shadow-md shadow-orange-500/25 scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Display */}
        {activeFilter === 'all' ? (
          /* Signature Asymmetric 4-Slot Layout for 'All Moments' */
          <div ref={galleryGridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 animate-fadeIn">
            {/* Left Column (8 cols): 2 top boxes + 1 wide bottom box */}
            <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6">
              {/* Top Row: 2 Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Box 1 (Festivals & Craft - Pink Hover) */}
                <div
                  onClick={() => setSelectedImage(galleryData[0])}
                  className="relative overflow-hidden cursor-pointer group shadow-md hover:shadow-xl rounded-3xl aspect-[4/3] bg-stone-100 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <img
                    src={galleryData[0].image}
                    alt={galleryData[0].title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 ${galleryData[0].hoverClass} opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6 text-center`}
                  >
                    <span className="text-[10px] font-display font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
                      {galleryData[0].badge}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-md">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-display font-black text-lg text-white mb-1">
                      {galleryData[0].title}
                    </h4>
                    <p className="text-xs text-white/90 max-w-xs leading-relaxed">
                      {galleryData[0].caption}
                    </p>
                  </div>
                </div>

                {/* Box 2 (Music Room - Blue Hover) */}
                <div
                  onClick={() => setSelectedImage(galleryData[1])}
                  className="relative overflow-hidden cursor-pointer group shadow-md hover:shadow-xl rounded-3xl aspect-[4/3] bg-stone-100 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <img
                    src={galleryData[1].image}
                    alt={galleryData[1].title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 ${galleryData[1].hoverClass} opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6 text-center`}
                  >
                    <span className="text-[10px] font-display font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
                      {galleryData[1].badge}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-md">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-display font-black text-lg text-white mb-1">
                      {galleryData[1].title}
                    </h4>
                    <p className="text-xs text-white/90 max-w-xs leading-relaxed">
                      {galleryData[1].caption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row: 1 Wide Box (Outdoor Play - Orange Hover) */}
              <div
                onClick={() => setSelectedImage(galleryData[2])}
                className="relative overflow-hidden cursor-pointer group shadow-md hover:shadow-xl rounded-3xl aspect-[16/9] sm:aspect-[21/9] bg-stone-100 transition-all duration-300 hover:-translate-y-1.5"
              >
                <img
                  src={galleryData[2].image}
                  alt={galleryData[2].title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 ${galleryData[2].hoverClass} opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6 text-center`}
                >
                  <span className="text-[10px] font-display font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
                    {galleryData[2].badge}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-md">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-display font-black text-xl text-white mb-1">
                    {galleryData[2].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/90 max-w-md leading-relaxed">
                    {galleryData[2].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): 1 Tall Box (Montessori - Purple Hover) */}
            <div className="lg:col-span-4">
              <div
                onClick={() => setSelectedImage(galleryData[3])}
                className="relative overflow-hidden cursor-pointer group shadow-md hover:shadow-xl rounded-3xl h-full min-h-[300px] sm:min-h-[420px] bg-stone-100 transition-all duration-300 hover:-translate-y-1.5"
              >
                <img
                  src={galleryData[3].image}
                  alt={galleryData[3].title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 ${galleryData[3].hoverClass} opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6 text-center`}
                >
                  <span className="text-[10px] font-display font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
                    {galleryData[3].badge}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-md">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-display font-black text-xl text-white mb-1">
                    {galleryData[3].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/90 max-w-xs leading-relaxed">
                    {galleryData[3].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Category Grid with smooth fade-in */
          <div ref={galleryGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-fadeIn">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative overflow-hidden cursor-pointer group shadow-md hover:shadow-xl rounded-3xl aspect-[4/3] bg-stone-100 transition-all duration-300 hover:-translate-y-1.5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 ${item.hoverClass} opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6 text-center`}
                >
                  <span className="text-[10px] font-display font-black tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
                    {item.badge}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-md">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-display font-black text-lg text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/90 max-w-xs leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
}

export default GallerySection;
