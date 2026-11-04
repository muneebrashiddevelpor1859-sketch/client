'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTOR = [
  '.sec > .w > *:not(.rv):not(.grid):not(.fams):not(.pal):not(.steps)',
  '.two > *',
  '.cg > *',
  '.quick > .qk',
  '.grid > .rv',
  '.grid > .card',
  '.fams > .rv',
  '.steps > .rv',
  '.pal > .rv',
  '.fg > *',
].join(',');

export default function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const observed = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    const observe = (root) => {
      if (root instanceof Element && root.matches(SELECTOR) && !observed.has(root)) {
        observed.add(root);
        root.classList.add('motion-item');
        observer.observe(root);
      }
      root.querySelectorAll?.(SELECTOR).forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          const siblings = el.parentElement?.children;
          if (siblings?.length > 1) {
            el.style.setProperty('--motion-delay', `${Math.min(Array.prototype.indexOf.call(siblings, el) * 70, 350)}ms`);
          }
          el.classList.add('motion-item');
          observer.observe(el);
        }
      });
    };

    observe(document.body);
    document.documentElement.classList.add('motion-ready');
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(observe));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      observed.forEach((el) => {
        el.classList.remove('motion-item', 'motion-in');
        el.style.removeProperty('--motion-delay');
      });
      document.documentElement.classList.remove('motion-ready');
    };
  }, [pathname]);

  return null;
}
