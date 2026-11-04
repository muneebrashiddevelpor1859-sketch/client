'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function VisitForm() {
  const shade = useSearchParams().get('shade');
  const [done, setDone] = useState(false);

  function submit(e) {
    e.preventDefault();
    // TODO: connect to your backend or email service here (frontend demo only).
    setDone(true);
    e.target.reset();
  }

  return (
    <form onSubmit={submit}>
      <div><label htmlFor="n">Name</label><input id="n" name="name" required autoComplete="name" /></div>
      <div><label htmlFor="p">Phone number</label><input id="p" name="phone" type="tel" required autoComplete="tel" /></div>
      <div><label htmlFor="s">Surface</label>
        <select id="s" name="surface"><option>Interior walls</option><option>Exterior walls</option><option>Roof or waterproofing</option><option>Wood or metal</option><option>Not sure yet</option></select></div>
      <div><label htmlFor="m">Project details</label>
        <textarea id="m" name="details" rows="4" defaultValue={shade ? `I would like to match the shade ${shade}.` : ''} /></div>
      <button className="btn" type="submit">Send request</button>
      {done && <div className="ok" role="status">Thank you! We’ll call you back soon.</div>}
    </form>
  );
}
