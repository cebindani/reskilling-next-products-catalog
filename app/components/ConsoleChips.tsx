import React from 'react';
import Chips from './Chips';

interface ConsoleChipsProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
}

const consoleVariants: Record<string, 'blue' | 'green' | 'red' | 'purple' | 'amber'> = {
  'PlayStation 5': 'blue',
  'Xbox Series X/S': 'green',
  'Nintendo Switch': 'red',
  PC: 'purple',
  'PlayStation 4': 'blue',
  'Xbox One': 'amber',
};

/**
 * ConsoleChips Component
 * Extensão de Chips especializada para exibir nomes de consoles com cores específicas
 *
 * @param label - O nome do console do produto
 * @param size - O tamanho do chip: 'small' | 'medium' | 'large'
 */
export default function ConsoleChips({ label, size = 'small' }: ConsoleChipsProps) {
  const variant = consoleVariants[label] || 'purple';

  return <Chips label={label} variant={variant} size={size} />;
}
