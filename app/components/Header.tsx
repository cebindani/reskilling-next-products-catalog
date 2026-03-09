'use client';
import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import { useAuth } from '@/src/contexts/AuthContext';
import styles from './Header.module.scss';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) return null;

  return (
    <header className={styles.header}>
      <div className={styles.header__navigation}>
        <BackButton label="Voltar para Catálogo" />
      </div>

      <h1 className={styles.header__title}>Garage Games</h1>

      <div className={styles.header__auth}>
        {!isAuthenticated ? (
          <Link href="/login" className={`${styles.header__button} ${styles.header__buttonLogin}`}>
            Login
          </Link>
        ) : (
          <div className={styles.header__authGroup}>
            <Link
              href="/profile"
              className={`${styles.header__button} ${styles.header__buttonProfile}`}
            >
              Perfil
            </Link>
            <button
              onClick={logout}
              className={`${styles.header__button} ${styles.header__buttonLogout}`}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
