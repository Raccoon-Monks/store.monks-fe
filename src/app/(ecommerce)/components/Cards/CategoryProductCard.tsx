import Link from 'next/link'
import styles from './Styles/category-product-card.module.css'

export default function CategoryProductCard(props: any) {

    return (
        <Link className={styles.card} href={`/product/${props.item['item_id']}`}>
            <div className={styles['div-product-name']}>
                {props.item['item_name']}
            </div>
        </Link>
    )
}