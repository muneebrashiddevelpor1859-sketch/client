import PageHero from '@/components/PageHero';
import Calculator from '@/components/Calculator';

export const metadata = { title: 'Paint calculator', description: 'Estimate how much paint your room needs.' };

export default function CalculatorPage() {
  return (
    <>
      <PageHero title="Paint calculator" text="Enter your room size to get a quick estimate of the paint you need." img="/images/wall.jpg" />
      <section className="sec"><div className="w"><Calculator /></div></section>
    </>
  );
}
