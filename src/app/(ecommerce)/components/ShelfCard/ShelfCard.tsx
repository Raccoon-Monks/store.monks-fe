import Link from 'next/link'
import styles from './shelf-card.module.css'
import { ShelfCard } from '@/app/Types/component_types'
import DivContainer from '../Containers/DivContainer'

export default function ShelfCard({content, href, style}: ShelfCard){
    return (
        <DivContainer id={'shelf-card'} style={style}>
            <Link href={href} className={styles.link}>
                {content['name']}
            </Link>
        </DivContainer>
    )
}