import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'How to Negotiate a Car the Smart Way — CarHubs',
  description: 'Timing, comps, incentives, and scripts to get a clean OTD price without the runaround.',
}

export default function Page() {
  const tips = [
    'Get a real OTD quote (buyer’s order) in writing early.',
    'Use comps: similar VINs, mileage, trim, and incentives in your region.',
    'De-anchor the monthly payment; always talk OTD.',
    'Be timing-aware: month/quarter ends can help — but not always.',
    'Have your own financing pre-approval to benchmark dealer offers.',
    'Be ready to walk; scarcity pressure is often scripted.',
  ]
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">How to Negotiate a Car the Smart Way</h1>
        <p className="mt-3 text-gray-600">Short, practical playbook to secure a fair OTD price.</p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          {tips.map((t, i)=>(<li key={i}>{t}</li>))}
        </ul>
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"}, {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"}, {"@type": "ListItem", "position": 3, "name": "How to Negotiate a Car the Smart Way", "item": "https://www.carhubs.co/learn/how-to-negotiate-a-car"}]
        })} />
      </main>
      <Footer />
    </div>
  )
}
