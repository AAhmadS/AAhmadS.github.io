import { Fragment, type ReactNode } from 'react';
import { SmartLink } from './SmartLink';

type RichNode =
  | { t: 'text'; v: string }
  | { t: 'bold'; c: RichNode[] }
  | { t: 'link'; href: string; c: RichNode[] };

// [label](url): the url may contain one level of balanced parentheses, e.g. .../wiki/Foo_(bar) or javascript:alert(1)
const LINK_AT_START = /^\[([^[\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/;

// A run of Arabic-script letters (U+0600-U+06FF), allowing ZWNJ/ZWJ inside words and single spaces between words.
const PERSIAN_RUN =
  /([؀-ۿ][؀-ۿ‌‍]*(?:[  ]+[؀-ۿ][؀-ۿ‌‍]*)*)/;

/** Parses `**bold**` and `[label](url)` (a link may sit inside bold, bold inside a link label). */
function parse(src: string, inBold = false, inLink = false): RichNode[] {
  const out: RichNode[] = [];
  let buf = '';
  const flush = () => {
    if (buf) {
      out.push({ t: 'text', v: buf });
      buf = '';
    }
  };
  let i = 0;
  while (i < src.length) {
    if (!inBold && src.startsWith('**', i)) {
      const end = src.indexOf('**', i + 2);
      if (end > i + 2) {
        flush();
        out.push({ t: 'bold', c: parse(src.slice(i + 2, end), true, inLink) });
        i = end + 2;
        continue;
      }
    }
    if (!inLink && src[i] === '[') {
      const m = LINK_AT_START.exec(src.slice(i));
      if (m) {
        flush();
        out.push({ t: 'link', href: m[2], c: parse(m[1], inBold, true) });
        i += m[0].length;
        continue;
      }
    }
    buf += src[i];
    i += 1;
  }
  flush();
  return out;
}

function toPlain(nodes: RichNode[]): string {
  return nodes
    .map((n) => (n.t === 'text' ? n.v : toPlain(n.c)))
    .join('');
}

function renderText(value: string, key: string): ReactNode[] {
  return value.split(PERSIAN_RUN).map((part, i) =>
    i % 2 === 1 ? (
      <span key={`${key}.${i}`} lang="fa" dir="rtl">
        {part}
      </span>
    ) : (
      <Fragment key={`${key}.${i}`}>{part}</Fragment>
    ),
  );
}

function renderNodes(nodes: RichNode[], prefix: string): ReactNode[] {
  return nodes.map((n, i) => {
    const key = `${prefix}${i}`;
    if (n.t === 'text') return <Fragment key={key}>{renderText(n.v, key)}</Fragment>;
    if (n.t === 'bold') return <strong key={key}>{renderNodes(n.c, `${key}.`)}</strong>;
    return (
      <SmartLink key={key} href={n.href} className="link-accent">
        {renderNodes(n.c, `${key}.`)}
      </SmartLink>
    );
  });
}

interface RichProps {
  /** Plain string with optional `**bold**` and `[label](url)` markup. */
  text: string;
}

/**
 * Renders a plain string with inline markup: `**bold**`, `[label](https://...)` or `[label](/path)`, and wraps
 * Persian/Arabic-script runs in `<span lang="fa" dir="rtl">`. Never uses dangerouslySetInnerHTML; links with any
 * other scheme (javascript:, data:, http:, mailto:) render as their label only.
 */
export function Rich({ text }: RichProps) {
  return <>{renderNodes(parse(text), '')}</>;
}

/** The same string with the markup stripped (links keep their label), for aria-label / <title> uses. */
export function plainText(text: string): string {
  return toPlain(parse(text));
}
