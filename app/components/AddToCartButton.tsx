'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/contexts/AuthContext';
import type { Product } from '@/src/types/product';
import styles from './AddToCartButton.module.scss';

type CartItem = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type AddToCartButtonProps = {
  product: Product;
};

const CART_STORAGE_KEY = 'cartItems';

/**
 * AddToCartButton - Componente para adicionar produtos ao carrinho.
 * - Verifica se o produto está em estoque.
 * - Redireciona para login se usuário não autenticado.
 * - Gerencia carrinho via localStorage.
 * - Feedback visual ao adicionar produto.
 * @param product - Objeto do produto a ser adicionado ao carrinho
 * @returns JSX.Element
 */
export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [feedback, setFeedback] = useState('');

  const handleAddToCart = () => {
    if (!product.inStock) return;

    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    const rawCart = localStorage.getItem(CART_STORAGE_KEY);
    const cart: CartItem[] = rawCart ? JSON.parse(rawCart) : [];

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      const existingItem = cart[existingItemIndex];
      if (existingItem) {
        existingItem.quantity += 1;
      }
    } else {
      cart.push({
        id: product.id,
        slug: product.slug,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));

    setFeedback('Produto adicionado ao carrinho!');
    setTimeout(() => setFeedback(''), 1800);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`${styles.addToCartButton} ${product.inStock ? styles.inStock : styles.outOfStock}`}
      >
        {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
      </button>

      {feedback && <p className={styles.feedback}>{feedback}</p>}
    </div>
  );
}
