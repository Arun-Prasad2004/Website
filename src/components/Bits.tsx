import { Link } from 'react-router'
import { ChevronRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, hasPhone, hasWhatsapp } from '../config/business'
import { directionsHref, telHref, whatsappHref } from '../lib/links'

export function Breadcrumbs({ trail }: { trail: { name: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/80">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link className="underline-offset-4 hover:underline" to="/">Home</Link>
        </li>
        {trail.map((t) => (
          <li key={t.name} className="flex items-center gap-1">
            <ChevronRight size={14} aria-hidden="true" />
            {t.to ? <Link className="underline-offset-4 hover:underline" to={t.to}>{t.name}</Link> : <span aria-current="page">{t.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHead({ crumbs, title, children }: { crumbs: { name: string }[]; title: string; children?: React.ReactNode }) {
  return (
    <section className="bg-navy py-16 text-white sm:py-24">
      <div className="wrap">
        <Breadcrumbs trail={crumbs} />
        <h1 className="mt-6 max-w-4xl text-[1.95rem] !text-white min-[420px]:text-4xl sm:text-6xl lg:text-7xl">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">{children}</p>}
      </div>
    </section>
  )
}

/** The one big call-to-action, placed at the end of the page. Call only. */
export function FinalCta() {
  return (
    <section className="bg-navy-deep py-24 text-white sm:py-32" aria-labelledby="final-h">
      <div className="wrap">
        <h2 id="final-h" className="max-w-4xl text-[2.4rem] !text-white sm:text-6xl lg:text-8xl">Need help with an appliance?</h2>
        <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
          Contact Aruna Electricals to ask about appliance repair and servicing.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          {hasPhone && (
            <a className="btn btn-call !min-h-16 !px-8 !text-xl" href={telHref}>
              <Phone size={24} aria-hidden="true" /> Call {business.phoneDisplay}
            </a>
          )}
          {hasWhatsapp && (
            <a className="btn btn-wa !min-h-16 !px-8 !text-xl" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} aria-hidden="true" /> WhatsApp
            </a>
          )}
          <a className="text-lg font-semibold text-white underline underline-offset-4 hover:text-amber" href={directionsHref} target="_blank" rel="noopener noreferrer">
            <MapPin size={20} className="mr-1 inline" aria-hidden="true" />
            Get directions
          </a>
        </div>
      </div>
    </section>
  )
}
