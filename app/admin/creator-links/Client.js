
'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
const creators=['autoadvice','drivewithjules','garageguru','bostonbargains','negotiatebetter']
const cities=['boston-ma','cambridge-ma','somerville-ma','quincy-ma','brookline-ma','medford-ma','lowell-ma','worcester-ma','newton-ma','waltham-ma']
export default function CreatorLinks(){
  const [creator,setCreator]=useState(creators[0]); const [city,setCity]=useState(cities[0])
  const base=(process.env.NEXT_PUBLIC_SITE_URL||'')
  const url=`${base}/go/${creator}/${city}?utm_source=creator&utm_medium=social&utm_campaign=${city}`
  return (<div className="min-h-screen bg-white text-gray-900">
    <Header/><main className="container py-16" id="main"><h1 className="text-3xl font-bold">Creator Link Builder</h1>
    <div className="mt-6 grid max-w-xl gap-4">
      <label className="grid gap-1"><span>Creator handle</span><select value={creator} onChange={e=>setCreator(e.target.value)}>{creators.map(c=><option key={c}>{c}</option>)}</select></label>
      <label className="grid gap-1"><span>City</span><select value={city} onChange={e=>setCity(e.target.value)}>{cities.map(c=><option key={c}>{c}</option>)}</select></label>
      <div className="card p-4"><div className="text-xs text-gray-500">Share this URL:</div><div className="mt-2 break-all text-sm">{url}</div></div>
    </div></main><Footer/></div>)}
