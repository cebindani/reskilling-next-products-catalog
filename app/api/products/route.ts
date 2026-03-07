import { NextResponse } from 'next/server';
import { products } from '@/src/data/products';
import type { ProductListResponse } from '@/src/data/products';

/**
 * GET /api/products
 * Retorna lista de todos os produtos
 */
export async function GET(): Promise<NextResponse> {
  try {
    const response: ProductListResponse = {
      products: products,
      total: products.length,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json({ error: 'Erro ao buscar produtos' }, { status: 500 });
  }
}
