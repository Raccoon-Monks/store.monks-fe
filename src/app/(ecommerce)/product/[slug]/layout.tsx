import { getItemById } from '../../services/ProductManagement/Products';
import './layout.css'

export default function CheckoutLayout({children}:{children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
