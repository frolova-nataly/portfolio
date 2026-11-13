// Все тексты главной живут здесь. Меняй строки в кавычках — вёрстка подтянется сама.
// Изображения кладутся в папку public/ и указываются путём от неё: "/cases/spock-home.png".

export const site = {
  name: 'Наталья Фролова',
  logo: 'forlova',
  role: 'UX/UI дизайнер · B2B и B2C',
  avatar: '/avatar.jpg',
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
    status: 'Ищу продуктовую команду',
    lead:
      'Проектирую дашборды, CRM и мобильные приложения. Работала с командами из Новой Зеландии, США и Великобритании. В UX/UI с 2023 года, в дизайне — с 2019.',
    tags: ['Fintech', 'Medtech', 'AdTech', 'SaaS', 'Mobile'],
    languages: ['English B2'],
  },
  cta: {
    title: 'Обычно здесь пишут «давайте работать вместе». Вот, написала.',
    text: 'Расскажу подробнее про любой из кейсов — просто напишите.',
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
  tint: string; // цвет подложки под экраном
  href?: string; // страница кейса
};

export const cases: Case[] = [
  {
    id: 'nzvc',
    company: 'NZVC',
    logo: '/logos/nzvc.webp',
    domain: 'Fintech · B2B · Web',
    title: 'CRM для венчурного фонда',
    summary:
      'С нуля спроектировала рабочее место фонда: сделки, инвесторы, капитал-коллы и отчёты — в одном инструменте вместо почты и таблиц.',
    highlight: { value: '-90% времени на капитал-колл', label: '10 минут вместо 100 на раунд' },
    fact: { value: 'Год+ в работе фонда', label: 'вся операционка' },
    image: '/shots/spok/home.webp',
    desktop: true,
    imageAlt: 'Главный экран Spok: дашборд фонда с капитал-коллами, задачами и встречами',
    tint: '#E9F0FC',
    href: '/cases/spok',
  },
  {
    id: 'plutus',
    company: 'Plutus Media',
    logo: '/logos/plutus.webp',
    domain: 'AdTech · B2B2C · Mobile',
    title: 'Кабинет UGC-креатора',
    summary:
      'Перенесла работу креаторов из Slack в приложение: бриф, видео, проверка и выплаты. Проработаны все ветки сценария, а не только удачная.',
    highlight: { value: '-83% ручных шагов менеджера', label: 'один канал вместо трёх' },
    fact: { value: 'Все состояния', label: 'ошибки, ожидание, пусто' },
    image: '/shots/plutus/hero.webp',
    imageAlt: 'Главная, разбор выплаты и разблокированная выплата — Plutus',
    tint: '#16131F',
    href: '/cases/plutus',
  },
  {
    id: 'migraine',
    company: 'Migraine Heroes',
    logo: '/logos/migraine.webp',
    domain: 'Medtech · B2C · Mobile',
    title: 'Дневник мигрени',
    summary:
      'Приложение для людей с мигренью: дневник приступов, календарь, питание и чат с практиками. Анкету перенесла в онбординг — один вход вместо разрыва между двумя продуктами.',
    highlight: { value: '-70% вопросов в записи дня', label: '3 вместо 10' },
    fact: { value: '-75% времени на запись', label: '~30 сек вместо ~2 мин' },
    image: '/shots/migraine/hero.webp',
    imageAlt: 'Онбординг, главная и приступ в процессе — Migraine Heroes',
    tint: '#EEF1E6',
    href: '/cases/migraine-heroes',
  },
];
