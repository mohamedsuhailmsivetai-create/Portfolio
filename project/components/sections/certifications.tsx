'use client';

import { BadgeCheck, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface Cert {
  title: string;
  issuer: string;
  logo: {
    initials: string;
    bg: string;
    text: string;
    ring: string;
  };
}

const CERTS: Cert[] = [
  {
    title: 'IBM Certified Data Fundamentals',
    issuer: 'IBM',
    logo: { initials: 'IBM', bg: 'bg-[#0F62FE]/15', text: 'text-[#8FB8FF]', ring: 'ring-[#0F62FE]/30' },
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'Certification Body',
    logo: { initials: 'WDF', bg: 'bg-brand-violet/15', text: 'text-brand-violet', ring: 'ring-brand-violet/30' },
  },
  {
    title: 'Analyzing and Visualizing Data with Microsoft Power BI',
    issuer: 'Microsoft',
    logo: { initials: 'PBI', bg: 'bg-[#F2C811]/15', text: 'text-[#F2C811]', ring: 'ring-[#F2C811]/30' },
  },
  {
    title: 'Deloitte Australia – Data Analytics Job Simulation',
    issuer: 'Deloitte Australia',
    logo: { initials: 'D', bg: 'bg-[#86BC25]/15', text: 'text-[#86BC25]', ring: 'ring-[#86BC25]/30' },
  },
  {
    title: 'Python For Data Science',
    issuer: 'Certification Body',
    logo: { initials: 'Py', bg: 'bg-[#3776AB]/15', text: 'text-[#4B8BBE]', ring: 'ring-[#3776AB]/30' },
  },
];

export function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="certifications" className="section-pad relative overflow-hidden">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified, continuously upskilling"
          description="Credentials spanning data fundamentals, visualization, analytics job simulation, and Python for data science."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTS.map((c) => (
            <article
              key={c.title}
              data-reveal
              className="group glass-card flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.4)]"
            >
              <div className="flex items-center justify-between">
                {/* Issuer logo placeholder */}
                <div
                  className={cn(
                    'relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl ring-1 ring-inset',
                    c.logo.bg,
                    c.logo.ring
                  )}
                  aria-label={`${c.issuer} logo placeholder`}
                >
                  <span className={cn('font-heading text-sm font-bold tracking-tight', c.logo.text)}>
                    {c.logo.initials}
                  </span>
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate/60">
                  Logo
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-white">
                {c.title}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate">
                <BadgeCheck size={14} className="text-brand-cyan" />
                {c.issuer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
