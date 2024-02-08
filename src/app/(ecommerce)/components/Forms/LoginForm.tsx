import DivContainer from '../Containers/DivContainer'
import styles from './login-form.module.css'
import Link from 'next/link'

export default function LoginForm (){
    return (
        <DivContainer id={'login-form'} style={'login-form-globals'}>
            <p className={styles.p}>LOGIN</p>
            <form className={styles['form']}>
                    <label htmlFor="exampleInputEmail1">EMAIL</label>
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <label htmlFor="exampleInputPassword1" >SENHA</label>
                    <input type="password" id="exampleInputPassword1"/>
                <span>
                    <button type="submit" className={styles.button}>ENTRAR</button>
                    <Link href="/signup"><button type="submit" className={styles.button}>CADASTRE-SE</button></Link>
                </span>
            </form>
        </DivContainer>
    )
}