import Link from 'next/link'
import styles from './Styles/cart-product-card.module.css'
import { Item } from '@/app/Types/component_types'
import { CartActions, useCart } from '../../services/CartManagement/CartContextManager';

export default function CartProductCard({item}:{item:Item}) {
    let [cart,setCart] = useCart();

    return (
        <div className={styles.container}>
            <Link className={styles.card} href={`/product/${item.id}`}>
                <div className={styles['div-product-name']}>
                    {item.name.toUpperCase()}
                </div>
            </Link>
            <div className={styles.description}>
                <div>
                    <p>DESCRIÇÃO DO PRODUTO</p>
                    <ul className={styles.ul}>
                        <li>{item.name.toUpperCase()}</li>
                        <li>Id do produto: {item.id}</li>
                        <li>Quantidade: {item.quantity}</li>
                    </ul>
                </div>
                <div className={styles.remove}>
                    <button className={styles['remove-button']} onClick={async () => CartActions.remove({id:item.id, quantity:item.quantity, setCart})}>
                        Remover
                    </button>
                </div>

            </div>
        </div>
    )
}