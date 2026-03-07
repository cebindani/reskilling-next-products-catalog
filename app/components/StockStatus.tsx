interface StockStatusProps {
  inStock: boolean;
}

/**
 * StockStatus Component
 * Componente para exibir o status de estoque de um produto
 * Exibe "Em Estoque" com fundo verde se inStock for true, ou "Fora de Estoque" com fundo vermelho se false.
 *
 * @param inStock - Indica se o produto está em estoque ou não
 * @returns JSX.Element com o status de estoque estilizado
 */
export default function StockStatus({ inStock }: StockStatusProps) {
  const statusStyle = {
    width: '100%',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    textAlign: 'center' as const,
    fontWeight: '500',
    backgroundColor: inStock ? '#dcfce7' : '#fee2e2',
    color: inStock ? '#15803d' : '#991b1b',
  };

  return <div style={statusStyle}>{inStock ? <>✓ Em Estoque</> : <>✕ Fora de Estoque</>}</div>;
}
