import { Varta } from 'next/font/google';

const varta = Varta({
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={varta.className}>{children}</body>
    </html>
  )
}