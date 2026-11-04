'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/data';

const LINKS = [['/', 'Home'], ['/products', 'Products'], ['/colours', 'Colours'], ['/calculator', 'Calculator'], ['/about', 'About'], ['/contact', 'Contact']];

export default function Header() {
  const path = usePathname();
  const [sc, setSc] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const f = () => setSc(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, [path]);
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    addEventListener('keydown', closeOnEscape);
    return () => removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  const clear = LINKS.some(([h]) => h === path) && !sc;
  return (
    <header className={'hd' + (clear ? ' clear' : '')}>
      <div className="w nav">
        <Link className="logo" href="/"><i>Q</i><span>{SITE.name}<small>PAINTS &amp; COLOUR MATCHING</small></span></Link>
        <nav className={'links' + (menuOpen ? ' open' : '')} id="main-navigation" aria-label="Main">
          {LINKS.map(([h, t]) => <Link key={h} href={h} className={path === h ? 'on' : ''} onClick={() => setMenuOpen(false)}>{t}</Link>)}
          <Link className="btn menu-cta" href="/contact" onClick={() => setMenuOpen(false)}>Get a free quote</Link>
        </nav>
        <Link className="btn header-cta" href="/contact">Get a free quote</Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
