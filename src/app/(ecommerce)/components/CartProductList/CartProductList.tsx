"use client"

import styles from './cart-product-list.module.css'
import { useCart } from '@/app/(ecommerce)/services/CartManagement/CartContextManager'
import CartProductCard from '../Cards/CartProductCard'
import DivContainer from '../Containers/DivContainer'


const EmptyCart = () => (
    <DivContainer id={'empty-cart'}style={'empty-cart-globals'}>
        <p className={styles['empty-title']}>
            SEU CARRINHO ESTÁ VAZIO
        </p>
    </DivContainer>
)

export default function CartProductList() {
    let [cart,] = useCart();

    if (!Object.keys(cart).length) return <EmptyCart/>;
    
    return (
        <DivContainer id ={'cart-product-list'} style={'cart-product-list-globals'}>
            {Object.values(cart)?.map((item, index:number) => <CartProductCard key={index} item={item} />)}
        </DivContainer>
        )
}




