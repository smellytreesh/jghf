import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Terms — CarHubs',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Terms</h1>
        <p className="mt-4 text-sm text-gray-700">By using CarHubs, you agree we operate as a concierge/consulting service. We don’t own or sell vehicles. All sales occur with third‑party sellers/dealers. You’re responsible for final signatures and approvals.</p>
      </main>
      <Footer />
    </div>
  )
}
