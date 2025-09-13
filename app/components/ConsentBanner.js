'use client'
import { useEffect, useState } from 'react'

export default function ConsentBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('carhubsConsent')
      if (!stored) setShow(true)
    } catch {
      setShow(true)
    }
  }, [])

  function set(consent) {
    try {
      localStorage.setItem('carhubsConsent', consent)
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'consent_update', consent })
    } catch {}
    setShow(false)
    location.reload()
  }

  if (!show) return null
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto max-w-md rounded-2xl border border-border bg-white/90 backdrop-blur px-4 py-3 text-sm shadow-xl dark:bg-slate-900/80">
      We use analytics to improve this site. OK?
      <div className="mt-2 flex justify-end gap-2">
        <button className="btn-outline" onClick={()=>set('denied')}>No</button>
        <button className="btn-primary" onClick={()=>set('granted')}>Yes</button>
      </div>
    </div>
  )
}
