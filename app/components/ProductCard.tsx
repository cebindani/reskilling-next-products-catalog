import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/src/types/product';
import ConsoleChips from './ConsoleChips';
import StarRatingComponent from './RatingComponent';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.title}</h3>
            <ConsoleChips label={product.console} />
          </div>

          <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {product.description}
          </p>

          <StarRatingComponent rating={product.rating} countReviews={product.reviews} />

          {/* Condition and Year */}
          <div className="mb-3 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
              {product.condition}
            </span>
            <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
              {product.releaseYear}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              R$ {product.price.toFixed(2)}
            </span>
            <button
              className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-500'
              }`}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Ver Detalhes' : 'Indisponível'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
