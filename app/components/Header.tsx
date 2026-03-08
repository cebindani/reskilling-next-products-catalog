import Link from 'next/link';

export default function Header() {
  const backButtonStyle = {
    textDecoration: 'none',
    color: '#2563eb',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    minHeight: '2rem',
    marginBottom: '2rem',
    transition: 'color 0.2s',
  };

  return (
    <header className="ps-6 pe-6 mb-12 text-center flex justify-between items-center">
      <Link role="button" aria-roledescription="Voltar" href="/" style={backButtonStyle}>
        <span>←</span>
        <span>Voltar para Catálogo</span>
      </Link>

      <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
        Garage Games
      </span>
    </header>
  );
}
