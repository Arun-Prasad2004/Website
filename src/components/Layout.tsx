import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { MapPin, Menu, MessageCircle, Phone, X, Zap } from 'lucide-react'
import { business, fullAddress, hasPhone, hasWhatsapp } from '../config/business'
import { pages } from '../config/seo'
import { directionsHref, telHref, whatsappHref } from '../lib/links'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function useMeta() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const p = pages.find((x) => x.path === pathname)
    if (p) {
      document.title = p.title
      document.querySelector('meta[name="description"]')?.setAttribute('content', p.description)
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', business.siteUrl + (p.path === '/' ? '/' : p.path))
    }
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  // Fade-and-rise as sections scroll into view. Content stays visible without JS and with reduced motion.
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) return
      el.style.transitionDelay = `${(Number(el.dataset.reveal) || 0) * 80}ms`
      el.classList.add('rv-hide')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])
}

export function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useMeta()
  useEffect(() => setOpen(false), [pathname])

  const bar = [hasPhone, hasWhatsapp, true].filter(Boolean).length

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:p-3">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-navy text-white">
        <div className="wrap flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold" aria-label={`${business.shortName} home`}>
            <Zap size={22} className="text-amber" aria-hidden="true" />
            {business.shortName}
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 ${isActive ? 'text-amber' : ''}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            {hasPhone && (
              <a href={telHref} className="btn btn-call ml-3 !min-h-10 !py-2">
                <Phone size={18} aria-hidden="true" /> {business.phoneDisplay}
              </a>
            )}
          </nav>
          <button
            className="grid h-11 w-11 place-items-center rounded-md hover:bg-white/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="wrap grid gap-1 pb-4 md:hidden">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) => `rounded-md px-3 py-3 text-lg font-medium ${isActive ? 'bg-white/10 text-amber' : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main id="main" className="pb-20 md:pb-0">
        <Outlet />
      </main>

      <footer className="bg-navy-deep text-white/90">
        <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-3xl font-bold text-white">{business.name}</p>
            <p className="mt-3 max-w-sm">Local electrical appliance service and repair shop in {business.locality}, {business.city}.</p>
          </div>
          <div>
            <h2 className="mb-3 text-lg !text-white">Pages</h2>
            <ul className="grid gap-1">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link className="underline-offset-4 hover:underline" to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-lg !text-white">Visit or call</h2>
            <address className="not-italic">{fullAddress}</address>
            {hasPhone && (
              <p className="mt-2">
                <a className="font-semibold text-amber" href={telHref}>{business.phoneDisplay}</a>
              </p>
            )}
            <p className="mt-2 text-sm text-white/70">{business.hours ?? business.hoursNote}</p>
          </div>
        </div>
        <p aria-hidden="true" className="wrap select-none overflow-hidden whitespace-nowrap pb-2 text-[22vw] font-bold leading-[0.9] text-white/[0.06] lg:text-[17rem]">
          ARUNA
        </p>
        <p className="wrap pb-24 text-sm text-white/60 md:pb-8">© {new Date().getFullYear()} {business.name}</p>
      </footer>

      {/* Mobile bottom action bar: Call + Directions (Call only shows when a number is configured) */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 grid bg-navy md:hidden"
        style={{ gridTemplateColumns: `repeat(${bar}, 1fr)` }}
      >
        {hasPhone && (
          <a href={telHref} className="flex min-h-14 flex-col items-center justify-center bg-amber text-sm font-semibold text-navy">
            <Phone size={20} aria-hidden="true" /> Call
          </a>
        )}
        {hasWhatsapp && (
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 flex-col items-center justify-center bg-wa text-sm font-semibold text-white">
            <MessageCircle size={20} aria-hidden="true" /> WhatsApp
          </a>
        )}
        <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="flex min-h-14 flex-col items-center justify-center bg-brand text-sm font-semibold text-white">
          <MapPin size={20} aria-hidden="true" /> Directions
        </a>
      </div>
    </>
  )
}
