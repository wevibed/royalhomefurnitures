// Illustrative Royal Home showroom pieces. Not confirmed product replicas or stock.
const NOTE = 'Illustrative 3D concept model for this prospect demonstration. Confirm Royal Home Furniture’s actual designs, materials, dimensions and availability before publication.';
const RAW = [
  { id: 'royal-recliner', name: 'Recliner Collection Concept', category: 'living', gallery: 'royal-recliner-double', room: 'living', model: 'recliner', params: { seats: 2 }, pos: [-7.7, -3.37], ry: 0, sh: [3.2, 2.9], dist: 4.6, ly: 0.7, hy: 1.75 },
  { id: 'royal-lounge-suite', name: 'Lounge Suite Concept', category: 'living', gallery: 'royal-lounge-suite', room: 'living', model: 'sofa', params: { seats: 3, mat: 'leather' }, pos: [-13.16, 1.5], ry: Math.PI / 2, sh: [3.3, 4.3], dist: 4.6, ly: 0.7, hy: 1.7 },
  { id: 'royal-sectional', name: 'L-Shape Lounge Concept', category: 'living', gallery: 'royal-sectional', room: 'living', model: 'lshape', params: {}, pos: [-12.15, -3.28], ry: 0, scale: 0.7, sh: [5.4, 3.2], dist: 4.1, ly: 0.6, hy: 1.4 },
  { id: 'royal-bedroom', name: 'Bedroom Suite Concept', category: 'bedroom', gallery: 'royal-bedroom-suite', room: 'bedroom', model: 'bed', params: { variant: 'standard', w: 1.84 }, pos: [-3.1, -4.14], ry: 0, sh: [3.6, 1.2], dist: 3.8, ly: 1.2, hy: 2.5 },
  { id: 'royal-kids-bed', name: 'Children’s Bed Concept', category: 'kids', gallery: 'royal-kids-bed', room: 'bedroom', model: 'bed', params: { variant: 'standard', w: 1.25 }, pos: [0, -3.27], ry: 0, sh: [3.1, 3.0], dist: 4.4, ly: 0.8, hy: 1.95 },
  { id: 'royal-headboard', name: 'Headboard Concept', category: 'bedroom', gallery: 'royal-headboard', room: 'bedroom', model: 'headboard', params: {}, pos: [2.9, -3.32], ry: 0, sh: [2.3, 2.9], dist: 4.2, ly: 0.8, hy: 1.8 },
  { id: 'royal-vanity', name: 'Bathroom Vanity Concept', category: 'vanities', gallery: 'royal-vanity', room: 'dining', model: 'media', params: {}, pos: [10, -1.7], ry: Math.PI / 2, vy: 0, sh: [2.5, 3.7], dist: 3.9, ly: 0.6, hy: 1.5 },
  { id: 'royal-outdoor', name: 'Outdoor Lounge Concept', category: 'outdoor', gallery: 'royal-outdoor-swing', room: 'dining', model: 'sofa', params: { seats: 2, mat: 'umber' }, scale: 0.8, pos: [12.2, -4.18], ry: 0, sh: [3.4, 1.2], dist: 4.2, ly: 1.1, hy: 2.35 },
];
const LABEL = { living: 'Recliners & Lounge Suites', bedroom: 'Bedroom Furniture', kids: 'Children’s Beds', vanities: 'Bathroom Vanities', outdoor: 'Outdoor Furniture' };
export const SHOWROOM_PIECES = RAW.map((r) => {
  const { id, name, category, gallery, room, ...cfg } = r;
  return { id, name, category, categoryLabel: LABEL[category], price: null, model: r.model, params: r.params || {}, gallery, photo: null, reference: null, description: NOTE, details: [], showroom: { room, ...cfg } };
});
