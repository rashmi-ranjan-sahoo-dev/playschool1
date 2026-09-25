import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Recalculate ScrollTrigger on window resize and document load
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

// SSR-safe layout effect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Custom hook to safely run GSAP animations inside React components
 * Automatically cleans up GSAP context on unmount or re-render to prevent memory leaks.
 */
export function useGsap(callback, dependencies = [], scopeRef = null) {
  useIsomorphicLayoutEffect(() => {
    let ctx;
    try {
      ctx = gsap.context(() => {
        callback(gsap, ScrollTrigger);
      }, scopeRef?.current || undefined);

      // Refresh ScrollTrigger so triggers are accurately positioned
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(timer);
        if (ctx && ctx.revert) ctx.revert();
      };
    } catch {
      // In case of any execution issue, ensure no element is left hidden
      return () => {
        if (ctx && ctx.revert) ctx.revert();
      };
    }
  }, dependencies);
}

export { gsap, ScrollTrigger };
