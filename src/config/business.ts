/**
 * ONE PLACE for every business detail. Edit here, rebuild, redeploy.
 * Leave a value as '' (or null) and the site hides that button/line automatically.
 */
export const business = {
  name: 'Aruna Electricals & Electronics',
  shortName: 'Aruna Electricals',
  locality: 'Tirupparankundram',
  city: 'Madurai',
  region: 'Tamil Nadu',
  country: 'IN',

  // Public address from the existing Google Business Profile. Owner: please confirm.
  address: {
    street: '230, Periya Ratha Veethi',
    locality: 'Thiruparankundram',
    city: 'Madurai',
    region: 'Tamil Nadu',
    postalCode: '625005',
  },

  // Public number on the Google Business Profile.
  phoneDisplay: '98421 78629',
  phoneE164: '+919842178629',
  whatsappE164: '+919842178629', // same number; set '' to hide every WhatsApp button

  // Not confirmed yet - sources disagree. Leave null until the owner gives the real timings.
  hours: null as string | null,
  hoursNote: 'Call to check the shop timings before you visit.',

  email: '', // e.g. 'name@gmail.com' - leave '' to hide

  // Official links
  mapsListingUrl:
    'https://www.google.com/maps/search/?api=1&query=Aruna+Electricals+Thiruparankundram+Madurai',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Aruna+Electricals+Thiruparankundram+Madurai',
  // Official "write a review" link from the owner's Google Business Profile.
  reviewUrl: '',

  // Final website address (used for canonical URLs, sitemap, structured data).
  siteUrl: 'https://aruna-electricals.vercel.app',
}

export const fullAddress = `${business.address.street}, ${business.address.locality}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`

export const hasPhone = Boolean(business.phoneE164)
export const hasWhatsapp = Boolean(business.whatsappE164)
