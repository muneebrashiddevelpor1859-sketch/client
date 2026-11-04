import Link from 'next/link';
import { SITE } from '@/lib/data';

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div><h4>{SITE.name}</h4><p>Paints, colour matching and finishes for homes, shops and sites.</p></div>
          <div><h4>Pages</h4><Link href="/products">Products</Link><Link href="/colours">Colours</Link><Link href="/calculator">Paint calculator</Link><Link href="/about">About</Link></div>
          <div><h4>Contact</h4><a href={`tel:${SITE.tel}`}>{SITE.phoneDisplay}</a><a href={SITE.wa}>WhatsApp</a><span>{SITE.hours}</span></div>
        </div>
        <small>© 2026 {SITE.name}. All rights reserved.</small>
      </div>
    </footer>
  );
}
