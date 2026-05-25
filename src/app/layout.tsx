import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

function withProtocol(url: string, protocol: 'http' | 'https') {
  return /^https?:\/\//.test(url) ? url : `${protocol}://${url}`;
}

const metadataBaseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? withProtocol(process.env.NEXT_PUBLIC_SITE_URL, 'https')
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? withProtocol(process.env.VERCEL_PROJECT_PRODUCTION_URL, 'https')
    : process.env.VERCEL_URL
      ? withProtocol(process.env.VERCEL_URL, 'https')
      : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
