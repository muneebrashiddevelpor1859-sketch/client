export default function ProductCard({ p }) {
  return (
    <div className="card" style={{ '--c': p.c }}>
      <div className="can" /><h3>{p.n}</h3><p>{p.d}</p><span className="pill">{p.f}</span>
    </div>
  );
}
