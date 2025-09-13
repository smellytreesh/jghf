
'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Papa from 'papaparse'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
export default function ImportReviews(){
  const params=useSearchParams()
  const ok=(params.get('key')||'')===(process.env.NEXT_PUBLIC_ADMIN_KEY||'')
  const [csv,setCsv]=useState('name,text\nAmina,Great experience!\n'); const [json,setJson]=useState([])
  function parse(){ const r=Papa.parse(csv.trim(),{header:true}); setJson(r.data.filter(x=>x.name&&x.text)) }
  function download(){ const blob=new Blob([JSON.stringify(json,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='reviews.json'; a.click(); URL.revokeObjectURL(url) }
  if(!ok){ return (<div className="min-h-screen bg-white text-gray-900"><Header/><main className="container py-16" id="main"><h1 className="text-3xl font-bold">Unauthorized</h1><p className="mt-2 text-gray-600">Provide ?key= in the URL.</p></main><Footer/></div>) }
  return (<div className="min-h-screen bg-white text-gray-900"><Header/><main className="container py-16" id="main">
    <h1 className="text-3xl font-bold">Import Reviews (CSV → JSON)</h1>
    <p className="mt-2 text-sm text-gray-600">Paste CSV with headers <code>name,text</code>. Download <code>reviews.json</code> and place it in <code>/public/data</code>, then redeploy.</p>
    <textarea className="mt-4 w-full h-40" value={csv} onChange={e=>setCsv(e.target.value)} />
    <div className="mt-3 flex gap-2"><button className="btn-outline" onClick={parse}>Preview</button><button className="btn-primary" onClick={download} disabled={!json.length}>Download JSON</button></div>
    <pre className="mt-4 bg-gray-50 p-3 text-xs overflow-auto rounded">{JSON.stringify(json,null,2)}</pre>
  </main><Footer/></div>)}
