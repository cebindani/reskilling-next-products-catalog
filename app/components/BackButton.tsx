import Link from 'next/link';

interface BackButtonProps {
  label: string;
}

export default function BackButton({ label }: BackButtonProps) {
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
    <Link role="button" aria-roledescription="Voltar" href="/" style={backButtonStyle}>
      <span>←</span>
      <span>{label}</span>
    </Link>
  );
}
