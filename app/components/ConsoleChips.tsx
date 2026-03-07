import React from 'react';
import Chips from './Chips';

interface ConsoleChipsProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
}

const consoleVariants: Record<string, React.CSSProperties> = {
  'PlayStation 5': {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
  },
  'Xbox Series X/S': {
    backgroundColor: '#dcfce7',
    color: '#15803d',
  },
  'Nintendo Switch': {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
  PC: {
    backgroundColor: '#f3e8ff',
    color: '#6b21a8',
  },
  'PlayStation 4': {
    backgroundColor: '#e0e7ff',
    color: '#3730a3',
  },
  'Xbox One': {
    backgroundColor: '#fef3c7',
    color: '#b45309',
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  small: {
    padding: '0.125rem 0.5rem',
    fontSize: '0.75rem',
  },
  medium: {
    padding: '0.25rem 0.75rem',
    fontSize: '0.875rem',
  },
  large: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
  },
};

/**
 * ConsoleChips Component
 * Extensão de Chips especializada para exibir nomes de consoles com cores específicas
 *
 * @param label - O nome do console do produto
 * @param size - O tamanho do chip: 'small' | 'medium' | 'large'
 */
export default function ConsoleChips({ label, size = 'small' }: ConsoleChipsProps) {
  const consoleStyle = consoleVariants[label] || {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
  };

  const customStyle = { ...sizeStyles[size], ...consoleStyle };

  return <Chips label={label} style={customStyle} />;
}
