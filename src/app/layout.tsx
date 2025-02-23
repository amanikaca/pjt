import type { Metadata } from 'next';
import BottomNavBar from '@/components/bottemNavbar';
import TopNavBar from '@/components/topNavbar';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Student App',
  description: 'An App For GEC Students',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavBar userName="John Doe" />

        {children}

        <BottomNavBar />
      </body>
    </html>
  );
}
