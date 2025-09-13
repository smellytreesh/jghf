import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'CarHubs in Boston, MA — Car Buying Concierge',
  description: 'Service‑area page for Greater Boston: Cambridge, Somerville, Quincy, Brookline, Medford.',
}

export default function BostonArea() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">CarHubs — Boston, MA</h1>
        <p className="mt-3 text-gray-600">We operate as a service‑area business covering Greater Boston (Cambridge, Somerville, Quincy, Brookline, Medford). Appointments only.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
              <li>Out‑the‑door price negotiation</li>
              <li>Pre‑purchase inspections & history reports</li>
              <li>Financing guidance (bank/CU) & dealer rate checks</li>
              <li>Delivery logistics & temp tags</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">Email: hello@carhubs.co</p>
            <p className="text-sm text-gray-600">Phone: {(process.env.NEXT_PUBLIC_PHONE || '+1-617-555-0139')}</p>
            <p className="text-sm text-gray-600">Hours: Mon–Sat 9:00–7:00 (ET)</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
