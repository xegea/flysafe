import Link from 'next/link'
import React from 'react'

type Props = {
  id: string
  title: string
  price?: string
}

export default function ProductCard({ id, title, price }: Props){
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      {price && <p className="text-slate-600">{price}</p>}
      <p className="mt-4">
        <Link href={`/products/${id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View</Link>
      </p>
    </div>
  )
}
