import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { hasPhone, hasWhatsapp } from '../config/business'
import { directionsHref, telHref, whatsappHref } from '../lib/links'

/** Call + Directions + WhatsApp. The call button only renders when a phone number is configured. */
export function Actions({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {hasPhone && (
        <a className="btn btn-call" href={telHref}>
          <Phone size={20} aria-hidden="true" /> Call Now
        </a>
      )}
      <a className="btn btn-dir" href={directionsHref} target="_blank" rel="noopener noreferrer">
        <MapPin size={20} aria-hidden="true" /> Get Directions
      </a>
      {hasWhatsapp && (
        <a className="btn btn-wa" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} aria-hidden="true" /> WhatsApp
        </a>
      )}
    </div>
  )
}
