import { GET } from '@/api/products/route';

describe('GET /api/products', () => {
  it('should return a list of all products with status 200', async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('products');
    expect(data).toHaveProperty('total');
    expect(Array.isArray(data.products)).toBe(true);
    expect(data.total).toBe(data.products.length);
  });

  it('total should return correct number of products', async () => {
    const response = await GET();
    const data = await response.json();
    expect(data.products.length).toBe(data.total);
  });

  it('should return products with correct structure', async () => {
    const response = await GET();
    const data = await response.json();

    const product = data.products[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('description');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('console');
    expect(product).toHaveProperty('releaseYear');
    expect(product).toHaveProperty('condition');
    expect(product).toHaveProperty('rating');
    expect(product).toHaveProperty('reviews');
    expect(product).toHaveProperty('inStock');
    expect(product).toHaveProperty('slug');
  });
});
