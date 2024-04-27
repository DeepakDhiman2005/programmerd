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
import Ads from '@/components/Ads'

// vercel
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

// next
// import Script from "next/script";

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
        <meta name="google-adsense-account" content="ca-pub-2256609026395082" />
        <Ads />
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
          <Analytics />
          <SpeedInsights />
        </Providers>
        </body>
    </html>
  )
}
