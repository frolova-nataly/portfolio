// Все тексты главной живут здесь. Меняй строки в кавычках — вёрстка подтянется сама.
// Изображения кладутся в папку public/ и указываются путём от неё: "/cases/spock-home.png".

export const site = {
  name: 'Наталья Фролова',
  logo: 'forlova',
  role: 'UX/UI дизайнер · B2B и B2C',
  avatar: '', // положи фото в public/avatar.jpg и впиши сюда '/avatar.jpg'
  url: 'https://forlova.vercel.app', // поменяй на свой домен после деплоя
  meta: {
    title: 'Наталья Фролова — UX/UI дизайнер',
    description:
      'Дашборды, CRM и мобильные приложения для финтеха и медтеха. Кейсы NZVC, Migraine Heroes, Plutus Media.',
    ogImage: '/og.png',
  },
  contacts: {
    email: 'deardeer0@yandex.ru',
    telegram: 'https://t.me/for_lova',
    telegramHandle: '@for_lova',
    linkedin: 'https://www.linkedin.com/in/nataly-frolova',
    cv: '/cv.pdf', // положи PDF резюме в public/cv.pdf
  },
  hero: {
    status: 'Открыта к предложениям',
    lead:
      'Проектирую дашборды, CRM и мобильные приложения. Работала с командами из Новой Зеландии, США и Великобритании на английском. В UX/UI с 2023 года, в дизайне — с 2019.',
    tags: ['Fintech', 'Medtech', 'SaaS', 'Mobile'],
  },
  cta: {
    title: 'Давайте познакомимся',
    text: 'Пишите в Telegram или на почту — отвечаю в течение дня.',
  },
};

export type Fact = { value: string; label: string };

export type Case = {
  id: string;
  company: string;
  logo?: string; // путь к логотипу в public/
  domain: string; // формула: Индустрия · модель · платформа
  concept?: boolean; // true — покажется метка «Концепт»
  title: string; // коротко, 2–4 слова
  summary: string;
  highlight: Fact; // главный результат — зелёная плашка
  fact?: Fact; // второй факт — серая плашка
  image?: string; // реальный экран, не стоковый мокап
  imageAlt: string;
  desktop?: boolean; // true — один десктопный экран (с тенью), иначе группа телефонов
  imageNote?: string; // подпись под картинкой, например «На превью — редизайн 2026»
  tint: string; // цвет подложки под экраном
  href?: string; // страница кейса
};

export const cases: Case[] = [
  {
    id: 'nzvc',
    company: 'NZVC',
    logo: '/logos/nzvc.webp',
    domain: 'Fintech · B2B · Web',
    title: 'CRM для венчурного фонда',
    summary:
      'С нуля спроектировала рабочее место фонда: сделки, инвесторы, capital calls и отчёты — в одном инструменте вместо почты и таблиц. Фонд больше года вёл в нём всю операционку.',
    highlight: { value: '≈ −80% времени', label: 'на capital call · оценка по сценарию' },
    fact: { value: '49 LP · 53 компании', label: 'в одном инструменте' },
    image: '/shots/spok/home.webp',
    desktop: true,
    imageAlt: 'Главный экран Spok: дашборд фонда с capital calls, задачами и встречами',
    imageNote: 'Превью — мой редизайн 2026 года, концепт.',
    tint: '#E9F0FC',
    href: '/cases/spok',
  },
  {
    id: 'migraine',
    company: 'Migraine Heroes',
    logo: '/logos/migraine.webp',
    domain: 'Medtech · B2C · Mobile',
    title: 'Трекер мигреней',
    summary:
      'Приложение для людей с мигренью: дневник приступов, календарь, питание и чат с практиками. Первый релиз вышел на моём дизайне; спустя три года я пересобрала главный сценарий.',
    highlight: { value: 'Вышло в прод', label: 'первый релиз — мой дизайн' },
    fact: { value: '9 месяцев', label: '2023' },
    image: '/shots/migraine/hero.webp',
    imageAlt: 'Онбординг, главная и приступ в процессе — редизайн Migraine Heroes',
    imageNote: 'Превью — мой редизайн 2026 года, концепт.',
    tint: '#EEF1E6',
    href: '/cases/migraine-heroes',
  },
  {
    id: 'plutus',
    company: 'Plutus Media',
    logo: '/logos/plutus.webp',
    domain: 'AdTech · B2B2C · Mobile',
    title: 'Кабинет UGC-креатора',
    summary:
      'Перенесла работу креаторов из Slack в приложение: бриф, загрузка видео, проверка по правилам проекта и выплаты — в одном месте.',
    highlight: { value: 'Вышло в App Store', label: 'конец 2025' },
    fact: { value: '10 месяцев', label: '2025–2026' },
    image: '/shots/plutus/hero.webp',
    imageAlt: 'Главная, разбор выплаты и разблокированная выплата — редизайн Plutus',
    imageNote: 'Превью — мой редизайн 2026 года, концепт.',
    tint: '#16131F',
    href: '/cases/plutus',
  },
];
