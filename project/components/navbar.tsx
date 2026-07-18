'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/5 bg-ink-900/70 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="container-portfolio flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700/60 font-heading text-lg font-bold tracking-tight text-white transition-colors hover:border-brand-blue/50"
          aria-label="Mohamed Suhail M — home"
        >
          MS
          <span className="pointer-events-none absolute inset-0 rounded-xl bg-brand-blue/0 transition-colors group-hover:bg-brand-blue/10" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-white'
                      : 'text-slate hover:text-white'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.7)] md:inline-flex"
        >
          Get in touch
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          open ? 'max-h-[420px]' : 'max-h-0'
        )}
      >
        <ul className="container-portfolio flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  active === link.href
                    ? 'bg-white/5 text-white'
                    : 'text-slate hover:text-white'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-brand-blue px-4 py-3 text-center text-base font-semibold text-white"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
