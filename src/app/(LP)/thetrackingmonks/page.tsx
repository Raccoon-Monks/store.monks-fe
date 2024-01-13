import LeadForm from '@/Components/Structural_Components/LeadForm'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
      THE TRACKING MONKS
      </div>
      <main className={styles.main}>
        <LeadForm/>
      </main>
    </div>
  )
}
