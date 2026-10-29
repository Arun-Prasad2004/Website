import { Link } from 'react-router'
import { FinalCta, PageHead } from '../components/Bits'
import { business } from '../config/business'

export default function About() {
  return (
    <>
      <PageHead crumbs={[{ name: 'About' }]} title="About Aruna Electricals & Electronics">
        A local electrical appliance service and repair shop in {business.locality}, {business.city}.
      </PageHead>
      <section className="bg-amber text-navy" aria-labelledby="trust-h">
        <div className="wrap grid items-center gap-6 py-14 sm:py-20 lg:grid-cols-[auto_1fr] lg:gap-16">
          <p className="text-[6rem] font-bold leading-none text-navy sm:text-[9rem]" aria-hidden="true">30</p>
          <div>
            <h2 id="trust-h" className="text-3xl !text-navy sm:text-5xl">30 years of people's trust and choice</h2>
            <p lang="ta" className="mt-3 text-lg font-semibold sm:text-xl">30 ஆண்டுகளாக மக்களின் நம்பிக்கை &amp; தேர்வு</p>
            <p className="mt-3 max-w-2xl text-lg">
              For 30 years, people in Thiruparankundram and around Madurai have trusted {business.name} and chosen us for
              their appliance service and repairs.
            </p>
          </div>
        </div>
      </section>
      <section className="wrap py-16 sm:py-24">
        <div className="max-w-3xl text-lg sm:text-xl">
          <h2 className="text-3xl sm:text-4xl">What we do</h2>
          <p className="mt-4">
            {business.name} is a local shop on Periya Ratha Veethi in Thiruparankundram. We service everyday electrical
            appliances such as mixer grinders, wet grinders, iron boxes, induction stoves, LPG stoves, pressure cookers
            and rod heaters.
          </p>
          <p className="mt-4">
            If your appliance has stopped working, you can bring it to the shop instead of replacing it. See the{' '}
            <Link className="font-semibold text-brand-dark underline underline-offset-4" to="/services">full list of services</Link>{' '}
            or{' '}
            <Link className="font-semibold text-brand-dark underline underline-offset-4" to="/contact">contact the shop</Link>.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
