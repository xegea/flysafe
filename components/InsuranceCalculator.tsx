import React, { useState } from 'react'

type InsuranceType = 'cancellation' | 'lost-luggage' | 'delays'

const InsuranceCalculator: React.FC = () => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [travelers, setTravelers] = useState('1')
  const [selectedInsurance, setSelectedInsurance] = useState<InsuranceType[]>(['cancellation'])

  const handleCalculate = () => {
    // Mock calculation - in a real app this would call an API
    const basePrice = 19.99
    const numTravelers = parseInt(travelers, 10)
    const numInsuranceTypes = selectedInsurance.length
    const total = basePrice * numTravelers * numInsuranceTypes
    alert(`Estimated insurance cost: $${total.toFixed(2)}`)
  }

  const toggleInsurance = (type: InsuranceType) => {
    setSelectedInsurance(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Calculate your travel insurance</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="relative">
          <select 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-8"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          >
            <option value="">Origin</option>
            <option value="mad">Madrid (MAD)</option>
            <option value="bcn">Barcelona (BCN)</option>
            <option value="lhr">London (LHR)</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-8"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Destination</option>
            <option value="cdg">Paris (CDG)</option>
            <option value="jfk">New York (JFK)</option>
            <option value="nrt">Tokyo (NRT)</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <input
            type="date"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="Select dates"
          />
        </div>

        <div className="relative">
          <select 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-8"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          >
            <option value="1">1 traveler</option>
            <option value="2">2 travelers</option>
            <option value="3">3 travelers</option>
            <option value="4">4 travelers</option>
            <option value="5">5+ travelers</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <button 
          onClick={() => toggleInsurance('cancellation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            selectedInsurance.includes('cancellation') 
              ? 'bg-blue-50 border-blue-200 text-blue-700' 
              : 'border-gray-200 text-gray-600'
          }`}
        >
          <svg className={`w-5 h-5 ${selectedInsurance.includes('cancellation') ? 'text-blue-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
          Cancellation insurance
        </button>

        <button 
          onClick={() => toggleInsurance('lost-luggage')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            selectedInsurance.includes('lost-luggage') 
              ? 'bg-blue-50 border-blue-200 text-blue-700' 
              : 'border-gray-200 text-gray-600'
          }`}
        >
          <svg className={`w-5 h-5 ${selectedInsurance.includes('lost-luggage') ? 'text-blue-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
          Lost luggage insurance
        </button>

        <button 
          onClick={() => toggleInsurance('delays')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            selectedInsurance.includes('delays') 
              ? 'bg-blue-50 border-blue-200 text-blue-700' 
              : 'border-gray-200 text-gray-600'
          }`}
        >
          <svg className={`w-5 h-5 ${selectedInsurance.includes('delays') ? 'text-blue-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
          Flight delays insurance
        </button>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleCalculate}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate
        </button>
      </div>
    </div>
  )
}

export default InsuranceCalculator