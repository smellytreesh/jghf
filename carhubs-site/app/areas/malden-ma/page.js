import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'CarHubs in Malden Ma — Car Buying Concierge',
  description: 'Service‑area page for Malden Ma. Appointments only.',
}

export default function City() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16" id="main">
        <h1 className="text-3xl font-bold">CarHubs — Malden Ma</h1>
        <p className="mt-3 text-gray-600">We operate as a service‑area business in Malden Ma. Appointments only. Transparent out‑the‑door quotes, inspection coordination, and delivery options.</p>
        <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
          <li>OTD price negotiation with written buyer’s orders</li>
          <li>Pre‑purchase inspections & history reports</li>
          <li>Financing guidance (bank/CU) & dealer rate checks</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
