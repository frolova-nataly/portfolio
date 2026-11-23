// Два языка: русский по корню сайта, английский — под /en/.
import { site, cases } from './data/site';
import { siteEn, casesEn } from './data/site.en';

export type Lang = 'ru' | 'en';

export const langFromPath = (pathname: string): Lang => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ru');

/** Тот же адрес на другом языке */
export const altPath = (pathname: string): string => {
  if (langFromPath(pathname) === 'en') {
    const p = pathname.replace(/^\/en/, '');
    return p === '' ? '/' : p;
  }
  return pathname === '/' ? '/en/' : `/en${pathname}`;
};

/** Ссылка внутри сайта на текущем языке: href('/cases/spok', 'en') → '/en/cases/spok' */
export const href = (path: string, lang: Lang) => (lang === 'en' ? (path === '/' ? '/en/' : `/en${path}`) : path);

export const getSite = (lang: Lang) => (lang === 'en' ? siteEn : site);
export const getCases = (lang: Lang) => (lang === 'en' ? casesEn : cases);

export const ui = {
  ru: {
    toHome: 'на главную',
    contacts: 'Контакты',
    email: 'Почта',
    copied: 'Скопировано',
    copiedLive: (e: string) => `Адрес ${e} скопирован`,
    copyHint: 'Нажмите, чтобы скопировать',
    telegram: 'Телеграм',
    cvFile: 'Наталья Фролова CV.pdf',
    skip: 'К содержанию',
    cases: 'Кейсы',
    toTop: 'Наверх',
    allCases: 'Все кейсы',
    directions: 'Направления',
    nextCase: 'Следующий кейс',
    concept: 'Концепт',
    prevScreen: 'Предыдущий экран',
    nextScreen: 'Следующий экран',
    langLabel: 'Язык',
  },
  en: {
    toHome: 'home',
    contacts: 'Contacts',
    email: 'Email',
    copied: 'Copied',
    copiedLive: (e: string) => `${e} copied`,
    copyHint: 'Click to copy',
    telegram: 'Telegram',
    cvFile: 'Nataly Frolova CV.pdf',
    skip: 'Skip to content',
    cases: 'Case studies',
    toTop: 'Back to top',
    allCases: 'All case studies',
    directions: 'Focus areas',
    nextCase: 'Next case study',
    concept: 'Concept',
    prevScreen: 'Previous screen',
    nextScreen: 'Next screen',
    langLabel: 'Language',
  },
} as const;
