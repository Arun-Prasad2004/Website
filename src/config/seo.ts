import { business } from './business'
import { hasPhone } from './business'
import { services } from './services'

export type PageMeta = {
  path: string
  title: string
  description: string
  crumbs?: { name: string; path: string }[]
}

export const pages: PageMeta[] = [
  {
    path: '/',
    title: 'Electrical Appliance Repair & Service in Tirupparankundram | Aruna Electricals',
    description:
      'Aruna Electricals & Electronics, Tirupparankundram, Madurai: mixer grinder, mixer jar, wet grinder, iron box, induction stove, LPG stove, pressure cooker and rod heater service. Call or get directions.',
  },
  {
    path: '/services',
    title: 'Appliance Repair Services in Tirupparankundram, Madurai | Aruna Electricals',
    description:
      'Mixer grinder, mixer jar, table-top wet grinder, iron box, induction stove, LPG stove, pressure cooker and rod heater service at Aruna Electricals, Tirupparankundram.',
    crumbs: [{ name: 'Services', path: '/services' }],
  },
  {
    path: '/about',
    title: 'About Aruna Electricals & Electronics | Tirupparankundram, Madurai',
    description:
      'Aruna Electricals & Electronics is a local electrical appliance service and repair shop on Periya Ratha Veethi, Tirupparankundram, Madurai, trusted by local people for 30 years.',
    crumbs: [{ name: 'About', path: '/about' }],
  },
  {
    path: '/contact',
    title: 'Contact & Directions | Aruna Electricals, Tirupparankundram, Madurai',
    description:
      'Call, WhatsApp or get directions to Aruna Electricals & Electronics, 230 Periya Ratha Veethi, Thiruparankundram, Madurai 625005.',
    crumbs: [{ name: 'Contact', path: '/contact' }],
  },
]

const abs = (p: string) => business.siteUrl + (p === '/' ? '/' : p)

export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': business.siteUrl + '/#business',
    name: business.name,
    url: business.siteUrl + '/',
    description: 'Electrical appliance service and repair shop in Tirupparankundram, Madurai, Tamil Nadu.',
    ...(hasPhone ? { telephone: business.phoneE164 } : {}),
    ...(business.email ? { email: business.email } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.country,
    },
    hasMap: business.mapsListingUrl,
    areaServed: ['Tirupparankundram', 'Madurai'],
    ...(business.hours ? { openingHours: business.hours } : {}),
  }
}

function servicesLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.heading,
        serviceType: s.name + ' service',
        areaServed: 'Tirupparankundram, Madurai',
        provider: { '@id': business.siteUrl + '/#business' },
      },
    })),
  }
}

function breadcrumbLd(page: PageMeta) {
  if (!page.crumbs) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...page.crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Head tags written into each prerendered page. */
export function headFor(path: string) {
  const page = pages.find((p) => p.path === path) ?? pages[0]
  const url = abs(page.path)
  const ld = [localBusinessLd(), page.path === '/services' ? servicesLd() : null, breadcrumbLd(page)].filter(Boolean)
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(business.name)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary" />`,
    ...ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`),
  ].join('\n    ')
}
