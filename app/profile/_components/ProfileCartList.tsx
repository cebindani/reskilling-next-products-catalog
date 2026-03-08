'use client';

import { useState } from 'react';
import styles from './ProfileCartList.module.scss';

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

const CART_STORAGE_KEY = 'cartItems';

export default function ProfileCartList() {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];

    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleRemoveItem = (itemId: string) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  return (
    <section className={styles.profileCart}>
      <h2 className={styles.profileCartTitle}>Meu Carrinho</h2>

      {items.length === 0 ? (
        <p className={styles.profileCartEmpty}>Seu carrinho esta vazio.</p>
      ) : (
        <ul className={styles.profileCartList}>
          {items.map((item) => (
            <li key={item.id} className={styles.profileCartItem}>
              <div className={styles.profileCartItemContent}>
                <span className={styles.profileCartItemTitle}>{item.title}</span>
                <span className={styles.profileCartItemMeta}>
                  Qtd: {item.quantity} | R$ {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <button
                type="button"
                className={styles.profileCartRemoveButton}
                onClick={() => handleRemoveItem(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
