import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const LetterPDF = dynamic(() => import('../components/LetterPDF'), { ssr: false })

export default function Home() {
  const [form, setForm] = useState({ name: '', type: 'Leave', date: '', reason: '' })
  const [data, setData] = useState(null)

  return (
    <>
      <Head>
        <title>Letter Generator</title>
        <meta name="description" content="Create Leave, Job or Resignation Letters as PDF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Letter Generator</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setData(form)
            }}
            className="bg-white p-6 rounded-2xl shadow space-y-4"
          >
            <div>
              <label>Name</label>
              <input required className="w-full border p-2 rounded" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label>Type</label>
              <select className="w-full border p-2 rounded" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                <option>Leave</option>
                <option>Job</option>
                <option>Resignation</option>
              </select>
            </div>
            <div>
              <label>Date</label>
              <input type="date" className="w-full border p-2 rounded" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            </div>
            <div>
              <label>Reason</label>
              <textarea rows={3} className="w-full border p-2 rounded" value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Download PDF</button>
          </form>
          {data && <LetterPDF data={data} />}
        </div>
      </main>
    </>
  )
}