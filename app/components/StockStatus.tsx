import styles from './StockStatus.module.scss';

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
  const statusClass = inStock ? styles.statusInStock : styles.statusOutOfStock;

  return (
    <div className={`${styles.status} ${statusClass}`}>
      {inStock ? <>✓ Em Estoque</> : <>✕ Fora de Estoque</>}
    </div>
  );
}
