import { useState, useId } from 'react';
import { Send, AlertCircle, Mail, Info } from 'lucide-react';
import { RevealWrapper } from '../components/RevealWrapper';
import { CONTACT_EMAIL, BUDGET_OPTIONS, PROJECT_TYPES } from '../lib/constants';

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string; email: string; company: string;
  projectType: string; budget: string; description: string;
}
interface FormErrors {
  name?: string; email?: string; projectType?: string; description?: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim())           e.name = 'Please enter your full name.';
  if (!d.email.trim())          e.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Please enter a valid email address.';
  if (!d.projectType)           e.projectType = 'Please select a project type.';
  if (!d.description.trim())    e.description = 'Please describe your project briefly.';
  else if (d.description.trim().length < 20) e.description = 'Please add a little more detail (at least 20 characters).';
  return e;
}

// ─── Mailto builder ───────────────────────────────────────────────────────────
function buildMailto(d: FormData): string {
  const subject = encodeURIComponent(`Project Enquiry — ${d.projectType || 'General'}`);
  const body = encodeURIComponent(
    `Hi Task Nexio,\n\nI would like to discuss a project.\n\n` +
    `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company || '—'}\n` +
    `Project type: ${d.projectType}\nBudget: ${d.budget || 'Not specified'}\n\n` +
    `Description:\n${d.description}\n\n— ${d.name}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

// ─── Input / select / textarea class ─────────────────────────────────────────
const fieldClass =
  'w-full rounded-lg bg-white border border-ink-10 px-4 py-3 text-sm text-ink ' +
  'placeholder-ink-20 transition-colors duration-150 ' +
  'hover:border-ink-20 ' +
  'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ' +
  'aria-[invalid=true]:border-red-400';

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({
  id, label, required, error, children,
}: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-ink-80">
        {label}
        {required && <span className="text-blue-600 ml-0.5">*</span>}
        {!required && <span className="text-ink-20 ml-1.5 text-xs font-normal">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-500" role="alert">
          <AlertCircle size={12} className="flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Contact section ──────────────────────────────────────────────────────────
export function Contact() {
  const uid = useId();
  const empty: FormData = { name:'', email:'', company:'', projectType:'', budget:'', description:'' };
  const [form, setForm]           = useState<FormData>(empty);
  const [errors, setErrors]       = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      document.getElementById(`${uid}-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const href = buildMailto(form);
    setMailtoHref(href);
    setSubmitted(true);
    window.location.href = href;
  };

  return (
    <section id="contact" className="bg-ink-5 py-28 md:py-36" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left copy ── */}
          <RevealWrapper className="space-y-8">
            <div className="space-y-5">
              <p className="text-2xs font-semibold tracking-widest uppercase text-ink-40">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="font-display text-ink text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.035em' }}
              >
                Have a vision?
                <br />
                Let's build it.
              </h2>
              <p className="text-lg text-ink-60 leading-relaxed max-w-md">
                Tell us what you're imagining. We'll help you shape the idea into a practical digital product.
              </p>
            </div>

            {/* Email card */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-ink-10 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-ink-40 mb-0.5">Email us directly</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-medium text-blue-600 hover:underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            {/* Mailto transparency note */}
            <div className="flex gap-3 p-4 rounded-xl border border-amber-200 bg-amber-50">
              <Info size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-ink-60 leading-relaxed">
                <span className="font-medium text-ink">How this form works:</span>{' '}
                Clicking "Send Enquiry" opens your email client with a pre-filled message addressed to{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.
                You must press Send in your email app to complete the submission.
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-sm text-ink-60">Now accepting project enquiries</span>
            </div>
          </RevealWrapper>

          {/* ── Right form / success ── */}
          <RevealWrapper delay={100}>
            {submitted ? (
              /* Success state */
              <div className="rounded-2xl border border-ink-10 bg-white p-10 text-center space-y-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-semibold text-ink"
                    style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}
                  >
                    Your email app should have opened.
                  </h3>
                  <p className="text-ink-60 text-sm leading-relaxed">
                    A pre-filled message is ready for{' '}
                    <strong className="text-ink font-medium">{CONTACT_EMAIL}</strong>.
                    Please review and press{' '}
                    <strong className="text-ink font-medium">Send</strong> in your email client.
                  </p>
                </div>
                <p className="text-xs text-ink-40">
                  If nothing opened,{' '}
                  <a href={mailtoHref} className="text-blue-600 hover:underline">
                    click here to try again.
                  </a>
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(empty); }}
                  className="text-sm font-medium text-ink-60 hover:text-ink border border-ink-10 hover:border-ink-20 rounded-md px-5 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-ink-10 bg-white p-8 md:p-10 space-y-6 shadow-sm"
                aria-label="Project enquiry form"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id={`${uid}-name`} label="Full name" required error={errors.name}>
                    <input
                      id={`${uid}-name`} name="name" type="text" autoComplete="name"
                      value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={fieldClass} aria-invalid={!!errors.name}
                    />
                  </Field>
                  <Field id={`${uid}-email`} label="Business email" required error={errors.email}>
                    <input
                      id={`${uid}-email`} name="email" type="email" autoComplete="email"
                      value={form.email} onChange={handleChange}
                      placeholder="you@company.com"
                      className={fieldClass} aria-invalid={!!errors.email}
                    />
                  </Field>
                </div>

                <Field id={`${uid}-company`} label="Company or organisation" error={undefined}>
                  <input
                    id={`${uid}-company`} name="company" type="text" autoComplete="organization"
                    value={form.company} onChange={handleChange}
                    placeholder="Your company name"
                    className={fieldClass}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id={`${uid}-projectType`} label="Project type" required error={errors.projectType}>
                    <select
                      id={`${uid}-projectType`} name="projectType"
                      value={form.projectType} onChange={handleChange}
                      className={`${fieldClass} cursor-pointer`} aria-invalid={!!errors.projectType}
                    >
                      <option value="" disabled>Select type…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field id={`${uid}-budget`} label="Approximate budget" error={undefined}>
                    <select
                      id={`${uid}-budget`} name="budget"
                      value={form.budget} onChange={handleChange}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      <option value="">Not sure yet</option>
                      {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                </div>

                <Field id={`${uid}-description`} label="Project description" required error={errors.description}>
                  <textarea
                    id={`${uid}-description`} name="description" rows={5}
                    value={form.description} onChange={handleChange}
                    placeholder="Tell us about your project — what you're building, the problem you're solving, and any relevant context."
                    className={`${fieldClass} resize-none`} aria-invalid={!!errors.description}
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-6 py-3.5 text-[0.9375rem] font-medium shadow-sm hover:bg-blue-700 active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <Send size={15} />
                  Send Enquiry
                </button>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
