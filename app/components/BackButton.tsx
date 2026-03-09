'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './BackButton.module.scss';

interface BackButtonProps {
  label: string;
  previousPage?: boolean;
  fallbackHref?: string;
}

/**
 * BackButton - Componente de botão para navegação de volta.
 * @param label - Texto a ser exibido no botão
 * @param previousPage - Quando true, volta no histórico do navegador
 * @param fallbackHref - Fallback quando não há histórico para voltar
 * @returns JSX.Element
 */
export default function BackButton({
  label,
  previousPage = false,
  fallbackHref = '/',
}: BackButtonProps) {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  if (previousPage) {
    return (
      <button
        type="button"
        onClick={handleGoBack}
        aria-label="Voltar para página anterior"
        className={styles.backButton}
      >
        <span className={styles.backButtonIcon} aria-hidden="true">
          ←
        </span>
        <span className={styles.backButtonLabel}>{label}</span>
      </button>
    );
  }

  return (
    <Link
      role="button"
      aria-roledescription="Voltar"
      href={fallbackHref}
      className={styles.backButton}
    >
      <span className={styles.backButtonIcon} aria-hidden="true">
        ←
      </span>
      <span className={styles.backButtonLabel}>{label}</span>
    </Link>
  );
}
