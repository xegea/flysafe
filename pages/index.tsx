import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md p-10">
          <h1 className="text-4xl font-extrabold mb-4">Protect your trip with FlySafe</h1>
          <p className="text-lg text-slate-700">Flight cancellation and lost luggage assurances designed to give you peace of mind.</p>
          <p className="mt-6"><Link href="/products"><button className="btn">View products</button></Link></p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">Why FlySafe?</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold">Fast claims</h3>
            <p className="text-slate-600">Quick and clear claims process so you can focus on what matters.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Simple pricing</h3>
            <p className="text-slate-600">Pick the coverage that suits your trip.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
