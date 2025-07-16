'use client'

import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import PDFModal from '@/components/PDFModal'

export default function Home() {
  const [formData, setFormData] = useState(null)

  return (
    <main>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-10">
        <Form onSubmit={setFormData} />
        {formData && <PDFModal formData={formData} />}
      </div>
    </main>
  )
}