import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { listPosts } from '../../lib/content'

export const metadata = {
  title: 'Learn — CarHubs',
  description: 'Guides on OTD pricing, negotiation, inspections, and first-time buyer tips.',
}

export default function Learn() {
  const posts = listPosts()
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Learn</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {posts.map((p)=>(
            <Link key={p.slug} href={`/learn/${p.slug}`} className="card p-5 hover:shadow-md">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              <div className="mt-2 text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
            </Link>
          ))}
        </div>
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"ItemList",
          "itemListElement": posts.map((p,i)=>({"@type":"ListItem","position":i+1,"url":`/learn/${p.slug}`}))
        })}} />

      </main>
      <Footer />
    </div>
  )
}
