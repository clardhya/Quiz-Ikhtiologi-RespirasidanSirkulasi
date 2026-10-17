import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ichthyology Quiz - Circulation & Respiration',
  description: 'Interactive Quiz Application for University Pre-Test on Ichthyology: Circulation and Respiration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-50`}>
        {children}
      </body>
    </html>
  )
}
