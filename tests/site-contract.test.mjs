import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const config = readFileSync(new URL('../lib/site-config.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../components/SitePage.tsx', import.meta.url), 'utf8');
const header = readFileSync(new URL('../components/SiteHeader.tsx', import.meta.url), 'utf8');
const metadata = readFileSync(new URL('../app/[...slug]/page.tsx', import.meta.url), 'utf8');

test('all required locale routes are configured', () => {
  for (const route of ['/', '/en', '/products', '/en/products']) assert.match(config, new RegExp(`['"]${route.replaceAll('/', '\\/')}['"]`));
  for (const route of ['/cafe', '/pricing', '/security', '/about', '/contact', '/login', '/privacy', '/terms', '/commercial-disclosure']) assert.doesNotMatch(config.match(/publicRoutes[^;]+/)?.[0] ?? '', new RegExp(`['"]${route.replaceAll('/', '\\/')}['"]`));
});
test('language switch preserves the semantic path', () => { assert.match(header, /replace\(\/\^\\\/en\//); assert.match(header, /`\/en\$\{path/); });
test('pricing hides unconfirmed prices', () => { assert.match(config, /pricingStatus: 'inquiry'/); assert.match(page, /pricingStatus==='inquiry'/); });
test('products are driven by an extensible package registry', () => { assert.match(config, /export const productPackages/); assert.match(config, /status: 'development'/); assert.match(page, /productPackages\.map/); });
test('public navigation excludes admin and preview login', () => { assert.doesNotMatch(header, /admin\.oruwa\.jp|preview\.oruwa\.jp/); assert.doesNotMatch(config, /admin\.oruwa\.jp/); });
test('external URLs are centralized and no production account URL is invented', () => { assert.match(config, /developerUrl: 'https:\/\/izumiit\.com\/'/); assert.match(config, /accountUrl: ''/); });
test('metadata includes canonical and hreflang', () => { assert.match(metadata, /alternates:\{canonical:path/); assert.match(metadata, /'ja-JP'/); assert.match(metadata, /'x-default'/); });
test('FAQ uses native accessible disclosure elements', () => { assert.match(page, /<details/); assert.match(page, /<summary/); });
test('mobile navigation supports Escape and focus return', () => { assert.match(header, /event\.key === 'Escape'/); assert.match(header, /buttonRef\.current\?\.focus/); assert.match(header, /aria-expanded/); });
