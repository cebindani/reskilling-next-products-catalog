import { getProductBySlug, getProductById, getAllProductSlugs, products } from '../data/products';

describe('Products Data Utilities', () => {
  describe('getProductBySlug tests', () => {
    it('given a valid slug, should return a product', () => {
      const product = getProductBySlug('elden-ring');
      expect(product).toBeDefined();
      expect(product?.title).toBe('Elden Ring');
      expect(product?.slug).toBe('elden-ring');
    });

    it('given an invalid slug, should return undefined', () => {
      const product = getProductBySlug('invalid-slug');
      expect(product).toBeUndefined();
    });
  });

  describe('getProductById tests', () => {
    it('given a valid id should return a product', () => {
      const product = getProductById('1');
      expect(product).toBeDefined();
      expect(product?.id).toBe('1');
      expect(product?.title).toBe('Elden Ring');
    });

    it('given an invalid id should return undefined', () => {
      const product = getProductById('999');
      expect(product).toBeUndefined();
    });
  });

  describe('getAllProductSlugs tests', () => {
    it('should return an array of all product slugs', () => {
      const slugs = getAllProductSlugs();
      expect(Array.isArray(slugs)).toBe(true);
      expect(slugs.length).toBeGreaterThan(0);
    });

    it('should return the correct number of slugs', () => {
      const slugs = getAllProductSlugs();
      expect(slugs.length).toBe(products.length);
    });

    it('should contain expected slugs', () => {
      const slugs = getAllProductSlugs();
      expect(slugs).toContain('elden-ring');
      expect(slugs).toContain('zelda-tears-kingdom');
      expect(slugs).toContain('cyberpunk-2077');
    });

    it('should not contain duplicate slugs', () => {
      const slugs = getAllProductSlugs();
      const uniqueSlugs = new Set(slugs);
      expect(slugs.length).toBe(uniqueSlugs.size);
    });
  });

  describe('products data', () => {
    it('should have correct product structure', () => {
      products.forEach((product) => {
        expect(product.id).toBeDefined();
        expect(product.title).toBeDefined();
        expect(product.description).toBeDefined();
        expect(product.longDescription).toBeDefined();
        expect(product.price).toBeGreaterThan(0);
        expect(product.console).toBeDefined();
        expect(product.releaseYear).toBeGreaterThan(0);
        expect(['Novo', 'Usado']).toContain(product.condition);
        expect(product.rating).toBeGreaterThan(0);
        expect(product.rating).toBeLessThanOrEqual(5);
        expect(product.reviews).toBeGreaterThanOrEqual(0);
        expect(typeof product.inStock).toBe('boolean');
        expect(product.slug).toBeDefined();
      });
    });
  });
});
