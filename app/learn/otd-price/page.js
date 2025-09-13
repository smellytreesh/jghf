import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'What is Out‑The‑Door (OTD) Price? — CarHubs',
  description: 'Understand what OTD includes, see a sample buyer’s order, and learn how to avoid add‑on traps.',
}

export default function OTDPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">What is Out‑The‑Door (OTD) Price?</h1>
        <p className="mt-3 text-gray-600">The OTD price is the real, final amount you will pay to leave with the car. It includes:</p>
        <ul className="mt-3 list-disc pl-5 text-gray-700">
          <li>Vehicle price</li>
          <li>Sales tax</li>
          <li>Title & registration fees</li>
          <li>Dealer documentation fees</li>
          <li>Only the add‑ons you explicitly approve</li>
        </ul>
        <h2 className="mt-8 text-2xl font-semibold">Example breakdown</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[500px] border text-sm">
            <tbody>
              <tr><td className="border p-2">Vehicle price</td><td className="border p-2">$20,500</td></tr>
              <tr><td className="border p-2">Sales tax (6.25%)</td><td className="border p-2">$1,281</td></tr>
              <tr><td className="border p-2">Title & registration</td><td className="border p-2">$210</td></tr>
              <tr><td className="border p-2">Doc fee</td><td className="border p-2">$399</td></tr>
              <tr><td className="border p-2 font-semibold">Estimated OTD</td><td className="border p-2 font-semibold">$22,390</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-600">We’ll request a written buyer’s order with VIN and line items so you can compare apples‑to‑apples.</p>
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"}, {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"}, {"@type": "ListItem", "position": 3, "name": "What is Out\u2011The\u2011Door (OTD) Price?", "item": "https://www.carhubs.co/learn/otd-price"}]
        })} />
      </main>
      <Footer />
    </div>
  )
}
