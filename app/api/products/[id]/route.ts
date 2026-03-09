import { NextResponse } from 'next/server';
import { getProductById, getProductBySlug } from '@/src/data/products';
import type { ProductDetailResponse } from '@/src/types/product';

/**
 * GET /api/products/[id]
 * Retorna detalhes de um produto específico pelo ID ou slug
 * Tenta buscar por slug primeiro, depois por id para maior flexibilidade.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id: productId } = await params;

    await new Promise((resolve) => setTimeout(resolve, 100));

    if (!productId) {
      return NextResponse.json({ error: 'ID ou slug do produto é necessário' }, { status: 400 });
    }

    let product = getProductBySlug(productId);

    // Se não encontrar, tenta por id
    if (!product) {
      product = getProductById(productId);
    }

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
