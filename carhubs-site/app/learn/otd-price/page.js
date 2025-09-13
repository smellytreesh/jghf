import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'What is Out-The-Door (OTD) Price? — CarHubs',
  description: 'OTD is the total you pay to drive away. Here’s how to use it to avoid dealership games.',
};

export default function Page() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carhubs.co/"},
      {"@type": "ListItem", "position": 2, "name": "Learn", "item": "https://www.carhubs.co/learn"},
      {"@type": "ListItem", "position": 3, "name": "What is Out-The-Door (OTD) Price?", "item": "https://www.carhubs.co/learn/otd-price"}
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16" id="main">
        <h1 className="text-3xl font-bold">What is Out-The-Door (OTD) Price?</h1>
        <div className="mt-4 space-y-2">
          <p>OTD = vehicle price + fees + taxes + DMV. No surprises.</p>
          <p>Always compare written OTD quotes (buyer’s orders) for apples-to-apples.</p>
        </div>

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
