import { Product } from '@/src/types/product';
import { getAllProducts } from '@/src/data/products';
import ProductCard from './components/ProductCard';
import { SITE_METADATA } from '@/src/config/constants';

export const revalidate = 600; // ISR: revalidate a cada 10 minutos

export default async function Home() {
  const products = getAllProducts() || [];
  const productsToDisplay = products.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            {SITE_METADATA.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {SITE_METADATA.description}
          </p>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Total de produtos: <span className="font-semibold">{products.length}</span>
          </div>
        </header>

        {/* Products Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productsToDisplay.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* View All Products Link */}
        {products.length > productsToDisplay.length && (
          <div className="mt-12 text-center">
            <a
              href="/products"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700"
            >
              Ver Todos os Produtos ({products.length})
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
