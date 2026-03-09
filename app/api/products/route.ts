import { NextResponse } from 'next/server';
import { getAllProducts } from '@/src/data/products';
import type { ProductListResponse } from '@/src/types/product';

/**
 * GET /api/products
 * Retorna lista de todos os produtos
 */
export async function GET(): Promise<NextResponse> {
  try {
    const allProducts = getAllProducts();

    if (allProducts == undefined) {
      throw new Error('Lista de produtos não encontrada');
    }

    const productsListResponse: ProductListResponse = {
      products: allProducts,
      total: allProducts.length,
    };

    return NextResponse.json(productsListResponse, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json({ error: 'Erro ao buscar produtos' }, { status: 500 });
  }
}
