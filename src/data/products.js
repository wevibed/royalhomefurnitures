// Royal Home showroom navigation and category configuration.
import { SHOWROOM_PIECES } from './showroomPieces.js';
export const CATEGORIES = [
  { id: 'living', label: 'Recliners & Lounge Suites' },
  { id: 'bedroom', label: 'Bedroom Furniture' },
  { id: 'kids', label: 'Children’s Beds' },
  { id: 'vanities', label: 'Bathroom Vanities' },
  { id: 'outdoor', label: 'Outdoor Furniture' },
];
export const ROOMS = {
  living: { label: 'Living room', p: [-6.0, 1.6, 3.9], l: [-10.4, 0.9, -2.2] },
  bedroom: { label: 'Bedroom', p: [0, 1.6, 3.2], l: [0, 1, -3.5] },
  dining: { label: 'Vanities & outdoor', p: [9.8, 1.6, 3.6], l: [10, 0.9, -2] },
};
export const ROOM_OF_CATEGORY = { living: 'living', bedroom: 'bedroom', kids: 'bedroom', vanities: 'dining', outdoor: 'dining' };
export const PRODUCTS = [];
export const BY_ID = {};
export const FEATURED = SHOWROOM_PIECES;
