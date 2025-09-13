'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'Search — CarHubs',
  description: 'Search CarHubs guides and pages.',
}

export default function Search() {
  const [q, setQ] = useState('')
  const [pages, setPages] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(()=>{
    fetch('/api/search-index').then(r=>r.json()).then(setPages)
  },[])

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const initial = params.get('q') || ''
    setQ(initial)
  },[])

  useEffect(()=>{
    const s = q.toLowerCase()
    setFiltered(pages.filter(p => p.title.toLowerCase().includes(s)))
  },[q, pages])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Search</h1>
        <input className="mt-4 w-full max-w-xl" placeholder="Search guides and pages..." value={q} onChange={(e)=>setQ(e.target.value)} />
        <div className="mt-6 grid gap-2">
          {filtered.map((p,i)=>(
            <Link key={i} href={p.href} className="underline">{p.title}</Link>
          ))}
          {filtered.length === 0 && <div className="text-sm text-gray-600">No results.</div>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
