import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  robots: { index: false },
  title: 'Thanks — CarHubs',
  description: 'We received your request. A specialist will follow up shortly.',
}

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-20">
        <h1 className="text-3xl font-bold">Thanks — we got it!</h1>
        <p className="mt-3 text-gray-600">A CarHubs specialist will text/email you shortly. Want to speed things up?</p>
        <ul className="mt-4 list-disc pl-5 text-gray-600">
          <li>Reply to our email with any must‑have colors or trims.</li>
          <li>Have your driver’s license and insurance handy for test drives.</li>
        </ul>
        <div className="mt-6">
          <Link className="btn-primary" href="/">Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
