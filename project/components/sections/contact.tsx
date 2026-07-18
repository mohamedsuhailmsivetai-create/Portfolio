'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const CONTACT_EMAIL = 'suhi6462@gmail.com';
const EDGE_FUNCTION_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact`;

const CONTACT_DETAILS = [
  {
    Icon: Mail,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 7397223767',
    href: 'tel:+917397223767',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu',
    href: null,
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: 'mohamedsuhailmsivetai-create',
    href: 'https://github.com/mohamedsuhailmsivetai-create',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'mohamedsuhail2101',
    href: 'https://www.linkedin.com/in/mohamedsuhail2101/',
  },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>('[data-reveal]');
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setTimeout(() => setStatus('error'), 5000);
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/6 blur-[150px]" />
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something data-driven"
          description="Recruiters and teams — reach out for internships, full-time roles, or collaboration on data and AI projects."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
        >
          {/* Contact details */}
          <div data-reveal className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-7">
              <h3 className="font-heading text-xl font-semibold text-white">
                Get in touch directly
              </h3>
              <p className="mt-2 text-sm text-slate">
                Prefer email or a call? Use any of the channels below.
              </p>
              <ul className="mt-6 space-y-3">
                {CONTACT_DETAILS.map(({ Icon, label, value, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-white/10 hover:bg-white/5"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-blue transition-colors group-hover:text-brand-cyan">
                          <Icon size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-wider text-slate">
                            {label}
                          </span>
                          <span className="block truncate text-sm font-medium text-white">
                            {value}
                          </span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-xl p-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-blue">
                          <Icon size={18} />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-wider text-slate">
                            {label}
                          </span>
                          <span className="block text-sm font-medium text-white">
                            {value}
                          </span>
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div data-reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-7"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the role or project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate/50 transition-colors focus:border-brand-blue/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/40"
                />
              </div>

              {status === 'error' && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email {CONTACT_EMAIL} directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-[0_0_32px_-6px_rgba(59,130,246,0.8)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-slate">
                Your message is delivered directly to {CONTACT_EMAIL}.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  required,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate/50 transition-colors focus:border-brand-blue/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/40"
      />
    </div>
  );
}
