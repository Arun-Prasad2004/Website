import { Link } from 'react-router'
import { Actions } from '../components/Actions'

export default function NotFound() {
  return (
    <section className="wrap py-24">
      <h1 className="text-5xl">Page not found</h1>
      <p className="mt-4 text-lg">Sorry, we could not find that page.</p>
      <Link className="btn btn-dir mt-6" to="/">Go to the home page</Link>
      <Actions className="mt-8" />
    </section>
  )
}
