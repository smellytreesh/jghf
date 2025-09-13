
import Client from './Client'
export function generateMetadata({ params }){
  const creator=params.creator.replace(/-/g,' '); const city=params.city.replace(/-/g,' ')
  return { title: `${creator} x CarHubs — ${city}`, description: `Get a verified out-the-door price in ${city}.`, robots: { index: false } }
}
export default function Page({ params }){ return <Client params={params}/> }
