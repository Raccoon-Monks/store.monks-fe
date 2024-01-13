import Image from 'next/image'
import styles from './page.module.css'
import SignupForm from '@/Components/Structural_Components/SignupForm'

export default function Home() {
  return (
    <main className={styles.main}>
        <SignupForm />
    </main>
  )
}
