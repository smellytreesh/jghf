// app/search/page.js  (SERVER COMPONENT)
// Allowed to export metadata here.
export const metadata = {
  title: 'Search — CarHubs',
  description: 'Search CarHubs guides and pages.',
};

import Client from './Client';

const DEFAULT_INDEX = [
  { title: 'First-Time Buyer Guide', href: '/learn/first-time-buyer-guide' },
  { title: 'What is Out-The-Door (OTD) Price?', href: '/learn/otd-price' },
  { title: 'How to Negotiate a Car', href: '/learn/how-to-negotiate-a-car' },
  { title: 'Used Car Inspection Checklist', href: '/learn/used-car-inspection-checklist' },
  { title: 'Home', href: '/' },
];

export default function SearchPage() {
  // In the future you can fetch a real index here (e.g., from /api/search-index)
  return <Client index={DEFAULT_INDEX} />;
}
