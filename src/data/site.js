/**
 * Site-wide configuration for Pacific Industrial Sourcing.
 *
 * NOTE ON THE EMAIL ADDRESS: the brief listed this three ways —
 * "infor@pacificindustrialsouring.co.nz" (twice) and
 * "info@pacificindustrialsourcing.co.nz" (once). The domain on Cloudflare is
 * pacificindustrialsourcing.co.nz, so the third spelling is the correct one and
 * is used here. Change it in this one place if that is wrong.
 */

export const SITE = {
  name: 'Pacific Industrial Sourcing',
  shortName: 'Pacific Industrial',
  domain: 'pacificindustrialsourcing.co.nz',
  email: 'info@pacificindustrialsourcing.co.nz',
  phone: '022 100 1959',
  // E.164 for tel: links — NZ +64, leading 0 dropped.
  phoneLink: '+64221001959',
  tagline: 'Industrial sourcing and procurement',
  description:
    'Sourcing consulting and procurement for New Zealand and Australian businesses working with verified industrial manufacturers across Asia.',
}

export const NAV = [
  { slug: 'home', label: 'Home' },
  { slug: 'about', label: 'About' },
  { slug: 'services', label: 'Services' },
  { slug: 'how-it-works', label: 'How it works' },
  { slug: 'industries', label: 'Industries' },
  { slug: 'contact', label: 'Contact' },
]

/** Enquiry routing — which audience an RFI came from. */
export const ENQUIRY_TYPES = [
  { value: 'buyer', label: 'I am sourcing or buying' },
  { value: 'exporter', label: 'I am a manufacturer or supplier' },
  { value: 'other', label: 'Something else' },
]
