'use client'

import { useState } from 'react'

const types = ['Leave', 'Job', 'Resignation']

export default function Form({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState({ name: '', type: 'Leave', reason: '', date: '' })

  return (
    <form
      className="bg-white p-6 rounded-2xl shadow-md space-y-4"
      onSubmit={e => {
        e.preventDefault()
        onSubmit(form)
      }}
    >
      <label className="block">
        <span>Name</span>
        <input
          className="mt-1 p-2 border w-full rounded"
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <label className="block">
        <span>Application Type</span>
        <select
          className="mt-1 p-2 border w-full rounded"
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          {types.map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="block">
        <span>Date</span>
        <input
          type="date"
          className="mt-1 p-2 border w-full rounded"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
        />
      </label>
      <label className="block">
        <span>Reason</span>
        <textarea
          className="mt-1 p-2 border w-full rounded"
          rows={3}
          value={form.reason}
          onChange={e => setForm({ ...form, reason: e.target.value })}
        />
      </label>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Generate PDF
      </button>
    </form>
  )
}