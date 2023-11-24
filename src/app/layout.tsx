import type { Metadata } from 'next';
import { inter } from './ui/fonts';
import './global.css';

export const metadata: Metadata = {
  title: 'Spotlexx photography',
  description: 'Beautiful moments captured.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
