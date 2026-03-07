import { NextResponse } from 'next/server';
import { getProductById } from '@/src/data/products';
import type { ProductDetailResponse } from '@/src/data/products';

/**
 * GET /api/products/[id]
 * Retorna detalhes de um produto específico pelo ID
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;

    await new Promise((resolve) => setTimeout(resolve, 100));

    if (!id) {
      return NextResponse.json({ error: 'ID do produto é necessário' }, { status: 400 });
    }

    const product = getProductById(id);

    if (!product) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }

    const productDetailResponse: ProductDetailResponse = {
      product,
    };

    return NextResponse.json(productDetailResponse, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return NextResponse.json({ error: 'Erro ao buscar produto' }, { status: 500 });
  }
}
