import PageHero from '@/components/PageHero';
import ColourExplorer from '@/components/ColourExplorer';

export const metadata = { title: 'Colour library', description: 'Browse paint colours by family and ask us to match any shade.' };

export default function Colours() {
  return (
    <>
      <PageHero title="Colour library" text="Select a family and a shade to preview it. We always confirm with a physical sample before mixing." img="/images/strokes.jpg" video="/videos/colour-strokes.mp4" />
      <section className="sec"><div className="w"><ColourExplorer /></div></section>
    </>
  );
}
