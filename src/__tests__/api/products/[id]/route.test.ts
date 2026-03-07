import { GET } from '@/api/products/[id]/route';

describe('GET /api/products/[id]', () => {
  it('given a valid ID should return a product with status code 200', async () => {
    const params = Promise.resolve({ id: '1' });
    const response = await GET(new Request('http://localhost/api/products/1'), {
      params,
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('product');
    expect(data.product).not.toBeNull();
  });

  it('given an inexistent ID should return status code 404', async () => {
    const params = Promise.resolve({ id: '999' });
    const response = await GET(new Request('http://localhost/api/products/999'), { params });

    expect(response.status).toBe(404);
    const data = await response.json();
    expect(data).toHaveProperty('error');
  });

  it('given an empty ID should return status code 400', async () => {
    const params = Promise.resolve({ id: '' });
    const response = await GET(new Request('http://localhost/api/products/'), {
      params,
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty('error');
  });

  it('should return product with correct structure', async () => {
    const params = Promise.resolve({ id: '2' });
    const response = await GET(new Request('http://localhost/api/products/2'), {
      params,
    });

    const data = await response.json();
    const product = data.product;

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('description');
    expect(product).toHaveProperty('longDescription');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('console');
    expect(product).toHaveProperty('releaseYear');
    expect(product).toHaveProperty('condition');
    expect(product).toHaveProperty('rating');
    expect(product).toHaveProperty('reviews');
    expect(product).toHaveProperty('inStock');
    expect(product).toHaveProperty('slug');
    expect(product).toHaveProperty('image');
  });
});
