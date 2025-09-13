import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Used Car Inspection Checklist — CarHubs',
  description: 'A quick, practical checklist to inspect a used car before you buy.',
};

export default function Page() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"},
      {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"},
      {"@type": "ListItem", "position": 3, "name": "Used Car Inspection Checklist", "item": "https://www.carhubs.co/learn/used-car-inspection-checklist"}
    ]
  };

  const items = [
    'VIN, title, service records.',
    'Cold start, idle, test drive (all gears).',
    'Brakes, tires, fluid leaks.',
    'Electronics, A/C, warning lights.',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16" id="main">
        <h1 className="text-3xl font-bold">Used Car Inspection Checklist</h1>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          {items.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      </main>
      <Footer />
    </div>
  );
}
