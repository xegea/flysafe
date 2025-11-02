import ProductCard from '../../components/ProductCard'

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
          <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} />
        ))}
      </div>
    </div>
  )
}
