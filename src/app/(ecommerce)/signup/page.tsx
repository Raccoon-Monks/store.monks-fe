import Image from 'next/image'
import styles from './page.module.css'
import SignupForm from '@/app/(ecommerce)/components/Forms/SignupForm'

export default function Home() {
  return (
    <main className={styles.main}>
        <SignupForm />
    </main>
  )
}
