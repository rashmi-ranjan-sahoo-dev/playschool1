import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import { useGsap } from '../../hooks/useGsap';

/**
 * Little Veda Premium Structured Header
 * - Exact Baby House Reference Aesthetics:
 *   - Logo: "Little" in Purple, "Veda" in Orange with cute lime-green playhouse perched right on top
 *   - Perfectly sized and responsive: 100% visible and unclipped on all phone screens
 * - Animated Nav Links:
 *   - Selecting/clicking ANY link dynamically animates its background color into a solid colored pill
 *   - Smooth cubic-bezier color transition, text color morph, scale-up, and matching glow shadow
 *   - Real-time ScrollSpy automatically follows the page as the user scrolls
 * - Zero "Enquire" clutter on phone header (clean logo + animated hamburger)
 * - Mobile drawer with matching active states & visit booking action
 */
export function Navbar({ onBookVisit }) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navLinksRef = useRef(null);

  // 8 structured direct navigation links with exact reference color themes
  const navLinks = [
    {
      name: 'HOME',
      href: '#hero',
      activeBg: 'bg-[#f57f25]',
      activeShadow: 'shadow-[0_4px_16px_rgba(245,127,37,0.4)]',
      textColor: 'text-[#f57f25]',
      hoverBg: 'hover:bg-[#f57f25]/12',
    },
    {
      name: 'ABOUT',
      href: '#about',
      activeBg: 'bg-[#8bc34a]',
      activeShadow: 'shadow-[0_4px_16px_rgba(139,195,74,0.4)]',
      textColor: 'text-[#8bc34a]',
      hoverBg: 'hover:bg-[#8bc34a]/12',
    },
    {
      name: 'FACILITIES',
      href: '#facilities',
      activeBg: 'bg-[#00C3C9]',
      activeShadow: 'shadow-[0_4px_16px_rgba(0,195,201,0.4)]',
      textColor: 'text-[#00C3C9]',
      hoverBg: 'hover:bg-[#00C3C9]/12',
    },
    {
      name: 'GALLERY',
      href: '#gallery',
      activeBg: 'bg-[#907ee2]',
      activeShadow: 'shadow-[0_4px_16px_rgba(144,126,226,0.4)]',
      textColor: 'text-[#907ee2]',
      hoverBg: 'hover:bg-[#907ee2]/12',
    },
    {
      name: 'TEACHERS',
      href: '#teachers',
      activeBg: 'bg-[#8bc34a]',
      activeShadow: 'shadow-[0_4px_16px_rgba(139,195,74,0.4)]',
      textColor: 'text-[#8bc34a]',
      hoverBg: 'hover:bg-[#8bc34a]/12',
    },
    {
      name: 'FEEDBACK',
      href: '#testimonials',
      activeBg: 'bg-[#e868a7]',
      activeShadow: 'shadow-[0_4px_16px_rgba(232,104,167,0.4)]',
      textColor: 'text-[#e868a7]',
      hoverBg: 'hover:bg-[#e868a7]/12',
    },
    {
      name: 'BLOG',
      href: '#blog',
      activeBg: 'bg-[#ffba06]',
      activeShadow: 'shadow-[0_4px_16px_rgba(255,186,6,0.4)]',
      textColor: 'text-[#ffba06]',
      hoverBg: 'hover:bg-[#ffba06]/12',
    },
    {
      name: 'CONTACT',
      href: '#contact',
      activeBg: 'bg-[#907ee2]',
      activeShadow: 'shadow-[0_4px_16px_rgba(144,126,226,0.4)]',
      textColor: 'text-[#907ee2]',
      hoverBg: 'hover:bg-[#907ee2]/12',
    },
  ];

  // GSAP Entrance animation for desktop links
  useGsap((gsap) => {
    try {
      if (navLinksRef.current && navLinksRef.current.children) {
        gsap.fromTo(
          navLinksRef.current.children,
          { y: -14, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 0.5, ease: 'power2.out', delay: 0.1 }
        );
      }
    } catch {
      // Fallback if browser blocks GSAP execution
    }
  }, [], headerRef);

  // ScrollSpy to update activeSection as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'facilities', 'gallery', 'teachers', 'testimonials', 'blog', 'contact'];

    const handleScroll = () => {
      setIsSticky(window.scrollY > 25);

      const scrollPosition = window.scrollY + 130;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler with offset for sticky header
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`w-full bg-white transition-all duration-300 z-50 ${
        isSticky
          ? 'sticky top-0 shadow-[0_4px_25px_rgba(0,0,0,0.07)] py-1.5 sm:py-2.5 backdrop-blur-md bg-white/95 border-b border-stone-200/80'
          : 'relative py-2 sm:py-3 border-b border-stone-200/90'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        {/* Left: Authentic Preschool Logo matching reference screenshot
            - Highly responsive on all screen sizes, never cut off or cramped on mobile
        */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="relative inline-flex items-center gap-1 sm:gap-1.5 group select-none shrink-0 transition-transform duration-200 active:scale-95"
          aria-label="Little Veda Home"
        >
          {/* Word 1: "Little" in Purple */}
          <span
            className="font-script text-2xl sm:text-3xl lg:text-[38px] text-[#907ee2] tracking-wide inline-block leading-none"
            style={{
              textShadow: '1px 1px 0 #fff, 2px 2px 0 rgba(144,126,226,0.25)',
            }}
          >
            Little
          </span>

          {/* Word 2: "Veda" in Orange with perched Green Playhouse */}
          <div className="relative inline-flex flex-col items-center">
            {/* Green Playhouse Roof perched right above Veda */}
            <div className="w-5 h-4 sm:w-6 sm:h-5 lg:w-7 lg:h-5.5 -mb-0.5 sm:-mb-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
              <svg viewBox="0 0 36 28" className="w-full h-full drop-shadow-xs" fill="none">
                {/* Chimney */}
                <rect x="23" y="2" width="4" height="9" rx="1" fill="#8bc34a" />
                {/* Roof */}
                <path
                  d="M4 16L18 3L32 16"
                  stroke="#8bc34a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* House Body */}
                <rect x="9" y="14" width="18" height="12" rx="1.5" fill="#8bc34a" />
                {/* Window */}
                <rect x="15" y="17" width="6" height="6" rx="1" fill="white" />
              </svg>
            </div>

            {/* "Veda" Text */}
            <span
              className="font-script text-2xl sm:text-3xl lg:text-[38px] text-[#f57f25] tracking-wide inline-block leading-none"
              style={{
                textShadow: '1px 1px 0 #fff, 2px 2px 0 rgba(245,127,37,0.25)',
              }}
            >
              Veda
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation Bar (Visible on lg 1024px+ screens)
            - Single row, nowrap, never breaks onto second line
            - Selecting any link dynamically changes/animates its background color smoothly
        */}
        <nav
          ref={navLinksRef}
          className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3 flex-nowrap whitespace-nowrap justify-end"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <div key={item.name} className="shrink-0">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-display font-extrabold text-[13px] xl:text-[15px] 2xl:text-base tracking-wider uppercase px-3.5 xl:px-5 py-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] inline-flex items-center justify-center select-none cursor-pointer ${
                    isActive
                      ? `${item.activeBg} text-white ${item.activeShadow} scale-105`
                      : `${item.textColor} bg-transparent ${item.hoverBg} hover:-translate-y-0.5 active:scale-95`
                  }`}
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </nav>

        {/* Phone Header Right:
            - ZERO "Enquire" button (clean logo on left, tactile animated hamburger on right)
        */}
        <div className="flex items-center lg:hidden shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-stone-100 text-stone-800 flex flex-col items-center justify-center gap-1.5 hover:bg-stone-200 transition-all duration-300 active:scale-90 shadow-xs"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-0.5 bg-stone-800 rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#f57f25]' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-stone-800 rounded-full transition-all duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-stone-800 rounded-full transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#f57f25]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Structured, Attractive Mobile Drawer Menu with Animated Active Backgrounds */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'max-h-[620px] opacity-100 border-t border-stone-200 shadow-xl'
            : 'max-h-0 opacity-0'
        } bg-white`}
      >
        <div className="p-3 sm:p-4 flex flex-col gap-1">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-display font-bold text-sm sm:text-base uppercase py-2.5 px-3.5 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-between ${
                  isActive
                    ? `${item.activeBg} text-white ${item.activeShadow}`
                    : `${item.textColor} bg-stone-50/80 hover:bg-stone-100 border border-stone-100/80`
                }`}
              >
                <span>{item.name}</span>
                <span className={`text-xs sm:text-sm ${isActive ? 'text-white font-bold' : 'opacity-40'}`}>→</span>
              </a>
            );
          })}

          {/* Action button inside mobile drawer */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookVisit) onBookVisit();
              }}
              className="w-full font-script text-xl bg-[#f57f25] hover:bg-[#e06c15] text-white py-3 rounded-2xl text-center shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Campus Visit</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
