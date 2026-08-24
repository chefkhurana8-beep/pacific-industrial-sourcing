import { useState } from 'react'
import { NAV, SITE } from '../data/site.js'
import Button from './ui/Button.jsx'

export default function Header({ page, onNav }) {
  const [open, setOpen] = useState(false)

  const go = (slug) => {
    onNav(slug)
    setOpen(false)
  }

  const link = (item) => {
    const active = page === item.slug
    return (
      <a
        key={item.slug}
        href={`#/${item.slug}`}
        onClick={(e) => {
          e.preventDefault()
          go(item.slug)
        }}
        aria-current={active ? 'page' : undefined}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-small)',
          fontWeight: active ? 700 : 500,
          letterSpacing: 'var(--tracking-caps)',
          color: active ? 'var(--brand-primary)' : 'var(--text-body)',
          textDecoration: 'none',
          padding: 'var(--space-2) 0',
          borderBottom: `2px solid ${active ? 'var(--brand-accent)' : 'transparent'}`,
          transition: 'color var(--duration-fast) var(--ease-standard)',
          display: 'inline-block',
        }}
      >
        {item.label}
      </a>
    )
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'var(--space-3) var(--container-pad)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-5)',
        }}
      >
        <a
          href="#/home"
          onClick={(e) => {
            e.preventDefault()
            go('home')
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            textDecoration: 'none',
          }}
        >
          <img src="/logo-mark.svg" alt="" width="34" height="34" />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-small)',
              letterSpacing: 'var(--tracking-caps)',
              color: 'var(--brand-primary)',
              lineHeight: 1.15,
            }}
          >
            PACIFIC INDUSTRIAL
            <br />
            <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>SOURCING</span>
          </span>
        </a>

        <nav
          className="pis-nav"
          aria-label="Main"
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}
        >
          {NAV.map(link)}
          <Button size="sm" variant="accent" onClick={() => go('contact')}>
            Request a quote
          </Button>
        </nav>

        <button
          className="pis-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-sm)',
            width: 44,
            height: 44,
            cursor: 'pointer',
            color: 'var(--brand-primary)',
            fontSize: '1.25rem',
            lineHeight: 1,
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Main"
          style={{
            borderTop: '1px solid var(--border-default)',
            padding: 'var(--space-4) var(--container-pad)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            background: 'var(--surface-card)',
          }}
        >
          {NAV.map(link)}
          <Button size="md" variant="accent" onClick={() => go('contact')}>
            Request a quote
          </Button>
        </nav>
      )}

      <style>{`
        @media (max-width: 900px) {
          .pis-nav { display: none !important; }
          .pis-burger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
