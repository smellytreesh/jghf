'use client'
import Header from './components/Header'
import { motion } from 'framer-motion'
import Footer from './components/Footer'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '15555550139'

export default function Home() {
  function CountUp({to, duration=1200}) {
    const [n, setN] = useState(0)
    useEffect(()=>{
      let start = performance.now()
      const anim = (t)=>{
        const p = Math.min(1, (t-start)/duration)
        setN(Math.floor(to * p))
        if (p<1) requestAnimationFrame(anim)
      }
      requestAnimationFrame(anim)
    },[to])
    return <span>{n}</span>
  }

  function track(evtName, payload={}) {
    try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: evtName, ...payload }); } catch {}
  }

  const [step, setStep] = useState(1)
  const [showExit, setShowExit] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [msg, setMsg] = useState('')
  const [form, setForm] = useState({
    utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '', referrer: '' ,
    name: '',
    email: '',
    vehicle: '',
    budget: '',
    phone: '',
    timeline: '',
    zip: '',
    source: 'TikTok',
    message: '', website: ''  // honeypot
  })

  useEffect(() => {
    // Capture UTMs + referrer
    try {
      const params = new URLSearchParams(window.location.search)
      setForm(prev => ({
        ...prev,
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
        utm_term: params.get('utm_term') || '',
        referrer: document.referrer || ''
      }))
    } catch {}

    const handler = (e) => {
      if (e.clientY < 10) setShowExit(true)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handler)
    }
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  function validEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) }
  async function submitLead(e) {
    e.preventDefault()
    if (!form.email || !validEmail(form.email) || !form.vehicle) {
      setMsg('Please enter a valid email and your desired vehicle.')
      setTimeout(()=>setMsg(''), 2500)
      return
    }
    setSubmitting(true)
    try {
      track('lead_submit'); const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      window.location.href = '/thank-you'
    } catch (err) {
      setMsg('Something went wrong. Try again or email hello@carhubs.co')
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* HERO */}
        <section className="pb-8 pt-14 hero">
          <div className="container grid items-center gap-10 md:grid-cols-2">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
              <span className="badge">Save time, avoid dealer games</span>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Skip the dealership games. Get a verified <span className="text-primary">out‑the‑door</span> price in 72 hours.
              </h1>
              <p className="mt-4 max-w-xl text-muted">
                Tell us your budget and must‑haves. We scout, vet, and negotiate — you approve and sign with confidence.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#lead" onClick={()=>track("lead_start",{location:"hero"})} className="btn-primary">Get my shortlist</a>
                <a href="#how" onClick={()=>track("view_how")} className="btn-outline">See how it works</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-500">
                <span className="badge">No upfront fees</span>
                <span className="badge">New & used</span>
                <span className="badge">Transparent OTD pricing</span>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
              <div className="card p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="card p-3">
                    <div className="text-xl font-bold"><CountUp to={14}/> days</div>
                    <div className="text-xs text-gray-500">Days saved</div>
                  </div>
                  <div className="card p-3">
                    <div className="text-xl font-bold">$<CountUp to={1200}/>+</div>
                    <div className="text-xs text-gray-500">Avg. savings</div>
                  </div>
                  <div className="card p-3">
                    <div className="text-xl font-bold"><CountUp to={150}/>+</div>
                    <div className="text-xs text-gray-500">Dealer network</div>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-dashed border-border p-4 text-sm text-gray-600">
                  “CarHubs made the OTD price crystal clear. I signed in one visit.”
                  <div className="mt-2 text-xs text-gray-700">★★★★★ — Amina, first‑time buyer</div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-10 flex justify-center">
            <a href="#lead" onClick={()=>track("lead_start",{location:"below_hero"})} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Start with your wish list <span>→</span>
            </a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-16 sm:py-20">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Four steps. Zero stress.</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">We do the heavy lifting while you stay in control.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              <div className="card p-6">
                <h3 className="text-lg font-semibold">Tell us your goals</h3>
                <p className="text-muted mt-2">Budget, timeline, must‑have features, and any brand preferences.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">We research & vet</h3>
                <p className="text-muted mt-2">Market scan across dealers/private sellers; VIN checks and inspection coordination.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">We negotiate OTD</h3>
                <p className="text-muted mt-2">We use comps and incentives to secure a transparent out‑the‑door price.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">You pick. We deliver</h3>
                <p className="text-muted mt-2">Choose your favorite. We help with paperwork, temp tags, and delivery options.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LEAD FORM */}
        <section id="lead" className="py-16 sm:py-20">
          <div className="container grid gap-8 md:grid-cols-2">
            <div className="card p-6">
              <form onSubmit={submitLead} className="grid gap-4">
                {step === 1 && (
                  <>
                    <div className="grid gap-2">
                      <label htmlFor="lead-email">Email *</label>
                      <input id="lead-email" aria-required="true" type="email" placeholder="you@example.com" onChange={(e)=>setForm({...form, email:e.target.value})} />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="lead-vehicle">Desired vehicle *</label>
                      <input id="lead-vehicle" aria-required="true" placeholder="e.g., 2021–2023 Hyundai Elantra SEL, <45k miles" onChange={(e)=>setForm({...form, vehicle:e.target.value})} />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="lead-budget">Budget</label>
                      <input id="lead-budget" placeholder="$15k–$22k OTD" onChange={(e)=>setForm({...form, budget:e.target.value})} />
                    </div>
                    <div className="mt-2 flex gap-3">
                      <button type="button" onClick={()=>setStep(2)} className="btn-primary">Next</button>
                      <a href="/learn/otd-price" className="btn-outline">What is OTD?</a>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="grid gap-2">
                      <label htmlFor="lead-name">Name</label>
                      <input id="lead-name" placeholder="Your full name" onChange={(e)=>setForm({...form, name:e.target.value})} />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="lead-phone">Phone</label>
                      <input id="lead-phone" placeholder="(optional)" onChange={(e)=>setForm({...form, phone:e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="lead-timeline">Timeline</label>
                        <input id="lead-timeline" placeholder="e.g., within 2 weeks" onChange={(e)=>setForm({...form, timeline:e.target.value})} />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="lead-zip">ZIP</label>
                        <input id="lead-zip" placeholder="e.g., 02127" onChange={(e)=>setForm({...form, zip:e.target.value})} />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="lead-source">Where did you hear about us?</label>
                      <select id="lead-source" defaultValue={form.source} onChange={(e)=>setForm({...form, source:e.target.value})}>
                        <option>TikTok</option>
                        <option>Instagram</option>
                        <option>Referral</option>
                        <option>Google</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="lead-notes">Anything else?</label>
                      <textarea id="lead-notes" rows={4} placeholder="Trim, color, must‑haves, trade‑in details, etc." onChange={(e)=>setForm({...form, message:e.target.value})}></textarea>
                    </div>
                    <div className="mt-2 flex gap-3">
                      <button type="submit" disabled={submitting} className="btn-primary">{submitting ? 'Submitting…' : 'Get my options'}</button>
                      <button type="button" onClick={()=>setStep(1)} className="btn-outline">Back</button>
                    </div>
                  </>
                )}
                {msg && <div className="text-xs text-red-600">{msg}</div>}
                <p className="text-xs text-gray-500">By submitting, you agree to be contacted about your request. No spam, ever.</p>
              </form>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold">What happens after I submit?</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
                  <li>We confirm details by text/email within business hours.</li>
                  <li>You receive 3–5 matched listings with transparent OTD quotes.</li>
                  <li>We coordinate a visit or delivery and finalize paperwork.</li>
                </ul>
                <a href="/lead-magnets/otd-checklist.pdf" className="mt-4 inline-block underline text-sm text-primary">Download: OTD Checklist (PDF)</a>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">Prefer to talk?</h3>
                <p className="mt-2 text-sm text-gray-600">Email <a className="underline" href="mailto:hello@carhubs.co">hello@carhubs.co</a> or tap below:</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a className="btn-outline" href="mailto:hello@carhubs.co?subject=CarHubs%20Consult&body=Name%3A%0AVehicle%3A%0ABudget%3A%0ATimeline%3A%0A">Email us</a>
                  <a className="btn-outline" onClick={()=>track("whatsapp_click")} href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a>\n                  <a className="btn-outline" href={`tel:${process.env.NEXT_PUBLIC_PHONE || '+1-617-555-0139'}`} onClick={()=>track("call_click")}>Call us</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ PREVIEW + CTA */}
        <section className="py-10">
          <div className="container text-center">
            <h3 className="text-xl font-semibold">Got questions about OTD, inspections, or financing?</h3>
            <p className="text-muted mt-2">We kept it simple — quick answers in the FAQ.</p>
            <div className="mt-4">
              <Link href="/faq" className="btn-outline">Read the FAQ</Link>
            </motion.div>
          </div>
        </section>

        {/* JSON-LD Organization/ProfessionalService */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "CarHubs",
          "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.carhubs.co",
          "logo": (process.env.NEXT_PUBLIC_SITE_URL || "https://www.carhubs.co") + "/logo.png",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 42.3601, "longitude": -71.0589},
            "geoRadius": 25000
          },
          "contactPoint": [{
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "hello@carhubs.co",
            "telephone": process.env.NEXT_PUBLIC_PHONE || "+1-617-555-0139",
            "areaServed": "US"
          }],
          "sameAs": [
            "https://www.tiktok.com/@carhubs",
            "https://www.instagram.com/carhubs"
          ]
        })}} />
      </main>
      <Footer />

      {/* Exit intent modal */}
      {showExit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={()=>setShowExit(false)}>
          <div className="card max-w-md bg-white p-6" onClick={(e)=>e.stopPropagation()}>
            <h3 className="text-lg font-semibold">Before you go:</h3>
            <p className="mt-2 text-sm text-gray-600">Grab our free 1-page OTD checklist so you never overpay.</p>
            <div className="mt-4 flex gap-3">
              <a href="/lead-magnets/otd-checklist.pdf" className="btn-primary" onClick={()=>setShowExit(false)}>Download PDF</a>
              <a href="#lead" className="btn-outline" onClick={()=>setShowExit(false)}>Get my shortlist</a>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}
