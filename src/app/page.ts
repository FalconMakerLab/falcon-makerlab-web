import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { copy, Locale, site } from './content';
import { projects } from './generated/projects';

@Component({ selector: 'app-page', imports: [RouterLink], templateUrl: './page.html' })
export class Page {
  private route = inject(ActivatedRoute);
  private document = inject(DOCUMENT);
  private title = inject(Title);
  private meta = inject(Meta);
  private destroyRef = inject(DestroyRef);
  locale: Locale = 'pl';
  view = 'home';
  slug = '';
  site = site;
  menu = signal(false);
  filter = signal('all');
  get t() {
    return copy[this.locale];
  }
  get items() {
    return projects.filter((p) => p.locale === this.locale);
  }
  get visibleItems() {
    return this.items.filter(
      (p) => this.filter() === 'all' || p.categories.includes(this.filter()),
    );
  }
  get featured() {
    return this.items.find((p) => p.featured)!;
  }
  get project() {
    return this.items.find((p) => p.slug === this.slug);
  }
  get otherLocale(): Locale {
    return this.locale === 'pl' ? 'en' : 'pl';
  }
  path(locale: Locale = this.locale) {
    const suffix =
      this.view === 'home' || this.view === '404'
        ? ''
        : this.view === 'project'
          ? `/projects/${this.slug}`
          : `/${this.view}`;
    return `/${locale}${suffix}`;
  }
  constructor() {
    this.route.data.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.locale = data['locale'];
      this.view = data['view'];
      this.slug = data['slug'] ?? '';
      this.menu.set(false);
      this.filter.set('all');
      this.updateMeta();
    });
  }
  private updateMeta() {
    const title =
      this.view === 'project'
        ? this.project?.title
        : this.view === 'projects'
          ? this.t.projects
          : this.view === 'about'
            ? this.t.about
            : this.view === 'contact'
              ? this.t.contact
              : this.view === '404'
                ? this.t.notFound
                : 'Code · Make · Grow';
    const description = this.project?.summary ?? this.t.intro;
    this.title.setTitle(`${title} — ${site.name}`);
    this.document.documentElement.lang = this.locale;
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'robots',
      content: this.view === '404' ? 'noindex' : 'index, follow',
    });
    for (const [property, content] of Object.entries({
      'og:title': `${title} — ${site.name}`,
      'og:description': description,
      'og:type': 'website',
      'og:url': site.origin + this.path(),
      'og:image': site.origin + '/brand/social.png',
      'og:locale': this.locale === 'pl' ? 'pl_PL' : 'en_GB',
    }))
      this.meta.updateTag({ property, content });
    this.document.head.querySelectorAll('link[data-seo]').forEach((n) => n.remove());
    for (const [rel, lang, href] of [
      ['canonical', '', site.origin + this.path()],
      ['alternate', 'pl', site.origin + this.path('pl')],
      ['alternate', 'en', site.origin + this.path('en')],
      ['alternate', 'x-default', site.origin + this.path('pl')],
    ]) {
      const link = this.document.createElement('link');
      link.rel = rel;
      link.href = href;
      link.setAttribute('data-seo', '');
      if (lang) link.hreflang = lang;
      this.document.head.appendChild(link);
    }
  }
}
