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

  if(!product) return <div>Product not found</div>

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.desc}</p>
      <p>Price: {product.price}</p>
      <p style={{marginTop:12}}>
        <Link href={{ pathname: '/checkout', query: { product: slug } }}><button className="btn">Buy now</button></Link>
      </p>
    </div>
  )
}
