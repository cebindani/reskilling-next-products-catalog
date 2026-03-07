import { NextResponse } from 'next/server';
import { getAllProducts } from '@/src/data/products';
import type { ProductListResponse } from '@/src/data/products';

/**
 * GET /api/products
 * Retorna lista de todos os produtos
 */
export async function GET(): Promise<NextResponse> {
  try {
    const productsList = getAllProducts();

    if (productsList == undefined) {
      throw new Error('Lista de produtos não encontrada');
    }

    const response: ProductListResponse = {
      products: productsList,
      total: productsList.length,
    };

    console.log(`Obtendo lista de produtos. Total: ${productsList.length}`);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json({ error: 'Erro ao buscar produtos' }, { status: 500 });
  }
}
