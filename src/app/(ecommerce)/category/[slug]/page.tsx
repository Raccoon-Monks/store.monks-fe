import styles from './page.module.css'
import Filter from '@/Components/Structural_Components/FilterCategory'
import BreadCrumbs from '@/Components/Structural_Components/BreadCrumbs'
import CategoryProductList from '@/Components/Structural_Components/CategoryProductList'

export default function CategoryPage() {

  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <span className={styles.left}>
          <Filter />
        </span>
        <span className={styles.right}>
          <BreadCrumbs />
          <CategoryProductList />
        </span>
      </div>

    </main>
  )
}