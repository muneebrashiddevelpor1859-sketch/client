import { Suspense } from 'react';
import PageHero from '@/components/PageHero';
import VisitForm from '@/components/VisitForm';
import { SITE } from '@/lib/data';

export const metadata = { title: 'Contact', description: 'Call, WhatsApp or send a request for a free quote.' };

export default function Contact() {
  return (
    <>
      <PageHero title="Get your free quote" text="Call us, message on WhatsApp or send the form and we’ll reply with shade suggestions and a price." img="/images/poster.jpg" video="/videos/149978-797471118_medium.mp4" />
      <section className="sec"><div className="w two">
        <div className="info">
          <p><b>Call or WhatsApp</b><a className="ph" href={`tel:${SITE.tel}`}>{SITE.phoneDisplay}</a></p>
          <div className="acts"><a className="btn" href={`tel:${SITE.tel}`}>Call now</a><a className="btn o" href={SITE.wa}>WhatsApp</a></div>
          <p><b>Shop hours</b>{SITE.hours}</p>
          <p style={{ margin: 0 }}><b>Address</b>{SITE.address}</p>
        </div>
        <div className="formcard"><Suspense fallback={null}><VisitForm /></Suspense></div>
      </div></section>
    </>
  );
}
