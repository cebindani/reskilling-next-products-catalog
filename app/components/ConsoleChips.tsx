/**
 * ConsoleChips Component
 *
 * Exibe um chip com o nome do console do produto.
 *
 * @prop label - O nome do console do produto
 */
export default function ConsoleChips({ label: console }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
      {console}
    </span>
  );
}
