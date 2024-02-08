'use client'
import styles from './cart-summary.module.css'
import CtaButton from '../CTAs/GeneralCtaButton'
import { useCart } from '@/app/(ecommerce)/services/CartManagement/CartContextManager';
import DivContainer from '../Containers/DivContainer';

export default function CartSummary() {

    let [cart,] = useCart();

    return (
        <DivContainer id={'cart-summary'} style={'cart-summary-globals'}>
            <p className={styles.title}>CART SUMMARY</p>
            <section className={styles.description}>
                <ul className={styles['item-list']}>
                    <li>Produtos Adicionados</li>
                    <ul>
                        {Object.values(cart).map((item,index) => {
                            return (
                                <li key={index}>{item.name.toUpperCase()}
                                    <br />x{item.quantity}</li>
                            )
                        })}
                    </ul>
                    <li>Valor Total</li>
                </ul>
            </section>

            <CtaButton 
                id={"begin_checkout_cta"}
                href={"/checkout/payment"}
                buttonstyle={'begin-checkout-cta'}
                handlerName={'Default'}
            >
                BEGIN CHECKOUT
            </CtaButton>

        </DivContainer>
    )
}