import { Clock, Mail, MapPin, MessageCircle, Phone, Star } from 'lucide-react'
import { Actions } from '../components/Actions'
import { PageHead } from '../components/Bits'
import { business, fullAddress, hasPhone, hasWhatsapp } from '../config/business'
import { reviewHref, telHref, whatsappHref } from '../lib/links'

export default function Contact() {
  return (
    <>
      <PageHead crumbs={[{ name: 'Contact' }]} title="Contact & directions">
        Call, WhatsApp, or visit us in Thiruparankundram.
      </PageHead>
      <section className="wrap grid gap-8 py-16 sm:py-24 lg:grid-cols-2">
        <div className="grid content-start gap-6 text-lg">
          <div>
            <h2 className="text-3xl">{business.name}</h2>
            <div className="mt-4 flex gap-3">
              <MapPin className="mt-1 shrink-0 text-brand" size={22} aria-hidden="true" />
              <address className="not-italic">{fullAddress}</address>
            </div>
            {hasPhone && (
              <p className="mt-3 flex items-center gap-3">
                <Phone className="shrink-0 text-brand" size={22} aria-hidden="true" />
                <a className="font-semibold text-navy underline underline-offset-4" href={telHref}>{business.phoneDisplay}</a>
              </p>
            )}
            {hasWhatsapp && (
              <p className="mt-3 flex items-center gap-3">
                <MessageCircle className="shrink-0 text-brand" size={22} aria-hidden="true" />
                <a className="font-semibold text-navy underline underline-offset-4" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  WhatsApp {business.phoneDisplay}
                </a>
              </p>
            )}
            {business.email && (
              <p className="mt-3 flex items-center gap-3">
                <Mail className="shrink-0 text-brand" size={22} aria-hidden="true" />
                <a className="font-semibold text-navy underline underline-offset-4" href={`mailto:${business.email}`}>{business.email}</a>
              </p>
            )}
            <p className="mt-3 flex items-center gap-3">
              <Clock className="shrink-0 text-brand" size={22} aria-hidden="true" />
              {business.hours ?? business.hoursNote}
            </p>
          </div>
          <Actions />
        </div>
        <div className="grid content-start gap-5 bg-mist p-8 sm:p-10">
          <h2 className="text-3xl">Find us on Google</h2>
          <p>See the shop on Google Maps, get turn-by-turn directions, and read what other customers have said.</p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-dir" href={business.mapsListingUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={20} aria-hidden="true" /> Open Google Maps listing
            </a>
            <a className="btn btn-ghost !bg-white" href={reviewHref} target="_blank" rel="noopener noreferrer">
              <Star size={20} aria-hidden="true" /> Reviews on Google
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
