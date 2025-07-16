import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Generator',
  description: 'Generate Leave, Job, or Resignation letters in PDF format',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  )
}