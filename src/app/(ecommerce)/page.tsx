import ProductCarousel from '@/Components/Structural_Components/ProductCarousel'
import styles from './page.module.css'
import HeroSlider from '@/Components/Structural_Components/HeroSlider'
import CategoryCarousel from '@/Components/Structural_Components/CategoryCarousel'
import NewsletterForm from '@/Components/Structural_Components/NewsletterForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSlider/>
      <ProductCarousel/>
      <CategoryCarousel/>
      <NewsletterForm/>
    </main>
  )
}
