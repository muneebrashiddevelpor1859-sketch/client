'use client';
import Link from 'next/link';
import { useState } from 'react';

const COVERAGE = 100; // sq ft per litre per coat (estimate, confirm with us)

export default function Calculator() {
  const [v, setV] = useState({ l: 14, w: 12, h: 10, doors: 1, windows: 2, coats: 2 });
  const set = (k) => (e) => setV({ ...v, [k]: Math.max(0, Number(e.target.value) || 0) });
  const wall = 2 * (v.l + v.w) * v.h;
  const area = Math.max(0, wall - v.doors * 20 - v.windows * 12);
  const litres = Math.ceil((area * v.coats) / COVERAGE);
  const fields = [['l', 'Room length (ft)'], ['w', 'Room width (ft)'], ['h', 'Wall height (ft)'], ['doors', 'Doors'], ['windows', 'Windows'], ['coats', 'Coats']];
  return (
    <div className="two">
      <form onSubmit={(e) => e.preventDefault()} className="calc">
        {fields.map(([k, t]) => (
          <div key={k}><label htmlFor={k}>{t}</label><input id={k} type="number" min="0" inputMode="decimal" value={v[k]} onChange={set(k)} /></div>
        ))}
      </form>
      <div className="res">
        <p>Paintable wall area</p><strong>{Math.round(area)} sq ft</strong>
        <p>Estimated paint needed</p><strong className="gold">{litres} litres</strong>
        <small>Estimate based on about {COVERAGE} sq ft per litre per coat, ignoring ceilings and waste. Final quantity depends on the product and surface, so please confirm with us.</small>
        <Link className="btn" href="/contact">Get an exact quote</Link>
      </div>
    </div>
  );
}
