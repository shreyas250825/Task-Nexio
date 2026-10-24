import { useState, useId } from 'react';
import { Send, AlertCircle, Mail, Info } from 'lucide-react';
import { RevealWrapper } from '../components/RevealWrapper';
import { CONTACT_EMAIL, BUDGET_OPTIONS, PROJECT_TYPES } from '../lib/constants';

const INK   = '#171717';
const IVORY = '#F6F3EC';
const BLUE  = '#294FFF';
const MUTED = '#737373';
const RULE  = '#D8D4CC';
const CHART = '#D6FF66';

interface FormData { name: string; email: string; company: string; projectType: string; budget: string; description: string; }
interface FormErrors { name?: string; email?: string; projectType?: string; description?: string; }

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim()) e.name = 'Please enter your full name.';
  if (!d.email.trim()) e.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Please enter a valid email address.';
  if (!d.projectType) e.projectType = 'Please select a project type.';
  if (!d.description.trim()) e.description = 'Please describe your project briefly.';
  else if (d.description.trim().length < 20) e.description = 'Please add a bit more detail (at least 20 characters).';
  return e;
}

function buildMailto(d: FormData) {
  const subject = encodeURIComponent(`Project Enquiry — ${d.projectType || 'General'}`);
  const body = encodeURIComponent(`Hi Task Nexio,\n\nName: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company || '—'}\nType: ${d.projectType}\nBudget: ${d.budget || 'Not specified'}\n\nDescription:\n${d.description}\n\n— ${d.name}`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

const inputStyle: React.CSSProperties = {
  width: '100%', display: 'block',
  background: '#FFFFFF', border: `1.5px solid ${RULE}`,
  borderRadius: 5, padding: '0.8125rem 1rem',
  fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: INK,
  outline: 'none', transition: 'border-color 0.15s ease',
  boxSizing: 'border-box',
  minHeight: 48,
};

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label htmlFor={id} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#2D2D2D' }}>
        {label}
        {required && <span style={{ color: BLUE, marginLeft: 2 }}>*</span>}
        {!required && <span style={{ color: MUTED, marginLeft: 6, fontSize: '0.75rem', fontWeight: 400 }}>(optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#EF4444', margin: 0 }}>
          <AlertCircle size={12} style={{ flexShrink: 0 }} />
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const uid = useId();
  const empty: FormData = { name: '', email: '', company: '', projectType: '', budget: '', description: '' };
  const [form, setForm]           = useState<FormData>(empty);
  const [errors, setErrors]       = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); document.getElementById(`${uid}-${Object.keys(errs)[0]}`)?.focus(); return; }
    const href = buildMailto(form);
    setMailtoHref(href);
    setSubmitted(true);
    window.location.href = href;
  };

  return (
    <section id="contact" style={{ background: IVORY, paddingTop: '6rem', paddingBottom: '6rem' }} aria-labelledby="contact-heading">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <RevealWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ height: 3, width: 32, background: CHART, borderRadius: 9999, display: 'block' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>Contact</span>
              </div>
              <h2 id="contact-heading" className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.03em', color: INK, margin: 0 }}>
                Have a vision?<br />
                <em className="font-display-italic" style={{ color: BLUE }}>Let's build it.</em>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: MUTED, margin: 0, maxWidth: 400 }}>
                Tell us what you're imagining. We'll help you shape the idea into a real digital product.
              </p>

              {/* Email card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: '#FFFFFF', border: `1.5px solid ${RULE}`, borderRadius: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: '#EFF2FF', border: '1px solid #BFC9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={18} color={BLUE} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: MUTED, margin: '0 0 2px' }}>Email us directly</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: BLUE, textDecoration: 'none' }}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Info note */}
              <div style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem 1rem', background: '#FFFCF0', border: '1px solid #FDE68A', borderRadius: 8 }}>
                <Info size={15} color="#D97706" style={{ flexShrink: 0, marginTop: 1 }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', lineHeight: 1.6, color: '#92400E', margin: 0 }}>
                  <strong>How this works:</strong> Clicking "Send Enquiry" opens your email client with a pre-filled message to {CONTACT_EMAIL}. Press Send to submit.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: CHART, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: MUTED }}>Now accepting project enquiries</span>
              </div>
            </div>
          </RevealWrapper>

          {/* Right */}
          <RevealWrapper delay={100}>
            {submitted ? (
              <div style={{ background: '#FFFFFF', border: `1.5px solid ${RULE}`, borderRadius: 12, padding: '3rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#EFF2FF', border: '1px solid #BFC9FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={22} color={BLUE} />
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1.125rem', color: INK, margin: 0, letterSpacing: '-0.015em' }}>
                  Your email app should have opened.
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                  A pre-filled message is ready for <strong style={{ color: INK }}>{CONTACT_EMAIL}</strong>. Press <strong style={{ color: INK }}>Send</strong> in your email client.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: MUTED, margin: 0 }}>
                  If nothing opened,{' '}
                  <a href={mailtoHref} style={{ color: BLUE, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 2 }}>click here to try again.</a>
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(empty); }}
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: MUTED, background: 'none', border: `1.5px solid ${RULE}`, borderRadius: 5, padding: '0.625rem 1.25rem', cursor: 'pointer', transition: 'border-color 0.15s', minHeight: 44 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#A0A0A0'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = RULE; }}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate style={{ background: '#FFFFFF', border: `1.5px solid ${RULE}`, borderRadius: 12, padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} aria-label="Project enquiry form">

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <Field id={`${uid}-name`} label="Full name" required error={errors.name}>
                    <input id={`${uid}-name`} name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} placeholder="Your full name" style={inputStyle} aria-invalid={!!errors.name}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = BLUE; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = RULE; }} />
                  </Field>
                  <Field id={`${uid}-email`} label="Business email" required error={errors.email}>
                    <input id={`${uid}-email`} name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} placeholder="you@company.com" style={inputStyle} aria-invalid={!!errors.email}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = BLUE; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = RULE; }} />
                  </Field>
                </div>

                <Field id={`${uid}-company`} label="Company" error={undefined}>
                  <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" value={form.company} onChange={onChange} placeholder="Your company name" style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = BLUE; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = RULE; }} />
                </Field>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <Field id={`${uid}-projectType`} label="Project type" required error={errors.projectType}>
                    <select id={`${uid}-projectType`} name="projectType" value={form.projectType} onChange={onChange} style={{ ...inputStyle, cursor: 'pointer' }} aria-invalid={!!errors.projectType}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = BLUE; }}
                      onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = RULE; }}>
                      <option value="" disabled>Select type…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field id={`${uid}-budget`} label="Budget" error={undefined}>
                    <select id={`${uid}-budget`} name="budget" value={form.budget} onChange={onChange} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = BLUE; }}
                      onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = RULE; }}>
                      <option value="">Not sure yet</option>
                      {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                </div>

                <Field id={`${uid}-description`} label="Project description" required error={errors.description}>
                  <textarea id={`${uid}-description`} name="description" rows={5} value={form.description} onChange={onChange}
                    placeholder="Tell us about your project — what you're building, the problem you're solving, and any relevant context."
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }} aria-invalid={!!errors.description}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = BLUE; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = RULE; }} />
                </Field>

                <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: INK, color: '#FFFFFF', border: 'none', borderRadius: 5, padding: '1rem 1.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.15s ease', minHeight: 52 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = BLUE; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = INK; }}>
                  <Send size={16} />
                  Send Enquiry
                </button>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
