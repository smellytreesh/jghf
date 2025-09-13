import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Used Car Inspection Checklist — CarHubs',
  description: 'Mobile inspections, common findings, and how to act on the results.',
}

export default function Page() {
  const items = [
    'Confirm VIN and mileage; check for open recalls.',
    'Exterior: panel gaps, paint, glass, tires (tread depth/age).',
    'Interior: electronics, seatbelts, airbags lights, OBD codes.',
    'Underhood: fluids, leaks, belts/hoses, service history.',
    'Road test: alignment, braking, acceleration, noises.',
    'Undercarriage: rust, leaks, suspension components.',
  ]
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Used Car Inspection Checklist</h1>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          {items.map((t, i)=>(<li key={i}>{t}</li>))}
        </ul>
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"}, {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"}, {"@type": "ListItem", "position": 3, "name": "Used Car Inspection Checklist", "item": "https://www.carhubs.co/learn/used-car-inspection-checklist"}]
        })} />
      </main>
      <Footer />
    </div>
  )
}
