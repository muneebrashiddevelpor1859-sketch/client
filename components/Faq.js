'use client';
import { useState } from 'react';
import { FAQ } from '@/lib/data';

export default function Faq() {
  const [o, setO] = useState(0);
  return (
    <div className="faq">
      {FAQ.map(([q, a], i) => (
        <div key={q} className={'fq' + (o === i ? ' open' : '')}>
          <button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}>{q}<b>{o === i ? '−' : '+'}</b></button>
          <div className="fa"><p>{a}</p></div>
        </div>
      ))}
    </div>
  );
}
