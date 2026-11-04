'use client';
import { useState } from 'react';
import { CATS, PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [c, setC] = useState('all');
  const list = PRODUCTS.filter((p) => c === 'all' || p.cat === c);
  return (
    <>
      <div className="cat" role="group" aria-label="Filter products">
        {CATS.map(([k, t]) => <button key={k} className={c === k ? 'on' : ''} onClick={() => setC(k)}>{t}</button>)}
      </div>
      <div className="grid" key={c}>{list.map((p) => <ProductCard key={p.n} p={p} />)}</div>
    </>
  );
}
