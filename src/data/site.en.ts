// English texts for the home page. Same structure as site.ts.
import type { Case } from './site';

export const siteEn = {
  name: 'Nataly Frolova',
  logo: 'frolova',
  role: 'UX/UI Designer · B2B & B2C',
  avatar: '/avatar.jpg',
  url: 'https://frolova.vercel.app/en/',
  meta: {
    title: 'Nataly Frolova — UX/UI Designer',
    description:
      'Dashboards, CRMs and mobile apps for fintech and medtech. Case studies: NZVC, Migraine Heroes, Plutus Media.',
    ogImage: '/og-en.png',
  },
  contacts: {
    email: 'deardeer0@yandex.ru',
    telegram: '',
    telegramHandle: '',
    linkedin: 'https://www.linkedin.com/in/nataly-frolova',
    cv: '/cv-en.pdf',
  },
  hero: {
    status: 'Looking for my next team',
    lead:
      'I design dashboards, CRMs and mobile apps. I’ve worked with teams from New Zealand, the US and the UK. In UX/UI since 2023, in design since 2019.',
    tags: ['Fintech', 'Medtech', 'AdTech', 'SaaS', 'Mobile'],
    languages: ['English B2', 'Open to relocation'],
  },
  cta: {
    title: 'This is usually where it says “let’s work together.”',
    text: '',
  },
};

export const casesEn: Case[] = [
  {
    id: 'nzvc',
    company: 'NZVC',
    logo: '/logos/nzvc.webp',
    domain: 'Fintech · B2B · Web',
    title: 'CRM for a venture fund',
    summary:
      'Designed the fund’s workspace from scratch: deals, investors, capital calls and reports in one tool instead of email and spreadsheets.',
    highlight: { value: '-90% time per capital call', label: '~10 minutes instead of ~100 per round' },
    fact: { value: '4 tools → 1', label: 'Excel, Google Docs, email and Drive — now in Spok' },
    image: '/shots/spok/home.webp',
    imageAlt: 'Spok home screen: fund dashboard with capital calls, tasks and meetings',
    tint: '#E9F0FC',
    href: '/en/cases/spok',
  },
  {
    id: 'migraine',
    company: 'Migraine Heroes',
    logo: '/logos/migraine.webp',
    domain: 'Medtech · B2C · Mobile',
    title: 'Migraine diary',
    summary:
      'An app for people with migraine: attack diary, calendar, nutrition and chat. I moved the intake questionnaire into onboarding — one entry point instead of two separate products.',
    highlight: { value: '-70% questions in the daily log', label: '3 instead of 10' },
    fact: { value: '-75% time to log a day', label: '~30 sec instead of ~2 min' },
    image: '/shots/migraine/hero.webp',
    imageAlt: 'Migraine Heroes: pain scale, home screen and energy check-in',
    tint: '#EEF1E6',
    href: '/en/cases/migraine-heroes',
  },
  {
    id: 'plutus',
    company: 'Plutus Media',
    logo: '/logos/plutus.webp',
    domain: 'AdTech · B2B2C · Mobile',
    title: 'UGC creator app',
    summary:
      'Moved creators’ work from Slack into an app: brief, videos, review and payouts. Every branch of the flow is designed, not just the happy path.',
    highlight: { value: '-83% manual steps for managers', label: 'one channel instead of three' },
    fact: { value: 'Every state', label: 'errors, waiting, empty' },
    image: '/shots/plutus/hero.webp',
    imageAlt: 'Plutus: brief with copied hashtags, creator home and unlocked payout',
    tint: '#16131F',
    href: '/en/cases/plutus',
  },
];
