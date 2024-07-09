import { getDictionary } from './dictionaries'

interface PageProps {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }]
}

export default async function Page({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang) // en
  return <button>{dict.index.title}</button> // Add to Cart
}