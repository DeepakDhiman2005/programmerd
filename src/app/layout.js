import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'

// redux
import { Providers } from './redux/providers'

// Components
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Coding online - ProgrammerD',
  description: 'Learn Coding online in programmerD.'
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type='image/svg' sizes='any' />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Sidebar />
          <Suspense>
            <SearchBar />
            {children}
          </Suspense>
          <Footer />
        </Providers>
        </body>
    </html>
  )
}
