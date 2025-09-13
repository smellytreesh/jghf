import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Service Areas — CarHubs',
  description: 'We serve Greater Boston as a service-area business.',
}

const cities = [
  { href: '/areas/boston-ma', name: 'Boston' },
  { href: '/areas/cambridge-ma', name: 'Cambridge' },
  { href: '/areas/somerville-ma', name: 'Somerville' },
  { href: '/areas/quincy-ma', name: 'Quincy' },
  { href: '/areas/brookline-ma', name: 'Brookline' },
  { href: '/areas/medford-ma', name: 'Medford' },
  { href: '/areas/lowell-ma', name: 'Lowell' },
  { href: '/areas/worcester-ma', name: 'Worcester' },
  { href: '/areas/newton-ma', name: 'Newton' },
  { href: '/areas/waltham-ma', name: 'Waltham' },
  { href: '/areas/framingham-ma', name: 'Framingham' },
  { href: '/areas/lynn-ma', name: 'Lynn' },
  { href: '/areas/revere-ma', name: 'Revere' },
  { href: '/areas/peabody-ma', name: 'Peabody' },
  { href: '/areas/dedham-ma', name: 'Dedham' },
  { href: '/areas/braintree-ma', name: 'Braintree' },
  { href: '/areas/malden-ma', name: 'Malden' },
  { href: '/areas/chelsea-ma', name: 'Chelsea' },
]

export default function Areas() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16" id="main">
        <h1 className="text-3xl font-bold">Service Areas</h1>
        <p className="mt-3 text-gray-600">We help first‑time buyers and busy shoppers across Greater Boston.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {cities.map((c,i)=>(
            <Link key={i} href={c.href} className="card p-5 hover:shadow-md">{c.name}</Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
