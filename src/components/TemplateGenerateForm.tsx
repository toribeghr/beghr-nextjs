'use client';

import { useState, type FormEvent, type CSSProperties } from 'react';
import { LEAD_FIELDS, type TemplateField } from '@/lib/templates';
import { validateWorkEmail } from '@/lib/emailDomains';

const GOLD = '#ECAC60';

interface Props {
  slug: string;
  title: string;
  docType: 'docx' | 'pdf';
  fields: TemplateField[];
}

type Values = Record<string, string>;

export default function TemplateGenerateForm({ slug, title, docType, fields }: Props) {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Values>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  // Merge fields from config first, then the three fixed lead fields (always required).
  const allFields: TemplateField[] = [...fields, ...LEAD_FIELDS];

  function setValue(key: string, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: '' }));
  }

  function validate(): boolean {
    const next: Values = {};
    for (const f of allFields) {
      const val = (values[f.key] ?? '').trim();
      if (f.required && !val) {
        next[f.key] = `${f.label} is required.`;
        continue;
      }
      // Work-email domain check, mirrored on the server.
      if (f.key === 'workEmail' && val) {
        const check = validateWorkEmail(val);
        if (!check.valid) next[f.key] = check.message ?? 'Enter a valid work email.';
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    setStatus('sending');
    try {
      const fieldValues: Values = {};
      for (const f of fields) fieldValues[f.key] = (values[f.key] ?? '').trim();

      const res = await fetch('/api/templates/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          fields: fieldValues,
          lead: {
            name: (values.leadName ?? '').trim(),
            workEmail: (values.workEmail ?? '').trim(),
            phone: (values.phone ?? '').trim(),
          },
        }),
      });

      if (!res.ok) {
        // API returns JSON on error; surface its message.
        let msg = 'Something went wrong. Please try again.';
        try {
          const j = await res.json();
          if (j?.error) msg = j.error;
        } catch {
          /* non-JSON error */
        }
        // A 400 domain rejection maps back onto the email field for inline display.
        if (res.status === 400 && /work email|personal/i.test(msg)) {
          setErrors((prev) => ({ ...prev, workEmail: msg }));
          setStatus('idle');
          return;
        }
        setServerError(msg);
        setStatus('error');
        return;
      }

      // Success: stream the file to a download without leaving the page.
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${slug}.${docType}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      // Analytics conversion event, consistent with the site's other lead forms.
      if (typeof window !== 'undefined') {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: 'generate_lead', form_type: 'template_library', tool: title });
      }
      setStatus('done');
    } catch {
      setServerError('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '0.7rem 0.85rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '0.95rem',
    boxSizing: 'border-box',
    background: '#fff',
  };
  const errorInputStyle: CSSProperties = { ...inputStyle, borderColor: '#b00000' };
  const labelStyle: CSSProperties = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#333',
    margin: '0 0 0.35rem',
  };
  const errorTextStyle: CSSProperties = {
    color: '#b00000',
    fontSize: '0.8rem',
    margin: '0.3rem 0 0',
  };

  function renderField(f: TemplateField) {
    const err = errors[f.key];
    const style = err ? errorInputStyle : inputStyle;
    const common = {
      id: `tpl-${f.key}`,
      name: f.key,
      value: values[f.key] ?? '',
      'aria-invalid': !!err,
      style,
    };
    return (
      <div key={f.key} style={{ marginBottom: '1rem' }}>
        <label htmlFor={`tpl-${f.key}`} style={labelStyle}>
          {f.label}
          {f.required && <span style={{ color: GOLD, marginLeft: 2 }}>*</span>}
        </label>
        {f.type === 'select' ? (
          <select {...common} onChange={(e) => setValue(f.key, e.target.value)}>
            <option value="">Select…</option>
            {(f.options ?? []).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...common}
            type={f.type === 'date' ? 'date' : f.key === 'workEmail' ? 'email' : 'text'}
            placeholder={f.placeholder ?? ''}
            autoComplete={
              f.key === 'workEmail'
                ? 'email'
                : f.key === 'phone'
                ? 'tel'
                : f.key === 'leadName'
                ? 'name'
                : 'off'
            }
            onChange={(e) => setValue(f.key, e.target.value)}
          />
        )}
        {err && <p style={errorTextStyle}>{err}</p>}
      </div>
    );
  }

  if (status === 'done') {
    return (
      <div
        style={{
          background: '#FBF3E8',
          border: `1px solid ${GOLD}`,
          borderRadius: '10px',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontWeight: 800, fontSize: '1.15rem', color: '#000', margin: '0 0 0.5rem' }}>
          Your download is ready.
        </p>
        <p style={{ color: '#444', margin: '0 0 1.25rem' }}>
          The {title} is downloading now. If it did not start, use the button below. Our team also
          has your details and may follow up.
        </p>
        <button
          type="button"
          className="btn btn--gold"
          style={{ display: 'inline-block' }}
          onClick={() => {
            setStatus('idle');
          }}
        >
          Generate another copy
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e5e5e5',
        borderTop: `4px solid ${GOLD}`,
        borderRadius: '10px',
        padding: '1.75rem',
        width: '100%',
        maxWidth: '520px',
        boxSizing: 'border-box',
        margin: '0 auto',
      }}
    >
      <p
        style={{
          display: 'inline-block',
          background: GOLD,
          color: '#000',
          fontWeight: 700,
          fontSize: '0.72rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '4px',
          letterSpacing: '0.05em',
          margin: '0 0 0.75rem',
        }}
      >
        FILL &amp; DOWNLOAD
      </p>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000', margin: '0 0 1.25rem' }}>
        {title}
      </h3>

      <form onSubmit={handleSubmit} noValidate>
        {fields.map(renderField)}

        <div
          style={{
            borderTop: '1px solid #eee',
            margin: '0.5rem 0 1.25rem',
            paddingTop: '1.25rem',
          }}
        >
          <p style={{ fontSize: '0.82rem', color: '#666', margin: '0 0 1rem' }}>
            Tell us where to send it. A work email is required.
          </p>
          {LEAD_FIELDS.map(renderField)}
        </div>

        <button
          type="submit"
          className="btn btn--gold"
          disabled={status === 'sending'}
          style={{
            width: '100%',
            fontSize: '1rem',
            padding: '0.8rem',
            opacity: status === 'sending' ? 0.7 : 1,
          }}
        >
          {status === 'sending' ? 'Generating…' : 'Generate & Download'}
        </button>

        {serverError && status === 'error' && (
          <p style={{ color: '#b00000', fontSize: '0.88rem', marginTop: '0.75rem' }}>
            {serverError}
          </p>
        )}
        <p style={{ color: '#999', fontSize: '0.78rem', marginTop: '0.85rem', lineHeight: 1.4 }}>
          We will only use your details to send what you requested and follow up. No spam.
        </p>
      </form>
    </div>
  );
}
