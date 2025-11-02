import { useRouter } from 'next/router'
import Link from 'next/link'

const PRODUCT_DATA: Record<string,{title:string,price:string,desc:string}> = {
  'cancellation': { title: 'Flight Cancellation Assurance', price: '$19.99', desc: 'Coverage for cancellations under specified reasons.' },
  'lost-luggage': { title: 'Lost Luggage Assurance', price: '$14.99', desc: 'Compensation for lost or delayed luggage.' }
}

export default function Product(){
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const product = slug ? PRODUCT_DATA[slug] : null

  if(!product) return <div className="container mx-auto px-6 py-8">Product not found</div>

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="card">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-slate-600 mt-2">{product.desc}</p>
        <p className="mt-4 font-semibold">Price: {product.price}</p>
        <p className="mt-6">
          <Link href={{ pathname: '/checkout', query: { product: slug } }} className="btn">Buy now</Link>
        </p>
      </div>
    </div>
  )
}
