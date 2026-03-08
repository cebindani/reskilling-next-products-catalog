'use client';

import { useEffect, useState } from 'react';
import { User } from '@/src/types/user';
import Link from 'next/link';
import Header from '@/components/Header';
import { useAuth } from '@/src/contexts/AuthContext';
import styles from './profile.module.css';

/**
 * CSR - Página de perfil do usuário.
 * Integrada com AuthContext para autenticação.
 * Dados do usuário persistem em localStorage.
 */
export default function ProfilePage() {
  const { isAuthenticated, login, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<User>({
    id: '1',
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('userData');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setIsEditing(true);
    }
    setMounted(true);
  }, []);

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
      <div className={styles.profileUnauthenticated}>
        <h1 className={styles.profileMessage}>Faça login para acessar seu perfil</h1>
        <div className={styles.profileUnauthenticatedActions}>
          <button onClick={login} className={`${styles.profileButton} ${styles.profileButtonEdit}`}>
            Login
          </button>
          <Link href="/" className={styles.profileLink}>
            Voltar para o Catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <Header />

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
    </div>
  );
}
