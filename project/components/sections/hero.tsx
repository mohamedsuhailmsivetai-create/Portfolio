'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import { gsap, EASE } from '@/hooks/use-scroll-reveal';

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/mohamedsuhailmsivetai-create',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamedsuhail2101/',
    Icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:suhi6462@gmail.com',
    Icon: Mail,
  },
];

const FLOAT_CARDS = [
  { label: 'Machine Learning', className: 'top-[8%] -left-4', color: 'brand-blue' },
  { label: 'Python', className: 'top-[38%] -right-6', color: 'brand-cyan' },
  { label: 'Power BI', className: 'bottom-[22%] -left-8', color: 'brand-violet' },
  { label: 'SQL', className: 'bottom-[6%] right-2', color: 'brand-blue' },
];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      gsap.set(el.querySelectorAll('[data-hero]'), { opacity: 1, y: 0, filter: 'blur(0px)' });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.from('[data-hero="badge"]', { opacity: 0, y: 12, duration: 0.5 })
        .from('[data-hero="greeting"]', { opacity: 0, y: 12, duration: 0.4 }, '-=0.2')
        .from(
          '[data-hero="name"]',
          { opacity: 0, y: 24, filter: 'blur(12px)', duration: 0.7 },
          '-=0.15'
        )
        .from(
          '[data-hero="headline"]',
          { opacity: 0, y: 20, filter: 'blur(10px)', duration: 0.7 },
          '-=0.4'
        )
        .from('[data-hero="desc"]', { opacity: 0, y: 16, duration: 0.5, delay: 0.2 }, '-=0.3')
        .from('[data-hero="cta"]', { opacity: 0, y: 14, duration: 0.5 }, '-=0.2')
        .from('[data-hero="social"]', { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
        .from(
          '[data-hero="portrait"]',
          { opacity: 0, scale: 0.95, duration: 0.9 },
          '-=0.9'
        )
        .from(
          '[data-hero="float"]',
          { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1 },
          '-=0.5'
        );

      // Gentle floating loop
      gsap.utils.toArray<HTMLElement>('[data-hero="float"]').forEach((node, i) => {
        gsap.to(node, {
          y: '+=14',
          duration: 3 + i * 0.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[480px] w-[480px] rounded-full bg-brand-violet/10 blur-[120px]" />
        <div className="absolute left-0 top-1/3 h-[320px] w-[320px] rounded-full bg-brand-cyan/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="container-portfolio grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left column - 60% */}
        <div className="lg:col-span-7">
          <div
            data-hero="badge"
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1.5 text-[14px] font-medium text-brand-cyan"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            Available for AI &amp; Data Science Opportunities
          </div>

          <p data-hero="greeting" className="mt-6 text-[16px] text-slate">
            Hi, I&apos;m
          </p>

          <h1
            data-hero="name"
            className="mt-1 font-heading text-[44px] font-bold leading-[1.05] tracking-tight text-white sm:text-[56px] lg:text-[72px]"
          >
            Mohamed Suhail M
          </h1>

          <h2
            data-hero="headline"
            className="mt-5 max-w-2xl font-heading text-[24px] font-semibold leading-snug text-balance text-white/90 sm:text-[32px] lg:text-[40px]"
          >
            Building{' '}
            <span className="text-gradient">AI-powered, data-driven</span>{' '}
            solutions that transform raw data into meaningful decisions.
          </h2>

          <p
            data-hero="desc"
            className="mt-6 max-w-xl text-[16px] leading-relaxed text-slate sm:text-[18px]"
          >
            I&apos;m a Computer Science student specializing in Artificial
            Intelligence with hands-on experience in Data Science, Machine
            Learning, Power BI, and SQL. I enjoy solving real-world problems
            through analytics, predictive modeling, and interactive dashboards
            while continuously expanding my expertise in AI and business
            intelligence.
          </p>

          <div
            data-hero="cta"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-[0_0_32px_-6px_rgba(59,130,246,0.8)]"
            >
              View Projects
              <ArrowDown
                size={18}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/Mohamed_Suhail_M_-_Resume_(1)_(2).pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[16px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>

          <div
            data-hero="social"
            className="mt-8 flex items-center gap-3"
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-700/50 text-slate transition-all hover:border-brand-blue/50 hover:text-white hover:shadow-[0_0_20px_-6px_rgba(59,130,246,0.6)]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right column - 40% */}
        <div className="lg:col-span-5">
          <div
            data-hero="portrait"
            className="relative mx-auto aspect-square w-full max-w-[420px]"
          >
            {/* Rotating ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-brand-blue/20" />
            <div className="absolute inset-6 rounded-full border border-white/5" />

            {/* Real portrait */}
            <div className="absolute inset-10 overflow-hidden rounded-full ring-2 ring-brand-blue/30 ring-offset-2 ring-offset-ink-900">
              <Image
                src="/DSC00346_1.jpg.jpeg"
                alt="Mohamed Suhail M — Data Scientist & Machine Learning Engineer"
                fill
                sizes="(max-width: 768px) 240px, 340px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Neural network SVG overlay */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              <g stroke="#3B82F6" strokeWidth="1" opacity="0.35">
                <line x1="40" y1="80" x2="160" y2="40" />
                <line x1="40" y1="80" x2="120" y2="200" />
                <line x1="360" y1="120" x2="240" y2="60" />
                <line x1="360" y1="300" x2="280" y2="360" />
                <line x1="60" y1="340" x2="140" y2="280" />
              </g>
              <g fill="#22D3EE">
                <circle cx="40" cy="80" r="3" />
                <circle cx="360" cy="120" r="3" />
                <circle cx="60" cy="340" r="3" />
                <circle cx="280" cy="360" r="3" />
              </g>
            </svg>

            {/* Floating glass cards */}
            {FLOAT_CARDS.map((c) => (
              <div
                key={c.label}
                data-hero="float"
                className={`absolute ${c.className} glass-card rounded-xl px-3 py-2 text-xs font-medium text-white shadow-lg`}
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
