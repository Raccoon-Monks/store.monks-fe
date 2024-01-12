import Link from 'next/link'
import styles from './Styles/hero-slider.module.css'

export default function HeroSlider(){
    return (
        <Link href="/category/variedades" className={styles.hero}>
        <div>
            HERO/SLIDER
        </div>
        </Link>
    )
}