import Link from 'next/link';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Backdrop from '@/components/Backdrop';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import Faq from '@/components/Faq';
import VisitForm from '@/components/VisitForm';
import { FAMILIES, PRODUCTS, PALETTES, REVIEWS, SITE } from '@/lib/data';

const QUICK = [
  ['Book a site visit', 'Free advice at your home or shop', '/contact'],
  ['Paint calculator', 'Estimate how much paint you need', '/calculator'],
  ['Find your shade', 'Browse the colour library', '/colours'],
  ['Talk to an expert', `Call ${SITE.phoneDisplay}`, `tel:${SITE.tel}`],
];
const CATEGORIES = [['Interior paints', '#a82a0a'], ['Exterior paints', '#0f7b6c'], ['Waterproofing', '#1f6fa8'], ['Wood and metal', '#8a5a2b']];
const SERVICES = [['Computer colour matching', 'Bring a photo, fabric or shade code. We mix it to match, tin after tin.'], ['Right quantity, no waste', 'Tell us the room size and we’ll work out coats and litres before you pay.'], ['Delivery and painters', 'We deliver to your site and can connect you with trusted painters.']];
const ALL = FAMILIES.flatMap((f) => f.shades);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w"><div className="quick">
        {QUICK.map(([t, d, h]) => (
          <Link key={t} href={h} className="qk"><h3>{t}</h3><p>{d}</p><span aria-hidden="true">→</span></Link>
        ))}
      </div></div>

      <div className="mq" aria-hidden="true"><div>
        {[...ALL, ...ALL].map((s, i) => <span key={i} style={{ '--c': s[1] }}>{s[0]}</span>)}
      </div></div>

      <section className="sec"><div className="w">
        <Reveal><h2>Everything a home needs</h2><div className="rule" /><p className="lead">One shop for primer, topcoat and protection, so every layer works together.</p></Reveal>
        <div className="grid">
          {CATEGORIES.map(([t, c], i) => (
            <Reveal key={t} delay={i * 80}><Link href="/products" className="tile" style={{ '--c': c }}><i /><h3>{t}</h3><span>View products →</span></Link></Reveal>
          ))}
        </div>
      </div></section>

      <section className="sec alt"><div className="w">
        <Reveal><h2>Featured paints</h2><div className="rule" /><p className="lead">Popular choices for walls, roofs, wood and metal.</p></Reveal>
        <div className="grid">{[0, 3, 5, 7].map((i) => <ProductCard key={i} p={PRODUCTS[i]} />)}</div>
        <Reveal><p style={{ marginTop: 32 }}><Link className="btn o" href="/products">See all products</Link></p></Reveal>
      </div></section>

      <section className="sec"><div className="w">
        <Reveal><h2>Colours for every mood</h2><div className="rule" /><p className="lead">Start with a family, then narrow down to the shade that feels right.</p></Reveal>
        <div className="fams">
          {FAMILIES.map((f, i) => (
            <Reveal key={f.name} delay={i * 50}><Link href="/colours" className="fam"><div>{f.shades.map((s) => <i key={s[1]} style={{ background: s[1] }} />)}</div><span>{f.name}</span></Link></Reveal>
          ))}
        </div>
      </div></section>

      <section className="vband">
        <Backdrop img="/images/strokes.jpg" video="/videos/85343-590746457_medium.mp4" speed={0.1} />
        <div className="w"><Reveal><h2>1,200 shades, mixed to match.</h2><div className="rule" /><p className="lead">Bring a photo, a fabric or a shade code. Our computer tinting machine matches it, tin after tin.</p><Link className="btn" href="/colours">Browse the colour library</Link></Reveal></div>
      </section>

      <section className="sec band-sec"><div className="w">
        <Reveal><h2>Signature palettes</h2><div className="rule" /><p className="lead">Ready-made colour stories that work together. Ask us to mix any of them.</p></Reveal>
        <div className="pal">
          {PALETTES.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}><div className="pl"><div>{p.s.map((c) => <i key={c} style={{ background: c }} />)}</div><h3>{p.n}</h3></div></Reveal>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="w">
        <Reveal><h2>Why customers choose us</h2><div className="rule" /></Reveal>
        <div className="steps">
          {SERVICES.map(([t, d], i) => <Reveal key={t} delay={i * 100}><div><h3>{t}</h3><p>{d}</p></div></Reveal>)}
        </div>
      </div></section>

      <section className="sec alt"><div className="w">
        <Reveal><h2>What customers say</h2><div className="rule" /><p className="lead">Sample reviews for this demo. Replace them with real customer feedback.</p></Reveal>
        <div className="grid g3">
          {REVIEWS.map(([q, a], i) => <Reveal key={a} delay={i * 100}><blockquote className="rev"><p>“{q}”</p><cite>{a}</cite></blockquote></Reveal>)}
        </div>
      </div></section>

      <section className="vband short">
        <Backdrop img="/images/stux-paint-brush-1034901_1920.jpg" speed={0.12} />
        <div className="w cta2">
          <Reveal><h2>Planning a paint job?</h2><p className="lead">Get shade advice and a clear quote at no charge.</p></Reveal>
          <Reveal delay={120}><div className="acts"><Link className="btn" href="/contact">Request a quote</Link><a className="btn o" href={`tel:${SITE.tel}`}>{SITE.phoneDisplay}</a></div></Reveal>
        </div>
      </section>

      <section className="sec"><div className="w two">
        <div><Reveal><h2>Questions, answered</h2><div className="rule" /></Reveal><Faq /></div>
        <Reveal><div className="formcard"><h2 style={{ fontSize: 34 }}>Book a free site visit</h2><p className="lead" style={{ marginBottom: 20 }}>Tell us about your project and we’ll call you back.</p>
          <Suspense fallback={null}><VisitForm /></Suspense></div></Reveal>
      </div></section>
    </>
  );
}
