import React, { useEffect, useRef, useState } from 'react';
import { schoolConfig } from '../../config/schoolConfig';
import gsap from 'gsap';

/**
 * Preloader:
 * - Safe against browser privacy shields (Brave, Safari, Firefox Private)
 * - Safe sessionStorage access with try/catch fallback
 * - Guaranteed unmount with strict timeout to prevent frozen white screens
 */
export function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    let hasVisited = false;
    let prefersReducedMotion = false;

    try {
      hasVisited = sessionStorage.getItem('lv_loaded') === 'true';
    } catch {
      // In Brave Shields / private browsing, storage may be blocked
      hasVisited = false;
    }

    try {
      prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      prefersReducedMotion = false;
    }

    if (hasVisited || prefersReducedMotion) {
      setShouldRender(false);
      if (onComplete) onComplete();
      return;
    }

    let ctx;
    try {
      ctx = gsap.context(() => {
        if (logoRef.current) {
          gsap.to(logoRef.current, {
            rotationY: 360,
            duration: 0.9,
            ease: 'power2.inOut',
          });
        }

        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            delay: 0.9,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              try {
                sessionStorage.setItem('lv_loaded', 'true');
              } catch {
                // Ignore storage blocks in Brave
              }
              setShouldRender(false);
              if (onComplete) onComplete();
            },
          });
        }
      }, containerRef);
    } catch {
      setShouldRender(false);
      if (onComplete) onComplete();
    }

    // Safety fallback: guaranteed to dismiss within 1.2s under any browser environment
    const timer = setTimeout(() => {
      setShouldRender(false);
      if (onComplete) onComplete();
    }, 1200);

    return () => {
      if (ctx && ctx.revert) ctx.revert();
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center select-none pointer-events-none transition-opacity duration-300"
    >
      <div className="flex flex-col items-center">
        {/* Rotating emblem */}
        <div
          ref={logoRef}
          className="w-20 h-20 rounded-full bg-[#f57f25] flex items-center justify-center text-white shadow-xl mb-4"
        >
          <svg viewBox="0 0 32 32" className="w-12 h-12 fill-current">
            <path d="M16 6C13.5 11 9.5 13.5 4 15C9.5 17.5 12 21.5 13 27C15 22 17.5 19.5 22.5 18C18.5 16 16.5 11.5 16 6Z" fill="#FFFDF9" />
            <circle cx="23" cy="8" r="3.5" fill="#ffba06" />
            <circle cx="9" cy="9" r="2.5" fill="#a9d63b" />
          </svg>
        </div>

        <h3 className="font-script text-4xl text-[#f57f25] tracking-wide font-normal">
          {schoolConfig.brand.name}
        </h3>
        <p className="text-xs uppercase font-bold tracking-widest text-stone-400 mt-1">
          Care School for Little Minds
        </p>
      </div>
    </div>
  );
}

export default Preloader;
