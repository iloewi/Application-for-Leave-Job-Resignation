'use client'

import { useEffect, useRef } from 'react'
import html2pdf from 'html2pdf.js'

export default function PDFModal({ formData }: { formData: any }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      html2pdf().from(ref.current).save(`${formData.name}-${formData.type}.pdf`)
    }
  }, [formData])

  return (
    <div className="hidden">
      <div ref={ref} className="p-6 max-w-md text-black font-serif">
        <h2 className="text-lg font-bold mb-2">{formData.type} Application</h2>
        <p>Date: {formData.date}</p>
        <p>To Whom It May Concern,</p>
        <p className="mt-4">
          I, {formData.name}, would like to apply for a {formData.type.toLowerCase()}.
          The reason for this application is as follows:
        </p>
        <p className="italic mt-2">{formData.reason}</p>
        <p className="mt-4">Thank you for your consideration.</p>
        <p className="mt-6">Sincerely,</p>
        <p>{formData.name}</p>
      </div>
    </div>
  )
}