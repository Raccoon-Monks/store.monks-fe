import Image from 'next/image'
import styles from './page.module.css'
import LoginForm from '@/Components/Structural_Components/LoginForm'
import Container from '@/Components/Structural_Components/Container'
import HeroSlider from '@/Components/Structural_Components/HeroSlider'

export default function Login() {
  return (
    // <div></div>
    <main className={styles.main}>
      <LoginForm/>  
    </main>
  )
}
