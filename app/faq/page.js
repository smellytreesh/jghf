import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'FAQ — CarHubs',
  description: 'Quick answers about OTD pricing, timing, fees, and first‑time buyer support.',
}

const faqs = [
  {q: 'What does out‑the‑door (OTD) price include?', a: 'The OTD price includes vehicle price plus taxes, title/registration fees, dealer documentation fees, and only add‑ons you approve.'},
  {q: 'How do you charge?', a: 'Starter has no upfront fee and a success fee at delivery. Pro and Premium add priority search, inspection, and concierge services.'},
  {q: 'Do you help first‑time buyers?', a: 'Yes. We assist with pre‑approval, documentation, insurance basics, and dealership etiquette so you can sign with confidence.'},
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">FAQ</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f, i)=>(
            <details key={i} className="card p-5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <div className="mt-2 text-sm text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(x => ({
            "@type": "Question",
            "name": x.q,
            "acceptedAnswer": { "@type": "Answer", "text": x.a }
          }))
        })}} />
      </main>
      <Footer />
    </div>
  )
}
