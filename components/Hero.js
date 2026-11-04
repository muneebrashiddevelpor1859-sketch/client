import Link from 'next/link';
import Backdrop from './Backdrop';

export default function Hero() {
  return (
    <section className="hero">
      <Backdrop img="/images/painter-at-work.jpg" video="/videos/6474084-uhd_3840_2160_25fps.mp4" priority />
      <div className="w hg">
        <div className="hero-copy">
          <h1>Colour with <em>character</em>, finished to perfection.</h1>
          <p className="sub">Premium interior, exterior and wood finishes from Qazi Electro Paint Master, mixed to your exact shade and delivered to your door.</p>
          <div className="cta">
            <Link className="btn" href="/contact">Book a free site visit</Link>
            <Link className="btn o" href="/products">Explore paints</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
