import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import StarRatingComponent from '@/components/RatingComponent';
import ConsoleChips from '@/components/ConsoleChips';
import StockStatus from '@/components/StockStatus';
import Chips from '@/components/Chips';
import AddToCartButton from '@/components/AddToCartButton';
import styles from './page.module.scss';

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
    <main className={styles.productPage}>
      <Header />
      <div className="container">
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.stockSection}>
                <StockStatus inStock={product.inStock} />
              </div>
            </div>

            <div className={styles.infoSection}>
              <div>
                <div className={styles.headerSection}>
                  <h1 className={styles.title}>{product.title}</h1>
                  <div className={styles.chipsContainer}>
                    <ConsoleChips label={product.console} size={'medium'} />
                    <Chips label={product.releaseYear.toString()} variant="purple" />
                    <Chips label={product.condition} variant="amber" />
                  </div>
                </div>

                <p className={styles.description}>{product.description}</p>

                <div className={styles.aboutSection}>
                  <h3 className={styles.aboutTitle}>Sobre o Produto</h3>
                  <p className={styles.aboutText}>{product.longDescription}</p>
                </div>

                <StarRatingComponent rating={product.rating} countReviews={product.reviews} />
              </div>

              <div className={styles.priceSection}>
                <div className={styles.priceContainer}>
                  <p className={styles.priceLabel}>Preço</p>
                  <p className={styles.priceValue}>R$ {product.price.toFixed(2)}</p>
                </div>

                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
