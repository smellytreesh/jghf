'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(()=>{
    try {
      const saved = localStorage.getItem('carhubsTheme')
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = saved ? saved === 'dark' : prefers
      setDark(isDark)
      document.documentElement.classList.toggle('dark', isDark)
    } catch {}
  },[])
  function toggle() {
    const next = !dark
    setDark(next)
    try {
      localStorage.setItem('carhubsTheme', next ? 'dark' : 'light')
    } catch {}
    document.documentElement.classList.toggle('dark', next)
  }
  return (
    <button onClick={toggle} className="rounded-xl border border-border px-3 py-2 text-xs font-semibold" aria-label="Toggle theme">
      {dark ? 'Light' : 'Dark'} mode
    </button>
  )
}
