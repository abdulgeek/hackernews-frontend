import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hacker News',
  description: 'Stay updated with the latest in tech and entrepreneurship. Explore top stories, discussions, and community insights on cutting-edge technology, startups, and more.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
