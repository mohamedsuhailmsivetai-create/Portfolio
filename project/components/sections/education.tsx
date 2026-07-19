'use client';

import { GraduationCap, CalendarDays, Award } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function Education() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');

  return (
    <section id="education" className="section-pad relative">
      <div className="container-portfolio">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div ref={ref} className="mx-auto mt-16 max-w-3xl">
          <article
            data-reveal
            className="glass-card relative overflow-hidden rounded-2xl p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <GraduationCap className="text-brand-blue" size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-violet/10 px-2.5 py-1 text-brand-cyan ring-1 ring-inset ring-brand-violet/20">
                    <CalendarDays size={13} /> June 2024 – May 2027
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                  Bachelor of Science
                </h3>
                <p className="mt-1 text-base text-slate">
                  Computer Science with Artificial Intelligence
                </p>
                <p className="mt-2 text-sm font-medium text-white/80">
                  S.I.V.E.T College
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-ink-900/50 p-4">
                  <Award className="text-brand-cyan" size={22} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate">
                      Last Semester
                    </p>
                    <p className="font-heading text-2xl font-bold text-white">
                      87<span className="text-lg text-slate">%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
