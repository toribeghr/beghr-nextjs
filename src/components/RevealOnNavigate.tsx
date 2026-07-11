'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * The reveal-on-scroll observer is set up once by an inline script in the root
 * layout, which runs during the first full page load (flash-free, before paint).
 * That script does NOT re-run on App Router client-side navigations, so a page
 * reached by clicking a link (e.g. homepage -> a service hub) never wired its
 * .reveal elements to an observer and stayed static. This component re-runs the
 * observer on every route change after the first, so navigated pages animate too.
 * The first render is skipped on purpose so the inline script keeps owning the
 * initial load and there is no double pass.
 */
export default function RevealOnNavigate() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    const els = Array.from(document.querySelectorAll('.reveal'));
    els.forEach((el) => el.classList.add('will-animate'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
