# Qazi Electro Paint Master (Next.js frontend)

Run locally:

    npm install
    npm run dev        # http://localhost:3000

Production:

    npm run build
    npm start

Where to edit:
- `lib/data.js`: phone, hours, address, products, colours, FAQ, sample reviews
- `app/globals.css`: all styling
- `components/VisitForm.js`: form is frontend-only; connect your backend/email at the TODO

Media (replace with your own photos and videos, keeping the same file names):
- `public/videos/6474084-uhd_3840_2160_25fps.mp4` (home hero)
- `public/videos/paint-flow.mp4` (contact page)
- `public/videos/colour-strokes.mp4` (home colour banner and colours page)
- `public/images/*.jpg` (poster, room-teal, room-terracotta, strokes, wall)
- `public/images/painter-at-work.jpg` (home hero video poster and fallback)
The black linear gradient over every background is in `app/globals.css` (`.shade-lin`, `.shade-up`).
