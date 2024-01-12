import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../Components/Structural_Components/Header'
import Footer from '../../Components/Structural_Components/Footer'
import Container from '@/Components/Structural_Components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TS_ECOM',
  description: 'A mock ecommerce SPA for educational purpose',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Container>
        <Header/>
          {children}
        <Footer/>
      </Container>
      </body>  
    </html>
  )
}
