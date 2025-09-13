import fs from 'fs'
import path from 'path'
export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carhubs.co'
  const last = '2025-09-13'
  const staticPaths = [
    '/', '/services', '/pricing', '/faq', '/thank-you',
    '/learn', '/areas', '/areas/boston-ma', '/areas/cambridge-ma', '/areas/somerville-ma', '/areas/quincy-ma',
    '/areas/brookline-ma', '/areas/medford-ma', '/areas/lowell-ma', '/areas/worcester-ma',
    '/reviews', '/privacy', '/terms', '/disclaimer', '/ftb', '/partners', '/book', '/search', '/compare', '/feed'
  ]
  const contentDir = path.join(process.cwd(), 'content', 'learn')
  const dynamicPosts = fs.existsSync(contentDir) ? fs.readdirSync(contentDir).filter(f=>f.endsWith('.md')).map(f=>`/learn/${f.replace(/\.md$/, '')}`) : []
  const areaRoot = path.join(process.cwd(), 'app', 'areas')
  const areaDirs = fs.readdirSync(areaRoot).filter(name => !name.includes('.'))
  const dynamicAreas = areaDirs.flatMap(dir => dir === 'components' ? [] : [`/areas/${dir}`])
  const all = Array.from(new Set([...staticPaths, ...dynamicPosts, ...dynamicAreas]))
  return all.map(p => ({ url: `${siteUrl}${p}`, lastModified: last }))
}
