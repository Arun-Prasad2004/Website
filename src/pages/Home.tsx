import { Link } from 'react-router'
import { ArrowUpRight, MapPin, Star, Zap } from 'lucide-react'
import { Actions } from '../components/Actions'
import { FinalCta } from '../components/Bits'
import { JobTag } from '../components/JobTag'
import { Photo } from '../components/Photo'
import { business, fullAddress } from '../config/business'
import { services } from '../config/services'
import { directionsHref, reviewHref } from '../lib/links'

const faqs = [
  {
    q: 'Where is Aruna Electricals located?',
    a: `The shop is at ${fullAddress}. Use the Get Directions button to open it in Google Maps.`,
  },
  {
    q: 'Which appliances can I bring for repair?',
    a: 'Mixer grinders and mixer jars, table-top wet grinders, iron boxes, induction stoves, LPG gas stoves, pressure cookers and small portable rod heaters. If your appliance is not on the list, call and ask.',
  },
  {
    q: 'How can I contact the shop?',
    a: 'Call the shop on the number shown on this page, or visit in person. The Call Now button opens your phone dialler.',
  },
  {
    q: 'Do I need to call before visiting?',
    a: 'You are welcome to visit. A quick call first helps you confirm the shop is open and that your appliance can be serviced.',
  },
  {
    q: 'How can I get directions?',
    a: 'Tap Get Directions to open the shop location in Google Maps on your phone and follow the route from wherever you are.',
  },
]

const stats = [
  ['30', 'years of local trust'],
  [String(services.length), 'appliance types serviced'],
  ['2 hrs', 'LPG stove service'],
  ['Fast', 'pressure cooker & mixer jar service'],
]

/** Bento order and sizes for the photo tiles (large screens). */
const tileOrder = ['lpg-stove', 'pressure-cooker', 'mixer-jar', 'mixer-grinder', 'table-top-grinder', 'iron-box', 'induction-stove', 'rod-heater']
const tileSpan: Record<string, string> = {
  'lpg-stove': 'lg:col-span-2 lg:row-span-2',
  'rod-heater': 'lg:col-span-2',
}

const Bar = () => <div className="mb-5 h-1.5 w-14 bg-amber" aria-hidden="true" />

