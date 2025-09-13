import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { listPosts, getPost } from '../../../lib/content'

export async function generateStaticParams() {
  return listPosts().map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const { meta } = getPost(params.slug)
  const og = `/api/og?title=${encodeURIComponent(meta.title)}`;
  return {
    title: `${meta.title} — CarHubs`,
    description: meta.description,
    alternates: { canonical: `/learn/${meta.slug}` },
    openGraph: { images: [og] },
    twitter: { images: [og] }
  }
}

export default function PostPage({ params }) {
  const { meta, html } = getPost(params.slug)
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <div className="mt-3 text-sm text-gray-500">{new Date(meta.date).toLocaleDateString()}</div>
        <article className="prose prose-sm mt-6 max-w-none" dangerouslySetInnerHTML={{__html: html}} />
      </main>
      <Footer />
    </div>
  )
}
