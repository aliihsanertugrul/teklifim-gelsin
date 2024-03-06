import 'server-only'
 
const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()


export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de']
} 
