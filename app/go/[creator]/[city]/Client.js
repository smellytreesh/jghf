
'use client'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function CreatorLanding({ params }){
  const creatorName=params.creator.replace(/-/g,' '); const cityName=params.city.replace(/-/g,' ')
  const [prefill,setPrefill]=useState({})
  useEffect(()=>{ const url=new URL(window.location.href); setPrefill({
      utm_source:url.searchParams.get('utm_source')||'creator',
      utm_medium:url.searchParams.get('utm_medium')||'social',
      utm_campaign:url.searchParams.get('utm_campaign')||cityName.toLowerCase().replace(/\s+/g,'-'),
      source:creatorName }) },[])
  const leadLink=()=>`/#lead?${new URLSearchParams(prefill).toString()}`
  return (<div className="min-h-screen bg-white text-gray-900"><Header/><main className="container py-16" id="main">
    <div className="grid gap-10 md:grid-cols-2">
      <div><span className="badge">Partner offer</span>
        <h1 className="mt-4 text-4xl font-black leading-tight">Skip the dealership games in {cityName}.</h1>
        <p className="mt-4 max-w-xl text-muted">Curated options with <strong>verified out-the-door</strong> prices. {creatorName} sent you — we’ll prioritize your search.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3"><Link href={leadLink()} className="btn-primary">Get my shortlist</Link><Link href="/learn/otd-price" className="btn-outline">What is OTD?</Link></div>
        <div className="mt-6 text-xs text-gray-500">No upfront fee on Starter. Transparent OTD quotes. Appointments only.</div>
      </div>
      <div className="card p-6"><h3 className="text-lg font-semibold">What you get</h3>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
          <li>3–5 matched listings in {cityName} area</li><li>Written OTD quotes (buyer’s order) to compare</li><li>Inspection coordination + delivery options</li>
        </ul>
      </div>
    </div>
  </main><Footer/></div>)}
