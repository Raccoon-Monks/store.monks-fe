"use client"

import { useCart } from '../../services/CartManagement/CartContextManager';
import Container from '../Containers/DivContainer';
import styles from './header.module.css'
import Link from 'next/link'

export default function Header(){
  const [cart,]= useCart();
  let productQuantity = Object.values(cart)?.reduce((acc,crr)=> acc+crr.quantity,0) || 0;

  return (
    <Container id={'header'} style={'header-globals'}>
      <header className={styles.header} > 
        <div>HEADER</div>
        <nav>
          <ul>
            <li><Link href="/" >LOGO/HOME</Link></li>
            <li><Link href="/login">LOGIN</Link></li>
            <li><Link href="/cart">CART:</Link><span>{productQuantity}</span></li>
          </ul>
        </nav>
      </header>
    </Container>
 )
}