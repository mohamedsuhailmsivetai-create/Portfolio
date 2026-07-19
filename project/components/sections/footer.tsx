'use client';

import { Github, Linkedin, ArrowUp } from 'lucide-react';

const GITHUB = 'https://github.com/mohamedsuhailmsivetai-create';
const LINKEDIN = 'https://www.linkedin.com/in/mohamedsuhail2101/';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-900/60 py-12">
      <div className="container-portfolio">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="font-heading text-lg font-bold text-white"
            >
              Mohamed Suhail M
            </a>
            <p className="mt-1 text-sm text-slate">
              © 2026 Mohamed Suhail M. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-slate/60">
              Built with Next.js, Tailwind CSS, and GSAP.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700/50 text-slate transition-all hover:border-brand-blue/50 hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700/50 text-slate transition-all hover:border-brand-blue/50 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700/50 text-slate transition-all hover:border-brand-blue/50 hover:text-white"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
