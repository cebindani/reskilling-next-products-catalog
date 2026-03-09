import Link from 'next/link';
import styles from './BackButton.module.scss';

interface BackButtonProps {
  label: string;
}

/**
 * BackButton - Componente de botão para navegação de volta.
 * @param label - Texto a ser exibido no botão
 * @returns JSX.Element
 */
export default function BackButton({ label }: BackButtonProps) {
  return (
    <Link role="button" aria-roledescription="Voltar" href="/" className={styles.backButton}>
      <span className={styles.backButtonIcon} aria-hidden="true">
        ←
      </span>
      <span className={styles.backButtonLabel}>{label}</span>
    </Link>
  );
}
