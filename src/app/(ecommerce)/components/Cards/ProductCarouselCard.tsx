import Link from 'next/link'
import styles from './Styles/product-carousel-card.module.css'

export default function ProductCarouselCard(props: any) {
    return (
        <Link className={styles['product-card']} href={`/product/${props.item['item_id']}`}>
            <div>
                {props.item["item_name"]}
            </div>
        </Link>
    )
}