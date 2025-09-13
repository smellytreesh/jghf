import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Disclaimer — CarHubs',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Disclaimer</h1>
        <p className="mt-4 text-sm text-gray-700">CarHubs is not a dealership. Pricing examples are estimates only and may vary by lender, state taxes, and dealer fees. We encourage independent inspections and financing comparisons.</p>
      </main>
      <Footer />
    </div>
  )
}
