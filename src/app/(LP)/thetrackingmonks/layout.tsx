import './globals.css'

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
