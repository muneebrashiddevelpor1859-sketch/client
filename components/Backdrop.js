'use client';
import { useEffect, useRef } from 'react';

// Background image (+ optional looping video) with parallax and black linear gradients on top.
// Replace files in /public/images and /public/videos with your own photos and clips.
export default function Backdrop({ img, video, speed = 0.12 }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current, parent = el.parentElement;
    let t = false;
    const f = () => { t = false; el.style.transform = `translate3d(0,${(parent.getBoundingClientRect().top * -speed).toFixed(1)}px,0)`; };
    const on = () => { if (!t) { t = true; requestAnimationFrame(f); } };
    f();
    addEventListener('scroll', on, { passive: true });
    addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, [speed]);
  return (
    <>
      <div className="bd" aria-hidden="true">
        <div className="bdi" ref={r}>
          <div className="kb" style={{ backgroundImage: `url(${img})` }} />
          {video && <video className="bgvid" src={video} poster={img} autoPlay muted loop playsInline preload="metadata" />}
        </div>
      </div>
      <div className="shade-lin" aria-hidden="true" />
      <div className="shade-up" aria-hidden="true" />
    </>
  );
}
