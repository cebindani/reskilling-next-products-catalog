import { Product } from '@/src/types/product';
import { getAllProducts } from '@/src/data/products';
import ProductCard from './components/ProductCard';
import { SITE_METADATA } from '@/src/config/constants';
import styles from './page.module.scss';

export const revalidate = 600; // ISR: revalidate a cada 10 minutos

export default async function Home() {
  const products = getAllProducts() || [];

  return (
    <main className={styles.home}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>{SITE_METADATA.title}</h1>
          <p className={styles.description}>{SITE_METADATA.description}</p>
          <div className={styles.productCount}>
            Total de produtos: <span className={styles.productCountBold}>{products.length}</span>
          </div>
        </header>

        <div className={styles.productsWrapper}>
          <div className={styles.productsGrid}>
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
