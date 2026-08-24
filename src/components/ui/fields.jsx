/**
 * Form primitives matching the PIS design system contracts.
 *   Input:    label, placeholder, type, value, onChange, error
 *   Select:   label, options, value, onChange
 *   Checkbox: label, checked, onChange
 *
 * UX rules applied: visible labels (never placeholder-only), errors shown
 * beside the field rather than only in a summary, 44px minimum target.
 */

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 'var(--text-small)',
  color: 'var(--text-heading)',
  marginBottom: 'var(--space-2)',
}

const controlStyle = (error) => ({
  width: '100%',
  padding: 'var(--space-3)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-body)',
  color: 'var(--text-body)',
  background: 'var(--surface-card)',
  border: `1px solid ${error ? 'var(--color-error)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-sm)',
  minHeight: 44,
  boxSizing: 'border-box',
  transition: 'border-color var(--duration-fast) var(--ease-standard)',
})

const errorStyle = {
  marginTop: 'var(--space-2)',
  fontSize: 'var(--text-small)',
  color: 'var(--color-error)',
}

function Wrapper({ id, label, required, error, children }) {
  return (
    <div style={{ marginBottom: 'var(--space-5)' }}>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && <span style={{ color: 'var(--brand-accent)' }}> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} style={errorStyle}>
          {error}
        </p>
      )}
    </div>
  )
}

export function Input({ id, label, placeholder, type = 'text', value, onChange, error, required }) {
  return (
    <Wrapper id={id} label={label} required={required} error={error}>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        style={controlStyle(error)}
      />
    </Wrapper>
  )
}

export function Textarea({ id, label, placeholder, value, onChange, error, required, rows = 6 }) {
  return (
    <Wrapper id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        style={{ ...controlStyle(error), resize: 'vertical', lineHeight: 'var(--leading-body)' }}
      />
    </Wrapper>
  )
}

export function Select({ id, label, options = [], value, onChange, error, required }) {
  return (
    <Wrapper id={id} label={label} required={required} error={error}>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        style={controlStyle(error)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </Wrapper>
  )
}

export function Checkbox({ id, label, checked, onChange }) {
  return (
    <div style={{ marginBottom: 'var(--space-5)', display: 'flex', gap: 'var(--space-3)' }}>
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ width: 20, height: 20, marginTop: 2, accentColor: 'var(--brand-primary)', flexShrink: 0 }}
      />
      <label htmlFor={id} style={{ fontSize: 'var(--text-small)', lineHeight: 'var(--leading-body)', color: 'var(--text-body)' }}>
        {label}
      </label>
    </div>
  )
}
