// npm run check -> validate the Royal Home concept catalogue and procedural showroom models.
import { CATEGORIES } from '../src/data/products.js';
import { GALLERY_PRODUCTS } from '../src/data/galleryProducts.js';
import { SHOWROOM_PIECES } from '../src/data/showroomPieces.js';
import { buildGalleryConceptModel, buildModel } from '../src/showroom/models.js';

const fail = (message) => { console.error('FAIL', message); process.exitCode = 1; };
const categoryIds = new Set(CATEGORIES.map((category) => category.id));
const galleryIds = new Set();
for (const product of GALLERY_PRODUCTS) {
  if (galleryIds.has(product.id)) fail(`duplicate gallery id: ${product.id}`);
  galleryIds.add(product.id);
  if (!categoryIds.has(product.category)) fail(`unknown category for ${product.id}: ${product.category}`);
  try { buildGalleryConceptModel(product); } catch (error) { fail(`gallery model ${product.id}: ${error.message}`); }
}
const showroomIds = new Set();
for (const piece of SHOWROOM_PIECES) {
  if (showroomIds.has(piece.id)) fail(`duplicate showroom id: ${piece.id}`);
  showroomIds.add(piece.id);
  if (!galleryIds.has(piece.gallery)) fail(`missing gallery link for ${piece.id}`);
  if (!piece.showroom?.pos || !piece.showroom?.room) fail(`missing room placement for ${piece.id}`);
  try {
    const model = buildModel(piece);
    if (!model.children.length) fail(`empty model for ${piece.id}`);
  } catch (error) { fail(`showroom model ${piece.id}: ${error.message}`); }
}
if (!process.exitCode) console.log(`All checks passed: ${GALLERY_PRODUCTS.length} gallery concepts, ${SHOWROOM_PIECES.length} showroom models, ${CATEGORIES.length} categories.`);
