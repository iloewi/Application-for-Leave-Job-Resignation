import { useEffect, useRef } from 'react'
import html2pdf from 'html2pdf.js'

export default function LetterPDF({ data }: { data: any }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      html2pdf().from(ref.current).save(`${data.name}-${data.type}.pdf`)
    }
  }, [data])

  return (
    <div className="hidden">
      <div ref={ref} className="p-6 text-[16px] font-serif max-w-md">
        <h2 className="text-xl font-bold mb-2">{data.type} Application</h2>
        <p>Date: {data.date}</p>
        <p>To Whom It May Concern,</p>
        <p className="mt-4">
          I, <strong>{data.name}</strong>, am writing to submit my {data.type.toLowerCase()} application. 
          The reason is as follows:
        </p>
        <p className="italic mt-2">"{data.reason}"</p>
        <p className="mt-4">Thank you for your time and consideration.</p>
        <p className="mt-6">Sincerely,</p>
        <p>{data.name}</p>
      </div>
    </div>
  )
}