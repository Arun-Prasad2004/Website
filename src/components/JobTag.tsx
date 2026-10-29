import { useState } from 'react'
import { business } from '../config/business'
import { services } from '../config/services'
import { Photo } from './Photo'

/**
 * The live thing: a repair job tag. Pick an appliance and the tag shows its photo and
 * what the shop offers for it. No buttons here: the single call button is at the end of the page.
 * Works without JavaScript too (first appliance is shown).
 */
export function JobTag() {
  const [i, setI] = useState(0)
  const s = services[i]

  return (
    <div className="tag relative bg-white p-5 pt-14 text-ink sm:p-7 sm:pt-14" aria-label="Repair job tag">
      <span className="absolute right-6 top-5 h-5 w-5 rounded-full bg-navy" aria-hidden="true" />
      <p className="text-xl font-bold text-navy">Repair tag</p>
      <p className="text-sm text-ink/70">{business.name}</p>

      <div className="mt-5 overflow-hidden bg-mist" aria-live="polite">
        <Photo key={s.slug} s={s} eager sizes="(min-width:1024px) 520px, 90vw" className="aspect-[4/3] w-full object-cover" />
        <div className="flex items-end justify-between gap-4 p-4">
          <div>
            <p className="text-2xl font-bold leading-tight text-navy">{s.name}</p>
            <p lang="ta" className="text-base text-ink/70">{s.tamil}</p>
          </div>
          <p className="text-right font-semibold text-brand-dark">{s.promise ?? 'Bring it in and ask'}</p>
        </div>
      </div>

      <p id="pick" className="mt-5 text-base font-semibold text-navy">What needs service?</p>
      <div role="group" aria-labelledby="pick" className="mt-2 flex flex-wrap gap-2">
        {services.map((x, idx) => (
          <button
            key={x.slug}
            type="button"
            onClick={() => setI(idx)}
            aria-pressed={idx === i}
            className={`min-h-10 px-3 text-[0.95rem] font-medium transition-colors ${
              idx === i ? 'bg-navy text-white' : 'bg-mist text-navy hover:bg-[#e2e9f2]'
            }`}
          >
            {x.name}
          </button>
        ))}
      </div>
    </div>
  )
}
