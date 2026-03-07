/**
 * ConsoleChips Component
 *
 * Exibe um chip com o nome do console do produto.
 *
 * @prop label - O nome do console do produto
 * @prop size - O tamanho do chip (ex: 'small', 'medium', 'large')
 */
export default function ConsoleChips({
  label: console,
  size = 'small',
}: {
  label: string;
  size?: 'small' | 'medium' | 'large';
}) {
  const sizeClasses = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-lg',
  };

  const consoleColors: { [key: string]: string } = {
    'PlayStation 5': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Xbox Series X/S': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Nintendo Switch': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  const colorClasses =
    consoleColors[console] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';

  return (
    <span className={`inline-flex items-center rounded-full ${colorClasses} ${sizeClasses[size]}`}>
      {console}
    </span>
  );
}
