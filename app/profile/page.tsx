'use client';

import { useState, useSyncExternalStore } from 'react';
import { User } from '@/src/types/user';
import Link from 'next/link';
import { useAuth } from '@/src/contexts/AuthContext';
import ProfileCartList from './_components/ProfileCartList';
import styles from './profile.module.scss';
import BackButton from '@/components/BackButton';

/**
 * CSR - Página de perfil do usuário.
 * Integrada com AuthContext para autenticação.
 * Dados do usuário persistem em localStorage.
 */
export default function ProfilePage() {
  const { isAuthenticated, logout } = useAuth();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [isEditing, setIsEditing] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('userData');
  });
  const [user, setUser] = useState<User>(() => {
    if (typeof window === 'undefined') {
      return {
        id: '1',
        name: 'Dino da Silva Sauro',
        email: 'dino@silvasauromail.com',
        phone: '(11) 99999-9999',
      };
    }

    const savedUser = localStorage.getItem('userData');
    if (savedUser) {
      return JSON.parse(savedUser);
    }

    return {
      id: '1',
      name: 'Dino da Silva Sauro',
      email: 'dino@silvasauromail.com',
      phone: '(11) 99999-9999',
    };
  });

  const handleSave = () => {
    localStorage.setItem('userData', JSON.stringify(user));
    setIsEditing(false);
  };

  const handleCancel = () => {
    const savedUser = localStorage.getItem('userData');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsEditing(false);
  };

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <main className={styles.profileUnauthenticated}>
        <h1 className={styles.profileMessage}>Faça login para acessar seu perfil</h1>
        <div className={styles.profileUnauthenticatedActions}>
          <Link href="/login" className={`${styles.profileButton} ${styles.profileButtonEdit}`}>
            Ir para Login
          </Link>

          <BackButton label="Voltar" previousPage />
        </div>
      </main>
    );
  }

  return (
    <main className={styles.profile}>
      <header className={styles.profileNav}>
        <BackButton label="Voltar" previousPage />

        <div className={styles.profileNavActions}>
          <Link href="/" className={`${styles.profileNavButton} ${styles.profileNavButtonCatalog}`}>
            Ir para Catálogo
          </Link>

          <button
            type="button"
            onClick={logout}
            className={`${styles.profileNavButton} ${styles.profileNavButtonLogout}`}
          >
            Logout
          </button>
        </div>
      </header>

      <h1 className={styles.profileTitle}>Perfil do Usuário</h1>

      <div className={styles.profileCard}>
        <div className={styles.profileFieldGroup}>
          <label className={styles.profileLabel}>Nome</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            disabled={!isEditing}
            className={styles.profileInput}
          />
        </div>

        <div className={styles.profileFieldGroup}>
          <label className={styles.profileLabel}>Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            disabled={!isEditing}
            className={styles.profileInput}
          />
        </div>

        <div className={styles.profileFieldGroup}>
          <label className={styles.profileLabel}>Telefone</label>
          <input
            type="tel"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            disabled={!isEditing}
            className={styles.profileInput}
          />
        </div>

        <div className={styles.profileActions}>
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className={`${styles.profileButton} ${styles.profileButtonSave}`}
              >
                Salvar
              </button>
              <button
                onClick={handleCancel}
                className={`${styles.profileButton} ${styles.profileButtonCancel}`}
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className={`${styles.profileButton} ${styles.profileButtonEdit}`}
              >
                Editar
              </button>
            </>
          )}
        </div>
      </div>

      <ProfileCartList />
    </main>
  );
}
