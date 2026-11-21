export type TourStop = { title: string; chapter: string; description: string; image: string; alt: string }

const photo = (id: string, width = 1800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const residences = [
  {
    name: 'Villa Néro', slug: 'villa-nero', location: 'Ibiza, Spain', type: 'Private residence', price: '€3.1M', status: 'New release', size: '410 m²', beds: '5 bedrooms', cover: photo('photo-1600607687939-ce8a6c25118c', 2200),
    summary: 'A quiet frame for the horizon.', description: 'Set lightly into the limestone hillside, Villa Néro opens itself to the changing light of the Mediterranean. Five private suites, generous terraces and a long reflecting pool create a home that feels both elemental and entirely your own.',
    tour: [
      { chapter: '01 · The land', title: 'A beginning in the landscape', description: 'Before a line was drawn, we spent time with the land—mapping the mature pines, tracing the sun and protecting the natural contours that make this coastline singular.', image: photo('photo-1470770841072-f978cf4d019e'), alt: 'Mediterranean landscape and hillside at golden hour' },
      { chapter: '02 · The making', title: 'Built with a lighter touch', description: 'Local stone, low-impact construction and craft traditions guide the making of the house. The architecture sits close to the earth, framed by the trees that were here first.', image: photo('photo-1503387762-592deb58ef4e'), alt: 'Architectural model and design process on a studio table' },
      { chapter: '03 · The arrival', title: 'The home, in its setting', description: 'From the lane, the residence reveals itself gradually. A low stone wall gives way to an open court, and the first view is always the water beyond.', image: photo('photo-1600607687920-4e2a09cf159d'), alt: 'Modern stone residence among Mediterranean planting' },
      { chapter: '04 · The threshold', title: 'A welcome shaped by light', description: 'The entrance is deliberately quiet: a cool, tactile pause between the garden and the open living spaces beyond.', image: photo('photo-1600210492486-724fe5c67fb0'), alt: 'Warm entry hall with natural stone and soft daylight' },
      { chapter: '05 · The living room', title: 'Room to gather, room to breathe', description: 'Sliding glass dissolves the boundary between inside and out. Natural oak, textured linen and a low hearth make the living room the gentle centre of the home.', image: photo('photo-1600607687939-ce8a6c25118c'), alt: 'Calm contemporary living room with garden views' },
      { chapter: '06 · The private suite', title: 'A softer kind of retreat', description: 'The principal suite opens to its own shaded terrace. Morning light, generous proportions and a considered material palette make this a room for restoration.', image: photo('photo-1616486338812-3dadae4b4ace'), alt: 'Quiet bedroom with natural materials and soft daylight' },
      { chapter: '07 · The horizon', title: 'An outside room of your own', description: 'The final stop is the terrace: a long pool, warm stone beneath your feet and the island stretching into the distance.', image: photo('photo-1600607687920-4e2a09cf159d'), alt: 'Terrace and pool overlooking a distant coastal horizon' },
    ],
  },
  {
    name: 'Casa Lume', slug: 'casa-lume', location: 'Comporta, Portugal', type: 'Coastal retreat', price: '€2.4M', status: 'Available', size: '320 m²', beds: '4 bedrooms', cover: photo('photo-1600210492486-724fe5c67fb0', 2200),
    summary: 'A slower rhythm, close to the sea.', description: 'A measured retreat in the pine forests of Comporta, Casa Lume pairs Portuguese craft with an easy openness to the coastal landscape.',
    tour: [],
  },
  {
    name: 'The Meridian', slug: 'the-meridian', location: 'Lisbon, Portugal', type: 'City residence', price: '€890K', status: 'Almost complete', size: '138 m²', beds: '3 bedrooms', cover: photo('photo-1600607687920-4e2a09cf159d', 2200),
    summary: 'A considered city address.', description: 'A contemporary city home that brings calm, crafted materials and generous daylight to the centre of Lisbon.',
    tour: [],
  },
]

export const projects = [
  { name: 'Quinta do Lago', location: 'Algarve, Portugal', status: 'Complete', image: photo('photo-1600607687939-ce8a6c25118c') },
  { name: 'Casa Lume', location: 'Comporta, Portugal', status: 'In progress', image: photo('photo-1600210492486-724fe5c67fb0') },
  { name: 'The Meridian', location: 'Lisbon, Portugal', status: 'Taking shape', image: photo('photo-1600607687920-4e2a09cf159d') },
]
