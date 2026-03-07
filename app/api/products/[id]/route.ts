import { NextResponse } from 'next/server';
import { getProductById, getProductBySlug } from '@/src/data/products';
import type { ProductDetailResponse } from '@/src/data/products';

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
    const { id } = await params;

    await new Promise((resolve) => setTimeout(resolve, 100));

    if (!id) {
      return NextResponse.json({ error: 'ID ou slug do produto é necessário' }, { status: 400 });
    }

    let product = getProductBySlug(id);

    // Se não encontrar, tenta por id
    if (!product) {
      product = getProductById(id);
    }

    if (!product) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
    }

    console.log(`Obtendo dados do produto ${product.title} (identifier: ${id})`);
    const response: ProductDetailResponse = {
      product,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return NextResponse.json({ error: 'Erro ao buscar produto' }, { status: 500 });
  }
}
