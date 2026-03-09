'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/src/contexts/AuthContext';
import styles from './login.module.scss';

/**
 * Página de Login - Route Group (auth)
 * Autenticação via AuthContext com redirecionamento automático
 */
export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isAuthenticated) {
      router.push('/profile');
    }
  }, [isAuthenticated, mounted, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      login();
      router.push('/profile');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!mounted) return null;

  if (isAuthenticated) return null;

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Bem-vindo de volta</h1>
            <p className={styles.loginSubtitle}>
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.loginFieldGroup}>
              <label htmlFor="email" className={styles.loginLabel}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={styles.loginInput}
                required
              />
            </div>

            <div className={styles.loginFieldGroup}>
              <label htmlFor="password" className={styles.loginLabel}>
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={styles.loginInput}
                required
              />
            </div>

            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
          </form>

          <div className={styles.loginDivider}>ou</div>

          <div className={styles.loginFooter}>
            <Link href="/" className={styles.loginLink}>
              ← Voltar para o Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
