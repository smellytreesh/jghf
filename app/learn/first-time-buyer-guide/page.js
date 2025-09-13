import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'First-Time Buyer Guide — CarHubs',
  description: 'Credit readiness, documents checklist, insurance basics, and delivery day tips.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">First-Time Buyer Guide</h1>
        <p className="mt-3 text-gray-600">Everything you need to feel confident from approval to delivery.</p>
        <ol className="mt-4 list-decimal pl-5 text-gray-700">
          <li>Credit readiness: check your reports and utilization.</li>
          <li>Docs: ID, pay stubs, residency proof, insurance binder.</li>
          <li>Budgeting: focus on OTD and total cost of ownership.</li>
          <li>Delivery: bring a checklist, verify VIN, and line items.</li>
        </ol>
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"}, {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"}, {"@type": "ListItem", "position": 3, "name": "First\u2011Time Buyer Guide", "item": "https://www.carhubs.co/learn/first-time-buyer-guide"}]
        })} />
      </main>
      <Footer />
    </div>
  )
}
