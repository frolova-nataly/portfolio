// Типографика при сборке: короткие слова (предлоги, союзы, частицы — до 3 букв) не висят в конце строки,
// а переносятся вместе со следующим словом; тире не начинает строку.
// Работает по готовому HTML в dist: трогает только текст между тегами, не атрибуты, скрипты и стили.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NBSP = ' ';
// Короткое русское слово (1–3 буквы) в начале слова, за ним пробел и не пробел
const SHORT_RU = /(^|[^А-Яа-яЁёA-Za-z0-9-])([А-Яа-яЁё]{1,3})[ \t\r\n]+(?=[^\s<])/g;
// Короткое английское служебное слово (для английской версии)
const SHORT_EN = /(^|[^A-Za-z0-9'’-])(a|an|the|of|to|in|on|at|by|for|and|or|but|is|as|I|my|no|it|we|vs)[ \t\r\n]+(?=[^\s<])/g;
// Пробел перед тире — неразрывный
const DASH = /(\S)[ \t\r\n]+([—–])/g;
// Короткое слово в конце текстового узла, за которым идёт строчный тег (<b>, <a>…)
const SHORT_END = /(^|[^А-Яа-яЁёA-Za-z0-9-])([А-Яа-яЁё]{1,3})[ \t\r\n]+$/;

export function fixText(text) {
  let t = text;
  // дважды: «и в» — второе слово тоже короткое
  for (let i = 0; i < 2; i++) {
    t = t.replace(SHORT_RU, (_, pre, word) => `${pre}${word}${NBSP}`);
    t = t.replace(SHORT_EN, (_, pre, word) => `${pre}${word}${NBSP}`);
  }
  t = t.replace(DASH, `$1${NBSP}$2`);
  return t;
}

export function fixHtml(html) {
  // script/style/pre/code/textarea прячем целиком, чтобы не трогать их содержимое
  const kept = [];
  const masked = html.replace(/<(script|style|pre|code|textarea)\b[\s\S]*?<\/\1>/gi, (m) => {
    kept.push(m);
    return `\u0000${kept.length - 1}\u0000`;
  });
  const parts = masked.split(/(<[^>]+>)/);
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (p.startsWith('<') || !p.trim()) continue;
    let t = fixText(p);
    if (/^<(b|strong|i|em|a|span)\b/i.test(parts[i + 1] ?? '')) {
      t = t.replace(SHORT_END, (_, pre, word) => `${pre}${word}${NBSP}`);
    }
    parts[i] = t;
  }
  return parts.join('').replace(/\u0000(\d+)\u0000/g, (_, n) => kept[Number(n)]);
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

export default function noHangingWords() {
  return {
    name: 'no-hanging-words',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        logger.info('fixing hanging words in ' + dir);
        const root = fileURLToPath(dir);
        for (const file of await walk(root)) {
          const html = await readFile(file, 'utf8');
          await writeFile(file, fixHtml(html));
        }
      },
    },
  };
}
