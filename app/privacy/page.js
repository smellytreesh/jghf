import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy — CarHubs',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Privacy</h1>
        <p className="mt-4 text-sm text-gray-700">Our privacy policy: we only collect information you provide for the purpose of delivering concierge services. We don’t sell personal data. Basic analytics & ad pixels may be used to improve conversions. Contact hello@carhubs.co for requests.</p>
      </main>
      <Footer />
    </div>
  )
}
