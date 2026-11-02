import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const root = 'dist/falcon-makerlab-web/browser';
for (const locale of ['pl', 'en']) {
  for (const path of [
    '',
    '/projects',
    '/about',
    '/contact',
    '/projects/pico-home-hub',
    '/projects/raised-bed-connector',
  ]) {
    const html = await readFile(`${root}/${locale}${path}/index.html`, 'utf8');
    assert.match(html, new RegExp(`lang="${locale}"`));
    assert.ok(html.includes('Falcon MakerLab'));
    assert.ok(html.includes(`rel="canonical"`));
    assert.ok(html.includes(`https://falcon-codes.pl/${locale}${path}`));
    assert.ok(html.includes('hreflang="en"') && html.includes('hreflang="pl"'));
    if (path.includes('/projects/')) assert.ok(html.includes('class="prose"'));
  }
}
for (const file of [
  'brand/symbol.png',
  'favicon.ico',
  'sitemap.xml',
  'projects/pico-home-hub/hero.svg',
  'projects/raised-bed-connector/hero.svg',
])
  await access(`${root}/${file}`);
console.log(
  'Verified 12 prerendered pages: localized HTML, canonical URLs, hreflang, project content and local assets.',
);
