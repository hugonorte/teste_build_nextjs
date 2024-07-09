// export async function generateStaticParams() {
//     return [{ lang: 'en-US' }, { lang: 'de' }]
//   }
   
  export default function Layout({ children, params }) {
    return (
      <html lang={params.lang}>
        <body>{children}</body>
      </html>
    )
  }