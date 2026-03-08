import styles from './Chips.module.scss';

interface ChipsProps {
  label: string;
  variant?: 'purple' | 'amber' | 'blue' | 'green' | 'red';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

/**
 * Chips Component
 * Componente para exibir chips/badges com labels
 *
 * @param label - Texto a ser exibido no chip
 * @param variant - Cor do chip: 'purple' | 'amber' | 'blue' | 'green' | 'red'
 * @param size - Tamanho do chip: 'small' | 'medium' | 'large'
 * @param className - Classe CSS adicional opcional
 * @returns JSX.Element com o chip estilizado
 */
export default function Chips({
  label,
  variant = 'purple',
  size = 'medium',
  className,
}: ChipsProps) {
  const variantClass =
    styles[`variant${variant[0]?.toUpperCase()}${variant.slice(1)}` as keyof typeof styles];
  const sizeClass = styles[`size${size[0]?.toUpperCase()}${size.slice(1)}` as keyof typeof styles];

  const classes = [styles.chip, variantClass, sizeClass, className].filter(Boolean).join(' ');

  return <span className={classes}>{label}</span>;
}
