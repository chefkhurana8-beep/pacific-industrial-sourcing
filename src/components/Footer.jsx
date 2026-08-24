import { NAV, SITE } from '../data/site.js'

export default function Footer({ onNav }) {
  return (
    <footer
      style={{
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        marginTop: 'var(--space-10)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'var(--space-8) var(--container-pad) var(--space-6)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)',
          gap: 'var(--space-7)',
        }}
        className="pis-footer-grid"
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <img src="/logo-mark-reversed.svg" alt="" width="32" height="32" />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'var(--text-small)',
                letterSpacing: 'var(--tracking-caps)',
              }}
            >
              PACIFIC INDUSTRIAL SOURCING
            </span>
          </div>
          <p
            style={{
              marginTop: 'var(--space-4)',
              fontSize: 'var(--text-small)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--color-primary-300)',
              maxWidth: '42ch',
            }}
          >
            {SITE.description}
          </p>
        </div>

        <div>
          <h4 style={footHeading}>Pages</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {NAV.map((item) => (
              <li key={item.slug} style={{ marginBottom: 'var(--space-2)' }}>
                <a
                  href={`#/${item.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    onNav(item.slug)
                  }}
                  style={footLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={footHeading}>Contact</h4>
          <a href={`mailto:${SITE.email}`} style={{ ...footLink, wordBreak: 'break-word' }}>
            {SITE.email}
          </a>
          <p
            style={{
              marginTop: 'var(--space-3)',
              fontSize: 'var(--text-small)',
              color: 'var(--color-primary-300)',
            }}
          >
            New Zealand and Australia
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid var(--border-inverse)',
          padding: 'var(--space-4) var(--container-pad)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            fontSize: 'var(--text-caption)',
            color: 'var(--color-primary-300)',
          }}
        >
          © {new Date().getFullYear()} {SITE.name}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .pis-footer-grid { grid-template-columns: 1fr !important; gap: var(--space-6) !important; }
        }
      `}</style>
    </footer>
  )
}

const footHeading = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 'var(--text-caption)',
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  color: 'var(--brand-accent)',
  margin: '0 0 var(--space-4)',
}

const footLink = {
  fontSize: 'var(--text-small)',
  color: 'var(--text-inverse)',
  textDecoration: 'none',
}
