import { useRef, useState } from 'react';
import {
  HiOutlineCheckCircle,
  HiOutlineEnvelope,
  HiOutlineExclamationCircle,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlinePhone,
} from 'react-icons/hi2';
import { contact, profile, sections, socials } from '../data/content';
import { getIcon, socialIcons } from '../lib/icons';
import Button from './ui/Button';
import { Reveal } from './ui/Reveal';
import Section from './ui/Section';

// EmailJS is optional: set these in .env.local (see README). Without them the form
// falls back to opening the visitor's email app with the message pre-filled.
const emailJs = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};
const emailJsEnabled = Boolean(emailJs.serviceId && emailJs.templateId && emailJs.publicKey);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = ['name', 'email', 'message'];
const emptyForm = { name: '', email: '', message: '', website: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  else if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.';
  return errors;
}

async function sendWithEmailJs({ name, email, message }) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: emailJs.serviceId,
      template_id: emailJs.templateId,
      user_id: emailJs.publicKey,
      template_params: { name, email, reply_to: email, message, title: contact.form.mailtoSubject },
    }),
  });
  if (!response.ok) throw new Error(`EmailJS responded with ${response.status}`);
}

function openMailClient({ name, email, message }) {
  const subject = `${contact.form.mailtoSubject} — ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const details = [
    { icon: HiOutlineEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: HiOutlinePhone, label: 'Phone', value: profile.phone.display, href: profile.phone.href },
    { icon: HiOutlineMapPin, label: 'Location', value: profile.location },
  ];

  return (
    <Section id="contact" {...sections.contact}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <ul className="space-y-3">
            {details.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="icon-tile">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block break-words font-medium">
                      <span className={href ? 'link-underline' : ''}>{value}</span>
                    </span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="card group flex items-center gap-4 p-4 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4 p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <p className="mt-8 text-sm font-medium text-muted">Find me online</p>
          <ul className="mt-3 grid grid-cols-2 gap-3">
            {socials.map((social) => {
              const Icon = getIcon(socialIcons, social.id);
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex items-center gap-3 p-3 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0 text-muted transition-colors duration-300 group-hover:text-accent" />
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{social.label}</span>
                      <span className="block truncate text-sm font-medium">
                        <span className="link-underline">{social.handle}</span>
                      </span>
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | mailto
  const fieldRefs = { name: useRef(null), email: useRef(null), message: useRef(null) };
  const { form } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors(({ [name]: _cleared, ...remaining }) => remaining);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.website) return; // Honeypot field: only bots fill it in.

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus();
      return;
    }

    const message = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() };

    if (!emailJsEnabled) {
      openMailClient(message);
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      await sendWithEmailJs(message);
      setValues(emptyForm);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    ref: fieldRefs[name],
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `mt-2 block w-full rounded-xl border bg-canvas/60 px-4 py-3 text-base text-fg placeholder:text-muted/80 transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 ${
      errors[name] ? 'border-red-600 dark:border-red-400' : 'border-field hover:border-accent/60'
    }`,
  });

  const fieldError = (name) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400">
        {errors[name]}
      </p>
    );

  return (
    <form noValidate onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">
            {form.nameLabel}
          </label>
          <input type="text" autoComplete="name" required placeholder="Your name" {...fieldProps('name')} />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">
            {form.emailLabel}
          </label>
          <input type="email" autoComplete="email" required placeholder="you@example.com" {...fieldProps('email')} />
          {fieldError('email')}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="text-sm font-medium">
          {form.messageLabel}
        </label>
        <textarea rows={6} required placeholder="How can I help?" {...fieldProps('message')} />
        {fieldError('message')}
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto">
          {status === 'sending' ? 'Sending…' : form.submitLabel}
          <HiOutlinePaperAirplane className="h-4 w-4" />
        </Button>
        {!emailJsEnabled && <p className="text-sm text-muted">Opens your email app with the message ready to send.</p>}
      </div>

      <div role="status" aria-live="polite">
        {status === 'sent' && (
          <StatusMessage tone="success">Thanks! Your message has been sent.</StatusMessage>
        )}
        {status === 'mailto' && (
          <StatusMessage tone="success">
            Your email app should now be open with your message. If it didn’t open, email me at{' '}
            <a className="link-underline font-medium text-accent" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            .
          </StatusMessage>
        )}
        {status === 'error' && (
          <StatusMessage tone="error">
            Something went wrong while sending. Please try again, or email me at{' '}
            <a className="link-underline font-medium" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            .
          </StatusMessage>
        )}
      </div>
    </form>
  );
}

function StatusMessage({ tone, children }) {
  const isError = tone === 'error';
  const Icon = isError ? HiOutlineExclamationCircle : HiOutlineCheckCircle;

  return (
    <p
      className={`mt-5 flex gap-3 rounded-xl border px-4 py-3 text-sm ${
        isError
          ? 'border-red-600/30 bg-red-600/10 text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-300'
          : 'border-accent/30 bg-accent/10 text-fg'
      }`}
    >
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${isError ? '' : 'text-accent'}`} />
      <span>{children}</span>
    </p>
  );
}
