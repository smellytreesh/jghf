import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'First-Time Buyer Guide — CarHubs',
  description: 'A clear, step-by-step path to buying your first car with verified out-the-door pricing.',
};

export default function Page() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"},
      {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"},
      {"@type": "ListItem", "position": 3, "name": "First-Time Buyer Guide", "item": "https://www.carhubs.co/learn/first-time-buyer-guide"}
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16" id="main">
        <h1 className="text-3xl font-bold">First-Time Buyer Guide</h1>
        <ol className="mt-4 list-decimal pl-5 space-y-2">
          <li>Budget & credit check.</li>
          <li>Shortlist models that fit your needs.</li>
          <li>Request verified out-the-door quotes.</li>
          <li>Compare, inspect, and close.</li>
          <li>Delivery day checklist.</li>
        </ol>

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
