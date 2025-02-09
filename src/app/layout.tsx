import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MSWProvider } from './msw-provider'

const inter = Inter({ subsets: ['latin'] })

if (process.env.NEXT_RUNTIME === 'nodejs') {
  const { server } = require('@/mocks/server')
  server.listen()
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWProvider>
          {children}
        </MSWProvider>
      </body>
    </html>
  )
}
