import PageHero from '@/components/PageHero';
import ProductGrid from '@/components/ProductGrid';

export const metadata = { title: 'Products', description: 'Interior, exterior, waterproofing, wood and preparation products.' };

export default function Products() {
  return (
    <>
      <PageHero title="Our paints" text="Choose by surface. Each product is matched with the right primer and finish." img="/images/images.jfif" />
      <section className="sec"><div className="w"><ProductGrid /></div></section>
    </>
  );
}
