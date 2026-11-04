'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/data';

const LINKS = [['/', 'Home'], ['/products', 'Products'], ['/colours', 'Colours'], ['/calculator', 'Calculator'], ['/about', 'About'], ['/contact', 'Contact']];

export default function Header() {
  const path = usePathname();
  const [sc, setSc] = useState(false);
  useEffect(() => { const f = () => setSc(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, [path]);
  const clear = LINKS.some(([h]) => h === path) && !sc;
  return (
    <header className={'hd' + (clear ? ' clear' : '')}>
      <div className="w nav">
        <Link className="logo" href="/"><i>Q</i><span>{SITE.name}<small>PAINTS &amp; COLOUR MATCHING</small></span></Link>
        <nav className="links" aria-label="Main">
          {LINKS.map(([h, t]) => <Link key={h} href={h} className={path === h ? 'on' : ''}>{t}</Link>)}
        </nav>
        <Link className="btn" href="/contact">Get a free quote</Link>
      </div>
    </header>
  );
}
