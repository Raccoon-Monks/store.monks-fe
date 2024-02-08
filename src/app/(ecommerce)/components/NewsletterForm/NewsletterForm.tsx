import CtaButton from '../CTAs/GeneralCtaButton'
import Container from '../Containers/DivContainer'
import styles from './newsletter-form.module.css'

export default function NewsletterForm(){
return (
    <Container id={'newsletter'} style={'newsletter-globals'}>
        <form className={styles.form}>
            NEWSLETTER FORM
            <input id="email"/>
            <CtaButton  id={"newsletter-cta"} 
                        buttonstyle='newsletter-cta'
                        handlerName='NewsletterClickHandler'
                        >
                REGISTER NOW
            </CtaButton>
        </form>
    </Container>
)
}