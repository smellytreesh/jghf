'use client'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="CarHubs home">
          <img src="/brand/logo-mark.svg" alt="CarHubs logo" className="h-8 w-8" />
          <img src="/brand/wordmark.svg" alt="CarHubs wordmark" className="h-7 hidden sm:block" />
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/#how" className="text-sm font-medium text-gray-600 hover:text-gray-900">How it works</Link>
          <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">FAQ</Link>
          <a href="mailto:hello@carhubs.co" className="text-sm font-medium text-gray-600 hover:text-gray-900">Contact</a>
          <Link href="/#lead" className="btn-primary" aria-label="Get my car lead form">Get my car</Link>
          <ThemeToggle />
        </nav>
        <button className="sm:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor"/></svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white sm:hidden">
          <div className="container flex flex-col gap-4 py-4">
            <a href="/#how" onClick={()=>setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="How it works section">How it works</a>
            <a href="/services" onClick={()=>setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="Services page">Services</a>
            <a href="/pricing" onClick={()=>setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="Pricing page">Pricing</a>
            <a href="/faq" onClick={()=>setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-gray-900" aria-label="FAQ page">FAQ</a>
            <a href="mailto:hello@carhubs.co" className="text-sm font-medium text-gray-600 hover:text-gray-900">Contact</a>
            <a href="/#lead" onClick={()=>setOpen(false)} className="btn-primary">Get my car</a>
          </div>
        </div>
      )}
    </header>
  )
}
