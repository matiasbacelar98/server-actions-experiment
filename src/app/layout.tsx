import type { Metadata } from 'next';

import localFont from 'next/font/local';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Server Actions',
  description: 'Server actions experiment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ margin: 0, padding: 0 }}
      >
        <Theme accentColor='green'>{children}</Theme>
      </body>
    </html>
  );
}
