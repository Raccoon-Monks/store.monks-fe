import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CartProvider from './services/CartManagement/CartContextManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store.Monks',
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
        <CartProvider>
          <Header/>
          <main>
            {children}
          </main>
        </CartProvider>
          <Footer/>
      </body>  
    </html>
  )
}
