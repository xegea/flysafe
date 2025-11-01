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

  if(!product) return <div>Please pick a product first. <a href="/products">Products</a></div>

  const p = PRODUCT_DATA[product]
  if(!p) return <div>Invalid product</div>

  return (
    <div>
      <h1>Checkout</h1>
      <div className="card">
        <h3>{p.title}</h3>
        <p>Price: {p.price}</p>
      </div>
      {!confirmed ? (
        <div style={{marginTop:12}}>
          <p>Enter your details (mock)</p>
          <button className="btn" onClick={() => setConfirmed(true)}>Confirm Purchase</button>
        </div>
      ) : (
        <div style={{marginTop:12}} className="card">
          <h3>Thank you</h3>
          <p>Your purchase for {p.title} is confirmed (mock).</p>
        </div>
      )}
    </div>
  )
}
