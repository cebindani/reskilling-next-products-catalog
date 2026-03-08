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

          <BackButton label="Voltar para Catálogo" />
        </div>
      </main>
    );
  }

  return (
    <main className={styles.profile}>
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
              <button
                onClick={logout}
                className={`${styles.profileButton} ${styles.profileButtonLogout}`}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      <ProfileCartList />
      <BackButton label="Voltar para Catálogo" />
    </main>
  );
}
