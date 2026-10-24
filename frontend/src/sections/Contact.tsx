import { useState, useId } from 'react';
import { Send, AlertCircle, Mail, Info } from 'lucide-react';
import { Button } from '../components/Button';
import { RevealWrapper } from '../components/RevealWrapper';
import { SectionLabel } from '../components/SectionLabel';
import { CONTACT_EMAIL, BUDGET_OPTIONS, PROJECT_TYPES } from '../lib/constants';

interface FormData {
  name:        string;
  email:       string;
  company:     string;
  projectType: string;
  budget:      string;
  description: string;
}

interface FormErrors {
  name?:        string;
  email?:       string;
  projectType?: string;
  description?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim())                        errors.name        = 'Please enter your full name.';
  if (!data.email.trim())                       errors.email       = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                                errors.email       = 'Please enter a valid email address.';
  if (!data.projectType)                        errors.projectType = 'Please select a project type.';
  if (!data.description.trim())                 errors.description = 'Please describe your project briefly.';
  else if (data.description.trim().length < 20) errors.description = 'Please add a bit more detail (at least 20 characters).';
  return errors;
}

function buildMailtoHref(data: FormData): string {
  const subject = encodeURIComponent(`Project Enquiry — ${data.projectType || 'General'}`);
  const body = encodeURIComponent(
    `Hi Task Nexio,\n\nI'd like to discuss a project.\n\n` +
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Company: ${data.company || 'Not specified'}\n` +
    `Project type: ${data.projectType}\n` +
    `Budget range: ${data.budget || 'Not specified'}\n\n` +
    `Description:\n${data.description}\n\n` +
    `— ${data.name}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

// ─── Field components ─────────────────────────────────────────────────────────
function Field({
  id, label, required, error, children,
}: {
  id: string; label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-brand-400 ml-0.5" aria-hidden="true">*</span>}
        {!required && <span className="text-slate-600 ml-1.5 text-xs">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-400" role="alert">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  'w-full rounded-lg bg-surface-card border border-surface-border px-4 py-3 text-sm text-slate-200 placeholder-slate-600 ' +
  'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors ' +
  'hover:border-slate-600 aria-[invalid=true]:border-red-500/60';

export function Contact() {
  const uid = useId();

  const [form, setForm]         = useState<FormData>({
    name: '', email: '', company: '', projectType: '', budget: '', description: '',
  });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }

    const href = buildMailtoHref(form);
    setMailtoHref(href);
    setSubmitted(true);

    // Open email client
    window.location.href = href;
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-brand-900/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <RevealWrapper className="space-y-8">
            <div className="space-y-4">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                Let's build something meaningful.
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Tell us what you're planning. We'll get back to you to discuss the right approach.
              </p>
            </div>

            {/* Direct contact */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-surface-border bg-surface-card">
              <div className="w-10 h-10 rounded-lg bg-brand-950 border border-brand-800/40 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-brand-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Email us directly</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            {/* Transparency note */}
            <div className="flex gap-3 p-4 rounded-xl border border-amber-900/30 bg-amber-950/10">
              <Info size={16} className="text-amber-500/70 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="text-slate-400 font-medium">How form submissions work:</span>{' '}
                When you click "Send Enquiry", your email application will open with a pre-filled message.
                You must press Send in your email app to complete the enquiry.
                Alternatively, you can email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-400 hover:text-brand-300">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </div>

            {/* Now accepting */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-500">Now accepting project enquiries</span>
            </div>
          </RevealWrapper>

          {/* Right — form */}
          <RevealWrapper delay={100}>
            {submitted ? (
              /* Success state */
              <div className="rounded-2xl border border-surface-border bg-surface-card p-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-brand-950 border border-brand-700/40 flex items-center justify-center mx-auto">
                  <Mail size={28} className="text-brand-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Your email app should have opened.</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A pre-filled message has been prepared for{' '}
                    <strong className="text-slate-300">{CONTACT_EMAIL}</strong>.
                    Please review and press <strong className="text-slate-300">Send</strong> in your email client.
                  </p>
                </div>
                <p className="text-xs text-slate-600">
                  If nothing opened,{' '}
                  <a href={mailtoHref} className="text-brand-400 hover:text-brand-300 transition-colors underline">
                    click here to open the email
                  </a>
                  {' '}or copy the address above.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => { setSubmitted(false); setForm({ name:'',email:'',company:'',projectType:'',budget:'',description:'' }); }}
                >
                  Submit another enquiry
                </Button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-surface-border bg-surface-card p-8 md:p-10 space-y-6"
                aria-label="Project enquiry form"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id={`${uid}-name`} label="Full name" required error={errors.name}>
                    <input
                      id={`${uid}-name`}
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${uid}-name-error` : undefined}
                    />
                  </Field>

                  <Field id={`${uid}-email`} label="Business email" required error={errors.email}>
                    <input
                      id={`${uid}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                </div>

                <Field id={`${uid}-company`} label="Company or organisation" error={undefined}>
                  <input
                    id={`${uid}-company`}
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={inputClass}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id={`${uid}-projectType`} label="Project type" required error={errors.projectType}>
                    <select
                      id={`${uid}-projectType`}
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      aria-invalid={!!errors.projectType}
                    >
                      <option value="" disabled>Select type…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-surface-card">{t}</option>
                      ))}
                    </select>
                  </Field>

                  <Field id={`${uid}-budget`} label="Approximate budget" error={undefined}>
                    <select
                      id={`${uid}-budget`}
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Not sure yet</option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b} className="bg-surface-card">{b}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id={`${uid}-description`} label="Project description" required error={errors.description}>
                  <textarea
                    id={`${uid}-description`}
                    name="description"
                    rows={5}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project — what you're building, the problem you're solving, and any relevant context."
                    className={`${inputClass} resize-none`}
                    aria-invalid={!!errors.description}
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full justify-center">
                  <Send size={16} />
                  Send Enquiry
                </Button>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
