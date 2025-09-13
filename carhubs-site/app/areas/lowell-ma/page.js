import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'CarHubs in Lowell Ma — Car Buying Concierge',
  description: 'Service‑area page for Lowell Ma. Appointments only.',
}

export default function City() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">CarHubs — Lowell Ma</h1>
        <p className="mt-3 text-gray-600">We operate as a service‑area business in Lowell Ma. Appointments only.</p>
      </main>
      <Footer />
    </div>
  )
}
