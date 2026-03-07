import React from 'react';

interface ChipsProps {
  label: string;
  variant?: 'purple' | 'amber' | 'blue' | 'green' | 'red';
  style?: React.CSSProperties;
}

const variantStyles: Record<string, React.CSSProperties> = {
  purple: {
    backgroundColor: '#f3e8ff',
    color: '#6b21a8',
  },
  amber: {
    backgroundColor: '#fef3c7',
    color: '#b45309',
  },
  blue: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
  },
  green: {
    backgroundColor: '#dcfce7',
    color: '#15803d',
  },
  red: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
};

/**
 * Chips Component
 * Componente para exibir chips/badges com labels
 *
 * @param label - Texto a ser exibido no chip
 * @param variant - Cor do chip: 'purple' | 'amber' | 'blue' | 'green' | 'red'
 * @param style - Estilos customizados adicionais
 * @returns JSX.Element com o chip estilizado
 */
export default function Chips({ label, variant = 'purple', style }: ChipsProps) {
  const defaultStyle: React.CSSProperties = {
    display: 'inline-flex',
    borderRadius: '9999px',
    padding: '0.25rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    ...variantStyles[variant],
  };

  const chipsStyle = { ...defaultStyle, ...style };

  return <span style={chipsStyle}>{label}</span>;
}
