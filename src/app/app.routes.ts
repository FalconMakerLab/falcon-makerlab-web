import { Routes } from '@angular/router';
import { Page } from './page';
import { projects } from './generated/projects';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pl' },
  ...(['pl', 'en'] as const).flatMap((locale) => [
    { path: locale, component: Page, data: { locale, view: 'home' } },
    { path: `${locale}/projects`, component: Page, data: { locale, view: 'projects' } },
    ...projects
      .filter((p) => p.locale === locale)
      .map((p) => ({
        path: `${locale}/projects/${p.slug}`,
        component: Page,
        data: { locale, view: 'project', slug: p.slug },
      })),
    { path: `${locale}/about`, component: Page, data: { locale, view: 'about' } },
    { path: `${locale}/contact`, component: Page, data: { locale, view: 'contact' } },
  ]),
  { path: '**', component: Page, data: { locale: 'pl', view: '404' } },
];
