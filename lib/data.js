export const SITE = {
  name: 'Qazi Electro Paint Master',
  phoneDisplay: '0300 0000000',
  tel: '+923000000000',
  wa: 'https://wa.me/923000000000',
  hours: 'Mon–Sat, 9 am to 8 pm',
  address: 'Your shop address here', // TODO: add real address
};

export const CATS = [['all', 'All'], ['int', 'Interior'], ['ext', 'Exterior'], ['wp', 'Waterproofing'], ['wood', 'Wood and metal'], ['prep', 'Preparation']];

export const PRODUCTS = [
  { n: 'Interior Emulsion', cat: 'int', d: 'Smooth, washable, low-odour finish for living spaces.', f: 'Matt', c: '#a82a0a' },
  { n: 'Silk Luxury Interior', cat: 'int', d: 'Soft sheen that is easy to wipe clean.', f: 'Silk', c: '#8b3fa0' },
  { n: 'Ceiling White', cat: 'int', d: 'Bright, even coverage with no streaks.', f: 'Flat matt', c: '#6b7a90' },
  { n: 'Weather Shield', cat: 'ext', d: 'Exterior paint made for sun, dust and heavy rain.', f: 'Smooth', c: '#0f7b6c' },
  { n: 'Textured Exterior', cat: 'ext', d: 'Hides small cracks and gives walls a rich texture.', f: 'Textured', c: '#b86a00' },
  { n: 'Roof Waterproof Coat', cat: 'wp', d: 'Flexible coating that helps keep roofs and terraces dry.', f: 'Elastic', c: '#1f6fa8' },
  { n: 'Damp Seal Primer', cat: 'wp', d: 'Seals damp-prone walls before the topcoat goes on.', f: 'Primer', c: '#3a8f9c' },
  { n: 'Gloss Enamel', cat: 'wood', d: 'Hard-wearing gloss for doors, grills and metal.', f: 'Gloss', c: '#1f5fd0' },
  { n: 'Wood Varnish', cat: 'wood', d: 'Protects timber and brings out the grain.', f: 'Gloss or satin', c: '#8a5a2b' },
  { n: 'Primer and Wall Putty', cat: 'prep', d: 'The smooth base that helps topcoats last longer.', f: 'Base coat', c: '#4a5565' },
];

export const FAMILIES = [
  { name: 'Reds', shades: [['Brick Red', '#a82a0a'], ['Chilli', '#c8341c'], ['Terracotta', '#b5593a'], ['Coral', '#ee6b5a'], ['Maroon', '#6e1423']] },
  { name: 'Oranges', shades: [['Sunrise', '#f08a24'], ['Saffron', '#f59e0b'], ['Amber', '#d98324'], ['Peach', '#f7c4a5'], ['Copper', '#b8662b']] },
  { name: 'Yellows', shades: [['Mustard', '#f2b705'], ['Lemon', '#f5e050'], ['Honey', '#e0a526'], ['Butter', '#f6e7a1'], ['Gold', '#c99a2e']] },
  { name: 'Greens', shades: [['Lime Leaf', '#8fb83a'], ['Forest', '#2f7a45'], ['Mint', '#a8dcc8'], ['Olive', '#707c3b'], ['Sage', '#9cae94']] },
  { name: 'Blues', shades: [['Sky', '#6ab7e6'], ['Royal Blue', '#1f5fd0'], ['Teal', '#0f7b6c'], ['Navy', '#0e2238'], ['Powder', '#c5dcef']] },
  { name: 'Purples', shades: [['Plum', '#7b3f8f'], ['Orchid', '#b36bc2'], ['Lavender', '#c7b8ea'], ['Grape', '#4d2a6b'], ['Lilac', '#dcd0f0']] },
  { name: 'Pinks', shades: [['Rose', '#e07a9b'], ['Blush', '#f4cdd6'], ['Fuchsia', '#c2347a'], ['Salmon', '#f19a8a'], ['Dusty Pink', '#d9a4ae']] },
  { name: 'Neutrals', shades: [['Warm White', '#f6f1e7'], ['Cream', '#f3e8cf'], ['Sand', '#d9c3a0'], ['Pearl Grey', '#d5d9e0'], ['Charcoal', '#333b47']] },
];


export const PALETTES = [
  { n: 'Coastal Calm', s: ['#c5dcef', '#6ab7e6', '#0f7b6c', '#f6f1e7'] },
  { n: 'Heritage Warm', s: ['#a82a0a', '#d98324', '#f2b705', '#f3e8cf'] },
  { n: 'Modern Neutral', s: ['#f6f1e7', '#d5d9e0', '#6b7a90', '#333b47'] },
];

export const FAQ = [
  ['How do I choose the right colour?', 'Think about the room’s light, your furniture and the mood you want. Use our colour library for ideas, then visit or call us and we’ll help you narrow it down with a physical sample.'],
  ['Can you match a colour I already have?', 'Yes. Bring a painted chip, fabric or a shade code and our computer tinting machine will match it as closely as possible.'],
  ['How much paint do I need?', 'Use our paint calculator for a quick estimate, then confirm the final quantity with us. It depends on wall area, number of coats and the surface.'],
  ['Which finish should I pick?', 'Matt hides small flaws and suits bedrooms and ceilings. Silk is easier to clean for living areas. Gloss suits doors, grills and metal.'],
  ['Do you deliver and arrange painters?', 'Yes, we can arrange delivery to your site and connect you with trusted painters. Call us for details about your area.'],
  ['How should I prepare the surface?', 'Clean off dust and loose paint, fill cracks with putty, sand smooth and apply primer. A good base makes the topcoat last longer.'],
];

// Sample testimonials for the demo. Replace with real customer reviews.
export const REVIEWS = [
  ['Very accurate shade matching. The wall looked exactly like the sample.', 'Sample review, homeowner'],
  ['Clear advice on primer and finish. Delivery was on time.', 'Sample review, contractor'],
  ['Helpful team and a fair quote for our shop repaint.', 'Sample review, shop owner'],
];
