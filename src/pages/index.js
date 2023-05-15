import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import HomePage from './HomePage/HomePage'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen relative flex-col ${inter.className}`}>
        <Header />
        <HomePage />
        <Footer />
     
    </main>
  )
}
