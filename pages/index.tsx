import Link from 'next/link'
import InsuranceCalculator from '../components/InsuranceCalculator'

export default function Home(){
  return (
    <div>
      <section className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-center">Protect your trip with FlySafe</h1>
          <p className="text-lg text-slate-700 text-center max-w-2xl mx-auto">Flight cancellation, lost luggage, and delay assurances designed to give you peace of mind.</p>
        </div>

        <InsuranceCalculator />
      </section>

      <section className="container mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold mb-4">Why FlySafe?</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Fast claims</h3>
            <p className="text-slate-600">Quick and clear claims process so you can focus on what matters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Simple pricing</h3>
            <p className="text-slate-600">Pick the coverage that suits your trip.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Multiple coverages</h3>
            <p className="text-slate-600">Choose from cancellation, lost luggage, and delay protection.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
