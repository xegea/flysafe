import React, { useState } from 'react'

type InsuranceType = 'cancellation' | 'lost-luggage' | 'delays'

// Icon components for better visual hierarchy
const PlaneIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
)

const UsersIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>
)

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
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="px-8 pt-8 pb-6 bg-gradient-to-br from-blue-500 to-blue-600">
        <h2 className="text-2xl font-bold text-white mb-2">Calculate your travel insurance</h2>
        <p className="text-blue-100 text-sm">Get instant quotes for your trip protection</p>
      </div>
      
      <div className="p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Origin</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PlaneIcon />
              </div>
              <select 
                className="block w-full pl-10 pr-10 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                <option value="">Select origin</option>
                <option value="mad">Madrid (MAD)</option>
                <option value="bcn">Barcelona (BCN)</option>
                <option value="lhr">London (LHR)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Destination</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PlaneIcon />
              </div>
              <select 
                className="block w-full pl-10 pr-10 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Select destination</option>
                <option value="cdg">Paris (CDG)</option>
                <option value="jfk">New York (JFK)</option>
                <option value="nrt">Tokyo (NRT)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Travel dates</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon />
              </div>
              <input
                type="date"
                className="block w-full pl-10 pr-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Travelers</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UsersIcon />
              </div>
              <select 
                className="block w-full pl-10 pr-10 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              >
                <option value="1">1 traveler</option>
                <option value="2">2 travelers</option>
                <option value="3">3 travelers</option>
                <option value="4">4 travelers</option>
                <option value="5">5+ travelers</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            onClick={() => toggleInsurance('cancellation')}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
              selectedInsurance.includes('cancellation')
                ? 'bg-blue-50 border-2 border-blue-500 text-blue-700 shadow-sm'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50'
            }`}
          >
            <svg className={`w-5 h-5 ${selectedInsurance.includes('cancellation') ? 'text-blue-500' : 'text-gray-400'}`} 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="font-medium">Cancellation insurance</span>
          </button>

          <button 
            onClick={() => toggleInsurance('lost-luggage')}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
              selectedInsurance.includes('lost-luggage')
                ? 'bg-blue-50 border-2 border-blue-500 text-blue-700 shadow-sm'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50'
            }`}
          >
            <svg className={`w-5 h-5 ${selectedInsurance.includes('lost-luggage') ? 'text-blue-500' : 'text-gray-400'}`} 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="font-medium">Lost luggage insurance</span>
          </button>

          <button 
            onClick={() => toggleInsurance('delays')}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
              selectedInsurance.includes('delays')
                ? 'bg-blue-50 border-2 border-blue-500 text-blue-700 shadow-sm'
                : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50'
            }`}
          >
            <svg className={`w-5 h-5 ${selectedInsurance.includes('delays') ? 'text-blue-500' : 'text-gray-400'}`} 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="font-medium">Flight delays insurance</span>
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleCalculate}
            className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-transform hover:scale-105"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  )
}

export default InsuranceCalculator