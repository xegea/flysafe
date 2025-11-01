import Link from 'next/link'

const PRODUCTS = [
  { id: 'cancellation', title: 'Flight Cancellation Assurance', price: '$19.99' },
  { id: 'lost-luggage', title: 'Lost Luggage Assurance', price: '$14.99' }
]

export default function Products(){
  return (
    <div>
      <h1>Products</h1>
      <div className="grid">
        {PRODUCTS.map(p => (
          <div className="card" key={p.id}>
            <h3>{p.title}</h3>
            <p className="muted">{p.price}</p>
            <p style={{marginTop:12}}>
              <Link href={`/products/${p.id}`}><button className="btn">View</button></Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
