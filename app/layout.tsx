import Header from './_components/Header/Header';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ja">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
