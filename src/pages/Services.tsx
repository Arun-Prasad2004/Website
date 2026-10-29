import { FinalCta, PageHead } from '../components/Bits'
import { Photo } from '../components/Photo'
import { photoCredits } from '../config/credits'
import { services } from '../config/services'

export default function Services() {
  return (
    <>
      <PageHead crumbs={[{ name: 'Services' }]} title="Appliance repair services in Tirupparankundram">
        Appliances you can bring to Aruna Electricals, Madurai. Ask the shop about yours.
      </PageHead>

      <div className="wrap py-16 sm:py-24">
        <ul className="grid gap-16 sm:gap-24">
          {services.map((s, idx) => (
            <li key={s.slug}>
              <section
                id={s.slug}
                aria-labelledby={`${s.slug}-h`}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={`relative overflow-hidden bg-mist ${idx % 2 ? 'lg:order-2' : ''}`}>
                  <Photo s={s} sizes="(min-width:1024px) 45vw, 90vw" className="aspect-[4/3] w-full object-cover" />
                  {s.promise && (
                    <span className="absolute left-0 top-5 bg-amber px-4 py-1.5 font-bold text-navy">{s.promise}</span>
                  )}
                </div>
                <div>
                  <h2 id={`${s.slug}-h`} className="text-3xl sm:text-5xl">{s.heading}</h2>
                  <p lang="ta" className="mt-2 text-lg text-ink/70">{s.tamil}</p>
                  <p className="mt-5 max-w-xl text-lg sm:text-xl">{s.intro}</p>
                  <h3 className="mt-8 text-xl">Common problems customers ask about</h3>
                  <ul className="mt-3 grid list-disc gap-1.5 pl-6 text-lg">
                    {s.problems.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-ink/70">Bring the appliance in and the shop will tell you what it needs.</p>
                </div>
              </section>
            </li>
          ))}
        </ul>

        <p className="mt-20 text-sm text-ink/60">
          Photos: {photoCredits.map((c, i) => (
            <span key={c.key}>
              {i > 0 && '; '}
              <a className="underline underline-offset-2" href={c.page} target="_blank" rel="noopener noreferrer">{c.title}</a> by {c.creator} ({c.license})
            </span>
          ))}
          . Photos are for illustration and show example appliances, not the shop.
        </p>
      </div>
      <FinalCta />
    </>
  )
}
