export function Button({ as='a', className='', variant='primary', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
  const styles = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    outline: 'border border-border bg-white hover:bg-gray-50',
    ghost: 'hover:bg-gray-100'
  }[variant] || ''
  const C = as
  return <C className={`${base} ${styles} ${className}`} {...props} />
}

export function Card({ className='', ...props }) {
  return <div className={`rounded-2xl border border-border bg-card/80 backdrop-blur shadow-sm ${className}`} {...props} />
}

export function Badge({ className='', ...props }) {
  return <span className={`inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium ${className}`} {...props} />
}
