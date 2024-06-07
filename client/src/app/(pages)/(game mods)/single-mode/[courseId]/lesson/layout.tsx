import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BottomPanel from '../../../../../components/BottomPanel/BottomPanel';
import { GameHeader } from '../../../../../components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LexiTON',
  description: 'Developed for TON bootcamp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative m-auto flex min-h-screen max-w-7xl flex-col">
          {children}
          <BottomPanel />
        </div>
      </body>
    </html>
  );
}
