import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = { title: 'About us', description: 'Why customers trust Qazi Electro Paint Master.' };

export default function About() {
  return (
    <>
      <PageHero title="Trusted for colour and quality" text="The right shade, the right paint and honest advice." img="/images/room-teal.jpg" video="/videos/67358-521707474_medium.mp4" />
      <section className="sec"><div className="w two">
        <div>
          <h2>Who we are</h2><div className="rule" />
          <p className="lead">Qazi Electro Paint Master is built on one idea: the right shade, the right paint and honest advice. We supply homeowners, contractors and shops with finishes that last.</p>
          <Link className="btn" href="/contact">Talk to our team</Link>
        </div>
        <div className="vals">
          <div style={{ '--c': '#a82a0a' }}><h3>Accurate colour</h3><p>Computer matching keeps every tin consistent.</p></div>
          <div style={{ '--c': '#0f7b6c' }}><h3>Honest advice</h3><p>We recommend what the surface needs, not the most expensive tin.</p></div>
          <div style={{ '--c': '#b8892b' }}><h3>Reliable service</h3><p>Clear quotes, on-time delivery and support after the sale.</p></div>
        </div>
      </div></section>
    </>
  );
}
