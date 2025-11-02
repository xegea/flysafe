import Link from 'next/link'

const PRODUCTS = [
  { id: 'cancellation', title: 'Flight Cancellation Assurance', price: '$19.99' },
  { id: 'lost-luggage', title: 'Lost Luggage Assurance', price: '$14.99' }
]

export default function Products(){
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {PRODUCTS.map(p => (
          <div className="bg-white p-6 rounded-lg shadow-sm" key={p.id}>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-slate-600">{p.price}</p>
            <p className="mt-4">
              <Link href={`/products/${p.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
