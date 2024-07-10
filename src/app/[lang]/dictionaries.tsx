
import { Dictionary } from '@/types/dictionary';

const dictionaries: { [key: string]: () => Promise<Dictionary> } = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default as unknown as Dictionary),
  de: () => import('@/dictionaries/de.json').then((module) => module.default as unknown as Dictionary),
  'pt-br': () => import('@/dictionaries/pt-br.json').then((module) => module.default as unknown as Dictionary),
  es: () => import('@/dictionaries/es.json').then((module) => module.default as unknown as Dictionary),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => dictionaries[locale]();

