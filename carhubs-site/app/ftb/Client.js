
'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
export default function FTB(){
  const [email,setEmail]=useState(''); const [vehicle,setVehicle]=useState(''); const [submitting,setSubmitting]=useState(false)
  async function submit(e){ e.preventDefault(); if(!email||!vehicle) return; setSubmitting(true)
    const res=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,vehicle,source:'FTB',utm_source:'tiktok',utm_campaign:'ftb'})})
    if(res.ok) window.location.href='/thank-you'; else setSubmitting(false) }
  return (<div className="min-h-screen bg-white text-gray-900"><Header/><main className="container py-16" id="main">
    <h1 className="text-3xl font-bold">First-Time Buyer Fast Track</h1>
    <p className="mt-3 text-gray-600">Give us two fields. We’ll send you 3–5 options with OTD prices.</p>
    <form onSubmit={submit} className="card mt-6 max-w-lg p-6 grid gap-4">
      <div><label>Email *</label><input type="email" placeholder="you@example.com" onChange={e=>setEmail(e.target.value)} /></div>
      <div><label>Desired vehicle *</label><input placeholder="e.g., 2021–2023 Hyundai Elantra SEL" onChange={e=>setVehicle(e.target.value)} /></div>
      <button className="btn-primary" disabled={submitting}>{submitting?'Submitting…':'Get my shortlist'}</button>
    </form>
    <p className="mt-4 text-sm text-gray-600">No upfront fee on Starter. Transparent OTD quotes only.</p>
  </main><Footer/></div>) }
