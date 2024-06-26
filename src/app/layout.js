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

// Ads
import MoneVignetteAds from '@/components/MoneVignetteAds'
import MoneBannerAds from '@/components/Ads/MoneBannerAds'
import GoogleAnalytics from '@/components/GoogleAnalytics'

// next
// import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Coding online - ProgrammerD',
  description: `Welcome to ProgrammerD! 🚀 Dive into the world where coding meets creativity! Join us for in-depth tutorials on Python, JavaScript, Java & more. Explore software development methodologies, best practices & industry insights. Unleash your creativity with coding for visual effects, interactive apps & digital art. Subscribe & join our vibrant community of enthusiasts! 💻✨ Let's embark on a journey of discovery & innovation together!`,
  keywords: ['Next.js', 'React.js', 'JavaScript', 'Full Stack Website Developer', 'How to Learn Programming Language.', 'Web Development Full Course.', 'App Development', 'Node.js', 'Frontend', 'Backend', 'Learn Web Development in 2024.', 'Coding', 'Tailwindcss', 'A.I', 'HTML & CSS', 'Programmer D', 'MERN Stack', 'Technology', 'Programming'],
  authors: [
    { name: 'Deepak Dhiman', url: 'https://www.instagram.com/deepakdhiman4367/' },
    {url: 'https://github.com/DeepakDhiman2005'},
    { url: 'https://www.youtube.com/c/ProgrammerD7'},
    { url: "https://www.freelancer.com/u/dhimandeepak957" },
    { url: "https://www.fiverr.com/deepakdhiman877?up_rollout=true" }
  ]
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type='image/svg' sizes='any' />
        <meta name="google-adsense-account" content="ca-pub-2256609026395082" />
        <meta name="monetag" content="3b97426fb901b6dba3a6bce34a96719d" />
        <GoogleAnalytics />
        // <MoneVignetteAds />
        // <MoneBannerAds />
        // <Ads />
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
