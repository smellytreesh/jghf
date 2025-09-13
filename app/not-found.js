import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Page Not Found — CarHubs',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-20">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="mt-3 text-gray-600">We couldn’t find that page. Try the homepage or explore our guides.</p>
        <div className="mt-6 flex gap-3">
          <Link className="btn-primary" href="/">Back to Home</Link>
          <Link className="btn-outline" href="/learn/otd-price">What is OTD?</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