export default function Home() {
  const fast = services.filter((s) => s.promise)
  const tiles = tileOrder.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean)
  const strip = [...services, ...services]

  return (
    <>
      {/* Hero */}
      <section className="dots relative overflow-hidden bg-navy text-white">
        <Zap
          className="pointer-events-none absolute -right-16 top-10 hidden h-[34rem] w-[34rem] text-amber opacity-[0.07] lg:block"
          strokeWidth={1}
          aria-hidden="true"
        />
        <div className="wrap relative grid items-start gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
          <div className="rise">
            <p className="mb-6 inline-flex items-center gap-2 bg-amber px-3 py-1.5 text-sm font-bold text-navy sm:text-base">
              <Zap size={16} aria-hidden="true" /> 30 years of people's trust
            </p>
            <h1 className="text-[1.95rem] max-[359px]:text-[1.7rem] !text-white min-[420px]:text-[2.35rem] sm:text-6xl lg:text-[4.25rem]">
              Electrical Appliance Repair &amp; Service in Tirupparankundram
            </h1>
            <p lang="ta" className="mt-5 text-lg font-semibold text-amber sm:text-xl">
              மிக்ஸி, கிரைண்டர், ஸ்டவ், குக்கர் பழுது நீக்கம் &amp; சர்வீஸ்
            </p>
            <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
              Looking for help with your electrical appliances? Contact Aruna Electricals for local appliance repair and
              servicing in Tirupparankundram, Madurai.
            </p>
            <Actions className="mt-9" />
          </div>
          <div className="rise" style={{ animationDelay: '120ms' }}>
            <JobTag />
          </div>
        </div>
      </section>

      {/* Appliance ticker (decorative) */}
      <div className="overflow-hidden bg-amber py-4 text-navy" aria-hidden="true">
        <div className="marquee-track">
          {strip.map((s, i) => (
            <span key={i} className="flex items-center whitespace-nowrap text-xl font-bold sm:text-2xl">
              <span className="px-6">{s.name}</span>
              <Zap size={20} className="shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Trust stats */}
      <section aria-label="At a glance" className="bg-white">
        <dl className="wrap grid grid-cols-2 gap-y-10 py-14 sm:py-20 lg:grid-cols-4">
          {stats.map(([n, l], i) => (
            <div key={l} data-reveal={i} className="px-2 sm:px-6">
              <dt className="text-5xl font-bold leading-none text-brand sm:text-7xl">{n}</dt>
              <dd className="mt-3 max-w-[14rem] text-base text-ink/80 sm:text-lg">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Fast service: photo panels */}
      <section className="bg-navy-deep text-white" aria-labelledby="fast-h">
        <div className="wrap py-20 sm:py-28">
          <Bar />
          <h2 id="fast-h" data-reveal className="max-w-3xl text-[1.9rem] min-[400px]:text-4xl !text-white sm:text-6xl">
            Fast service on everyday kitchen items
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {fast.map((s, i) => (
              <li key={s.slug} data-reveal={i} className="group relative overflow-hidden">
                <Photo
                  s={s}
                  sizes="(min-width:768px) 33vw, 90vw"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-navy-deep/45 p-6 sm:p-8">
                  <p className="text-3xl font-bold leading-tight text-white sm:text-4xl">{s.promise}</p>
                  <p className="mt-1 text-lg text-white/90">{s.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services: photo tiles */}
      <section className="section bg-mist" aria-labelledby="services-h">
        <div className="wrap">
          <Bar />
          <h2 id="services-h" data-reveal className="max-w-3xl text-[1.9rem] min-[400px]:text-4xl sm:text-6xl">
            Appliances we service in Tirupparankundram
          </h2>
          <p data-reveal="1" className="mt-5 max-w-2xl text-lg sm:text-xl">
            Bring your appliance to the shop and talk to us directly. If yours is not listed, just ask.
          </p>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-4">
            {tiles.map((s, i) => (
              <li key={s.slug} data-reveal={i % 4} className={tileSpan[s.slug] ?? ''}>
                <Link
                  to={`/services#${s.slug}`}
                  className="group relative block aspect-[4/3] h-full overflow-hidden bg-navy lg:aspect-auto"
                  aria-label={`${s.name}: details`}
                >
                  <Photo
                    s={s}
                    sizes={s.slug === 'lpg-stove' ? '(min-width:1024px) 50vw, 90vw' : '(min-width:1024px) 25vw, (min-width:640px) 50vw, 90vw'}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  {s.promise && (
                    <span className="absolute left-0 top-4 bg-amber px-3 py-1 text-sm font-bold text-navy">{s.promise}</span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-navy/90 p-4 sm:p-5">
                    <div>
                      <h3 className="text-xl !text-white sm:text-2xl">{s.name}</h3>
                      <p lang="ta" className="text-sm text-white/75 sm:text-base">{s.tamil}</p>
                    </div>
                    <ArrowUpRight
                      className="shrink-0 text-amber transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      size={26}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="section" aria-labelledby="how-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Bar />
            <h2 id="how-h" data-reveal className="text-[1.9rem] min-[400px]:text-4xl sm:text-6xl">Simple, local, and close to home</h2>
          </div>
          <ol className="grid gap-4">
            {[
              ['Call the shop', 'Tell us which appliance needs attention.'],
              ['Bring it in', 'Visit us on Periya Ratha Veethi, Thiruparankundram. Tap Get Directions to find us.'],
              ['Collect it serviced', 'Talk to the shop directly about your appliance and what it needs.'],
            ].map(([t, d], i) => (
              <li key={t} data-reveal={i} className="border-l-8 border-amber bg-mist p-7 sm:p-9">
                <p className="text-3xl font-bold text-navy">{t}</p>
                <p className="mt-2 text-lg">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Google reviews (real screenshots supplied by the owner) */}
      <section className="section bg-mist" aria-labelledby="reviews-h">
        <div className="wrap">
          <Bar />
          <h2 id="reviews-h" data-reveal className="max-w-3xl text-[1.9rem] min-[400px]:text-4xl sm:text-6xl">
            What customers say on Google
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              ['/reviews/review-1.jpg', 'Google review by Arun Prasad: 5 stars, "Good services and products"', 720, 215],
              ['/reviews/review-2.jpg', 'Google review by Sandhru, Local Guide: 5 stars, "Very good shop"', 720, 217],
            ].map(([src, alt, w, h], i) => (
              <figure key={src as string} data-reveal={i} className="overflow-hidden bg-[#202124] shadow-xl shadow-navy/10">
                <img src={src as string} alt={alt as string} width={w as number} height={h as number} loading="lazy" decoding="async" className="h-auto w-full" />
              </figure>
            ))}
          </div>
          <a
            className="btn btn-dir mt-8"
            href={reviewHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star size={20} aria-hidden="true" /> Read all reviews on Google
          </a>
        </div>
      </section>

      {/* Why us */}
      <section className="section dots bg-navy text-white" aria-labelledby="why-h">
        <div className="wrap">
          <Bar />
          <h2 id="why-h" data-reveal className="max-w-3xl text-[1.9rem] min-[400px]:text-4xl !text-white sm:text-6xl">
            Why people choose a local repair shop
          </h2>
          <dl className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {[
              ['Convenient local location', `Right in ${business.locality}, so you can walk or ride in with your appliance.`],
              ['Talk directly to the shop', 'Pick up the phone and speak to the shop. No call centre, no forms.'],
              ['Fast service on key items', 'LPG stove service within 2 hours. Fast service for pressure cookers and mixer jars.'],
              ['Easy directions', 'One tap opens the route in Google Maps.'],
            ].map(([t, d], i) => (
              <div key={t} data-reveal={i % 2}>
                <dt className="text-2xl font-bold text-amber sm:text-3xl">{t}</dt>
                <dd className="mt-2 text-lg text-white/85">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Local business */}
      <section className="section" aria-labelledby="visit-h">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <Bar />
            <h2 id="visit-h" className="text-[1.9rem] min-[400px]:text-4xl sm:text-6xl">Visit {business.name}</h2>
            <address className="mt-6 text-xl not-italic">
              <strong>{business.name}</strong>
              <br />
              {business.address.street}
              <br />
              {business.address.locality}, {business.address.city}, {business.address.region} {business.address.postalCode}
            </address>
            <p className="mt-3 text-ink/80">{business.hours ?? business.hoursNote}</p>
            <Actions className="mt-7" />
          </div>
          <div className="flex flex-col justify-between gap-8 bg-mist p-8 sm:p-10">
            <MapPin size={44} className="text-brand" aria-hidden="true" />
            <p className="text-3xl font-bold leading-tight text-navy sm:text-4xl">Find us on Google Maps and see what other customers say.</p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-dir" href={business.mapsListingUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={20} aria-hidden="true" /> Google Maps listing
              </a>
              <a className="btn btn-ghost !bg-white" href={reviewHref} target="_blank" rel="noopener noreferrer">
                <Star size={20} aria-hidden="true" /> Google reviews
              </a>
            </div>
            <a className="font-semibold text-brand-dark underline underline-offset-4" href={directionsHref} target="_blank" rel="noopener noreferrer">Get directions to the shop</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-mist" aria-labelledby="faq-h">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Bar />
            <h2 id="faq-h" className="text-[1.9rem] min-[400px]:text-4xl sm:text-6xl">Questions people ask</h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white p-6 open:border-l-8 open:border-amber">
                <summary className="cursor-pointer text-lg font-semibold text-navy">{f.q}</summary>
                <p className="mt-3 text-lg">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
