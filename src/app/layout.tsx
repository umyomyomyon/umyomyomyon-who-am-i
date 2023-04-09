import './globals.css';

export const metadata = {
  title: 'const umyomyomyon: WhoAmI = ',
  description: 'web-dev, umyomyomyon',
  keywords: ['web-dev', 'umyomyomyon', 'portfolio', 'web developer'],
  creator: 'umyomyomyon',
  openGraph: {
    title: 'const umyomyomyon: WhoAmI = ',
    description: 'web-dev, umyomyomyon',
    siteName: 'const umyomyomyon: WhoAmI = ',
    images: [
      {
        url: 'https://umyomyomyon.dev/ogp.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'const umyomyomyon: WhoAmI = ',
    description: 'web-dev, umyomyomyon',
    images: ['https://umyomyomyon.dev/ogp.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-background">{children}</body>
    </html>
  );
}
