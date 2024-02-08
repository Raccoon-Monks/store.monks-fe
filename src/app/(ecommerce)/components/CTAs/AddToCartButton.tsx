"use client"
import style from './cta-styles.module.css'
import { AddToCartButton, Item } from '../../../Types/component_types'
import { CartActions, useCart} from '@/app/(ecommerce)/services/CartManagement/CartContextManager'



export default function AddToCartButton ({id, children, buttonstyle, item} : AddToCartButton){
  const [,setCart] = useCart();

  return(
    <div className={style.globals}>
      <button id={id} className={style[buttonstyle]} onClick={() => CartActions.add({id: item.id, quantity: item.quantity,setCart})}>
        {children}
      </button>
    </div>
  )  
}
