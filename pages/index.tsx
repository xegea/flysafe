import Link from 'next/link'
import InsuranceCalculator from '../components/InsuranceCalculator'

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Protect your trip with FlySafe
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 text-center leading-relaxed">
            Flight cancellation, lost luggage, and delay assurances designed to give you peace of mind.
          </p>
        </div>

        <InsuranceCalculator />
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16 mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">Why FlySafe?</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fast claims</h3>
            <p className="text-gray-600 leading-relaxed">Quick and clear claims process so you can focus on what matters.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Simple pricing</h3>
            <p className="text-gray-600 leading-relaxed">Pick the coverage that suits your trip with transparent pricing.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Multiple coverages</h3>
            <p className="text-gray-600 leading-relaxed">Choose from cancellation, lost luggage, and delay protection options.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
