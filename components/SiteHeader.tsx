'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BrandMark } from './BrandMark';

const items = [
  ['products', '製品', 'Products'],
] as const;

export function SiteHeader({ locale = 'ja', path = '/' }: { locale?: 'ja' | 'en'; path?: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefix = locale === 'en' ? '/en' : '';
  const switchPath = locale === 'en' ? (path.replace(/^\/en/, '') || '/') : `/en${path === '/' ? '' : path}`;
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  const closeMenu = () => { setOpen(false); buttonRef.current?.focus(); };
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href={prefix || '/'} aria-label="ORUWA home"><BrandMark/><span>ORUWA</span></Link>
    <nav className="desktop-nav" aria-label={locale === 'ja' ? 'メインナビゲーション' : 'Main navigation'}>{items.map(([slug, ja, en]) => <Link key={slug} href={`${prefix}/${slug}`}>{locale === 'ja' ? ja : en}</Link>)}</nav>
    <div className="header-actions"><Link className="text-link" href={switchPath} hrefLang={locale === 'ja' ? 'en' : 'ja'}>{locale === 'ja' ? 'EN' : 'JA'}</Link><Link className="button button-small desktop-cta" href={`${prefix}/products`}>{locale === 'ja' ? '製品を見る' : 'View products'}</Link><button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)}><span className="sr-only">{locale === 'ja' ? 'メニュー' : 'Menu'}</span><span/><span/><span/></button></div>
  </div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label={locale === 'ja' ? 'モバイルナビゲーション' : 'Mobile navigation'}><div className="shell">{items.map(([slug, ja, en]) => <Link onClick={closeMenu} key={slug} href={`${prefix}/${slug}`}>{locale === 'ja' ? ja : en}</Link>)}<Link onClick={closeMenu} className="button" href={`${prefix}/products`}>{locale === 'ja' ? '製品を見る' : 'View products'}</Link></div></nav>}</header>;
}
