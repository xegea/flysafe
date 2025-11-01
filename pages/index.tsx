import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <h1>Protect your trip with FlySafe</h1>
        <p>Flight cancellation and lost luggage assurances designed to give you peace of mind.</p>
        <p style={{marginTop:12}}><Link href="/products"><button className="btn">View products</button></Link></p>
      </section>

      <section>
        <h2>Why FlySafe?</h2>
        <div className="grid">
          <div className="card">
            <h3>Fast claims</h3>
            <p>Quick and clear claims process so you can focus on what matters.</p>
          </div>
          <div className="card">
            <h3>Simple pricing</h3>
            <p>Pick the coverage that suits your trip.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
