import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollMotion from '@/components/ScrollMotion';
import { SITE } from '@/lib/data';

export const metadata = {
  title: { default: 'Qazi Electro Paint Master | Paints and colour matching', template: '%s | Qazi Electro Paint Master' },
  description: 'Interior, exterior, waterproofing and wood finishes with computer colour matching and delivery.',
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollMotion />
        <Header />
        <main>{children}</main>
        <a className="fab" href={`tel:${SITE.tel}`} aria-label={`Call ${SITE.phoneDisplay}`}>Call us</a>
        <Footer />
      </body>
    </html>
  );
}
