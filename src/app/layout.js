import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Slidder2 from './components/Slidder2'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DPS JAIPUR',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <NavBar />
        <Slidder2 />
        {children}
        <Footer />
        </body>
    </html>
  )
}
