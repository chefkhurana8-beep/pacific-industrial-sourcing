import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Industries from './pages/Industries.jsx'
import Contact from './pages/Contact.jsx'
import { NAV } from './data/site.js'

const PAGES = {
  home: Home,
  about: About,
  services: Services,
  'how-it-works': HowItWorks,
  industries: Industries,
  contact: Contact,
}

const VALID = new Set(NAV.map((n) => n.slug))

function readHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  return VALID.has(raw) ? raw : 'home'
}

export default function App() {
  const [page, setPage] = useState(readHash)

  // Hash routing keeps every page deep-linkable and the browser Back button
  // behaving as expected, without pulling in a router dependency.
  useEffect(() => {
    const onHashChange = () => setPage(readHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const onNav = (slug) => {
    window.location.hash = `/${slug}`
    setPage(slug)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const Page = PAGES[page] ?? Home

  return (
    <>
      <a href="#main" style={skipLink} className="pis-skip">
        Skip to content
      </a>
      <Header page={page} onNav={onNav} />
      {/* key forces a remount on route change so the entrance animation replays */}
      <main id="main" key={page} className="pis-page">
        <Page onNav={onNav} />
      </main>
      <Footer onNav={onNav} />
      <style>{`
        .pis-skip { position: absolute; left: -9999px; }
        .pis-skip:focus {
          left: var(--container-pad);
          top: var(--space-2);
          z-index: 100;
        }
      `}</style>
    </>
  )
}

const skipLink = {
  background: 'var(--brand-primary)',
  color: 'var(--text-inverse)',
  padding: 'var(--space-2) var(--space-4)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-small)',
  textDecoration: 'none',
}
