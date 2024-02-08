import FooterContainer from '../Containers/FooterContainer'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer(){
  return (
    <FooterContainer id={'footer'} style={'footer-globals'} > 
        <ul className={styles.list}>
          <li><Link href="/">CONTATO</Link></li>
        </ul>
    </FooterContainer>
 )
}