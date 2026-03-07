import type { Metadata } from 'next';
import { Roboto_Mono, Roboto_Flex } from 'next/font/google';
import './globals.css';
import { SITE_METADATA } from '@/src/config/constants';

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

const robotoSans = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoMono.variable} ${robotoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
