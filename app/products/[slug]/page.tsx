import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import StarRatingComponent from '@/components/RatingComponent';
import ConsoleChips from '@/components/ConsoleChips';
import StockStatus from '@/components/StockStatus';
import Chips from '@/components/Chips';

async function getProductDetails(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${slug}`);

    const data = await res.json();
    return data.product || null;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductDetails(slug);

  if (!product) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.longDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductDetails(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <Header />
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-6 w-full">
                <StockStatus inStock={product.inStock} />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                    {product.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <ConsoleChips label={product.console} size={'medium'} />
                    <Chips label={product.releaseYear.toString()} variant="purple" />
                    <Chips label={product.condition} variant="amber" />
                  </div>
                </div>

                <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>

                <div className="mb-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                    Sobre o Produto
                  </h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                    {product.longDescription}
                  </p>
                </div>

                <StarRatingComponent rating={product.rating} countReviews={product.reviews} />
              </div>

              {/* Price and CTA */}
              <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Preço</p>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white">
                    R$ {product.price.toFixed(2)}
                  </p>
                </div>

                <button
                  disabled={!product.inStock}
                  className={`w-full rounded-lg px-6 py-4 text-lg font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600'
                      : 'cursor-not-allowed bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-500'
                  }`}
                >
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
