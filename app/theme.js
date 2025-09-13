export const brand = {
  name: 'CarHubs',
  colors: {
    primary: '#1f4fe0',    // Deeper electric blue
    secondary: '#0f172a',  // Midnight slate
    accent: '#06b6d4',     // Cyan accent
    success: '#10b981',
    warning: '#f59e0b',
    danger:  '#ef4444'
  },
  phone: process.env.NEXT_PUBLIC_PHONE || '+1-617-555-0139',
  site: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carhubs.co'
}
