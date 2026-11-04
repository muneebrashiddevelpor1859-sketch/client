export default function ProductCard({ p, i = 0 }) {
  return (
    <div className="card" style={{ '--c': p.c, animationDelay: i * 70 + 'ms' }}>
      <div className="can" /><h3>{p.n}</h3><p>{p.d}</p><span className="pill">{p.f}</span>
    </div>
  );
}
