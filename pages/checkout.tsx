import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const PRODUCT_DATA: Record<string,{title:string,price:string}> = {
  'cancellation': { title: 'Flight Cancellation Assurance', price: '$19.99' },
  'lost-luggage': { title: 'Lost Luggage Assurance', price: '$14.99' }
}

export default function Checkout(){
  const router = useRouter()
  const { product } = router.query as { product?: string }
  const [confirmed, setConfirmed] = useState(false)

  useEffect(()=>{
    setConfirmed(false)
  }, [product])

  if(!product) return <div className="container mx-auto px-6 py-8">Please pick a product first. <a href="/products" className="text-blue-600">Products</a></div>

  const p = PRODUCT_DATA[product]
  if(!p) return <div className="container mx-auto px-6 py-8">Invalid product</div>

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-1">Price: <span className="font-medium">{p.price}</span></p>
      </div>
      {!confirmed ? (
        <div className="mt-4">
          <p className="text-slate-600">Enter your details (mock)</p>
          <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md mt-3" onClick={() => setConfirmed(true)}>Confirm Purchase</button>
        </div>
      ) : (
        <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Thank you</h3>
          <p className="text-slate-600">Your purchase for {p.title} is confirmed (mock).</p>
        </div>
      )}
    </div>
  )
}
