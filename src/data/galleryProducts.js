// Royal Home Furniture prospect-demo catalogue. Illustrative concepts only.
const make = (id, name, category, categoryLabel, model, params = {}) => ({
  id, name, category, categoryLabel, model, params, photo: null, price: null,
  description: `Illustrative ${categoryLabel.toLowerCase()} concept. Contact Royal Home Furniture to confirm available designs, sizes, finishes and pricing.`,
  details: [], showroom: null, reference: '',
});

export const GALLERY_PRODUCTS = [
  make('royal-recliner-single', 'Single Recliner Concept', 'living', 'Recliners & Lounge Suites', 'recliner', { seats: 1 }),
  make('royal-recliner-double', 'Two-Seater Recliner Concept', 'living', 'Recliners & Lounge Suites', 'recliner', { seats: 2 }),
  make('royal-lounge-suite', 'Lounge Suite Concept', 'living', 'Recliners & Lounge Suites', 'sofa', { seats: 3, mat: 'leather' }),
  make('royal-sectional', 'L-Shape Lounge Concept', 'living', 'Recliners & Lounge Suites', 'lshape', {}),
  make('royal-kids-bed', 'Children’s Themed Bed Concept', 'kids', 'Children’s Beds', 'bed', { variant: 'standard', w: 1.25 }),
  make('royal-bedroom-suite', 'Bedroom Suite Concept', 'bedroom', 'Bedroom Furniture', 'bed', { variant: 'standard', w: 1.84 }),
  make('royal-storage-bed', 'Storage Bed Concept', 'bedroom', 'Bedroom Furniture', 'bed', { variant: 'storage' }),
  make('royal-headboard', 'Upholstered Headboard Concept', 'bedroom', 'Bedroom Furniture', 'headboard', {}),
  make('royal-vanity', 'Bathroom Vanity Concept', 'vanities', 'Bathroom Vanities', 'media', {}),
  make('royal-vanity-double', 'Double Bathroom Vanity Concept', 'vanities', 'Bathroom Vanities', 'media', {}),
  make('royal-outdoor-swing', 'Outdoor Swing Lounge Concept', 'outdoor', 'Outdoor Furniture', 'sofa', { seats: 2, mat: 'umber' }),
  make('royal-outdoor-lounge', 'Outdoor Lounge Concept', 'outdoor', 'Outdoor Furniture', 'sofa', { seats: 3, mat: 'fabricDk' }),
];
