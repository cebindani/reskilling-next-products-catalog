import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/src/types/product';
import ConsoleChips from './ConsoleChips';
import StarRatingComponent from './RatingComponent';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard - Componente para exibir informações resumidas do produto.
 * - Imagem, título, console, descrição curta, avaliação, badges e preço.
 * - Botão de ação para detalhes ou indisponibilidade.
 * - Responsivo e acessível.
 * @param product - Objeto do produto a ser exibido
 * @returns JSX.Element
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{product.title}</h3>
          <ConsoleChips label={product.console} />
        </div>

        <p className={styles.description}>{product.description}</p>

        <StarRatingComponent rating={product.rating} countReviews={product.reviews} />

        <div className={styles.badges}>
          <span className={styles.badge}>{product.condition}</span>
          <span className={styles.badge}>{product.releaseYear}</span>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
          <button
            className={`${styles.button} ${product.inStock ? styles.buttonAvailable : styles.buttonUnavailable}`}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Ver Detalhes' : 'Indisponível'}
          </button>
        </div>
      </div>
    </Link>
  );
}
