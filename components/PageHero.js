import Backdrop from './Backdrop';

export default function PageHero({ title, text, img, video }) {
  return (
    <section className="pgh">
      <Backdrop img={img} video={video} />
      <div className="w"><h1>{title}</h1><div className="rule" /><p className="lead">{text}</p></div>
    </section>
  );
}
