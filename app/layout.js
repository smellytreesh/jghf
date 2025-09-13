import '../styles/globals.css'
import Script from 'next/script'
import GTM from './components/GTM'
import SkipLink from './components/SkipLink'
import ConsentBanner from './components/ConsentBanner'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carhubs.co'
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'CarHubs — Car Buying Concierge | Verified Out‑The‑Door Prices in 72 Hours',
  description: 'We scout, vet, and negotiate your next car. Transparent OTD pricing, inspections, and first‑time‑buyer coaching. Only pay when we deliver.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'CarHubs — Car Buying Concierge',
    description: 'Verified OTD prices, 3–5 matched options, and no upfront fees on Starter.',
    url: SITE_URL,
    images: ['/api/og?title=CarHubs%20—%20Car%20Buying%20Concierge'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarHubs — Car Buying Concierge',
    description: 'Skip the dealership games. Get a verified out‑the‑door price in 72 hours.',
    images: ['/api/og?title=CarHubs%20—%20Car%20Buying%20Concierge'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"/>
        {false && (
          <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`
          }}/>
        )}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {false && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
          </noscript>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "CarHubs",
          "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.carhubs.co",
          "potentialAction": {
            "@type": "SearchAction",
            "target": (process.env.NEXT_PUBLIC_SITE_URL || "https://www.carhubs.co") + "/search?q={query}",
            "query-input": "required name=query"
          }
        })}} />
        <GTM />
        <ConsentBanner />
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
