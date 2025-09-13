import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'How to Negotiate a Car the Smart Way — CarHubs',
  description: 'Use out-the-door quotes and a written buyer’s order to negotiate with confidence.',
};

export default function Page() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"},
      {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"},
      {"@type": "ListItem", "position": 3, "name": "How to Negotiate a Car the Smart Way", "item": "https://www.carhubs.co/learn/how-to-negotiate-a-car"}
    ]
  };

  const tips = [
    'Negotiate OTD (out-the-door), not monthly payment.',
    'Get competing written quotes (buyer’s orders) with VIN.',
    'Line-item compare: doc fees, add-ons, taxes.',
    'Be ready to walk; ask for the buyer’s order by email.'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16" id="main">
        <h1 className="text-3xl font-bold">How to Negotiate a Car the Smart Way</h1>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          {tips.map((t, i) => <li key={i}>{t}</li>)}
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
