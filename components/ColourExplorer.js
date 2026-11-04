'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FAMILIES } from '@/lib/data';

const ink = (h) => { const n = parseInt(h.slice(1), 16); return (((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 > 150) ? '#0b1220' : '#fff'; };

export default function ColourExplorer() {
  const [f, setF] = useState(0);
  const [s, setS] = useState(FAMILIES[0].shades[0]);
  return (
    <>
      <div className="cat" role="group" aria-label="Colour families">
        {FAMILIES.map((x, i) => <button key={x.name} className={f === i ? 'on' : ''} onClick={() => { setF(i); setS(x.shades[0]); }}>{x.name}</button>)}
      </div>
      <div className="cg">
        <div className="big">
          <div className="sl" style={{ background: s[1] }}><div className="floor" /></div>
          <div className="in2">
            <h3>{s[0]}</h3>
            <p>Reference {s[1].toUpperCase()}. Screens differ slightly from the tin, so we match from a physical sample.</p>
            <Link className="btn" href={`/contact?shade=${encodeURIComponent(s[0])}`}>Match this shade</Link>
          </div>
        </div>
        <div className="sg">
          {FAMILIES[f].shades.map((x) => (
            <button key={x[1]} style={{ '--c': x[1], color: ink(x[1]) }} aria-pressed={s[1] === x[1]} onClick={() => setS(x)}>{x[0]}</button>
          ))}
        </div>
      </div>
    </>
  );
}
