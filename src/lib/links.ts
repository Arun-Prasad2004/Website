import { business, hasPhone, hasWhatsapp } from '../config/business'

export const telHref = hasPhone ? `tel:${business.phoneE164}` : ''
export function whatsappHref(message = 'Hello Aruna Electricals, I need help with an appliance.') {
  if (!hasWhatsapp) return ''
  return `https://wa.me/${business.whatsappE164.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export const directionsHref = business.directionsUrl
export const reviewHref = business.reviewUrl || business.mapsListingUrl
