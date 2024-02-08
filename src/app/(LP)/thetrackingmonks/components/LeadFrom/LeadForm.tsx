"use client"
import { useState } from 'react'
import styles from './lead-form.module.css'

export default function LeadForm (){
    let [buttonStyle,setButtonStyle] = useState(styles['cta-button'])
    
    let clickHandler = (e:any) => {
        e.preventDefault();
        e.target.innerText= "JANEIRO30"
        setButtonStyle(styles.coupon)
    }


    return (
            <form action="/" className={styles.lead}>
                <div className={styles['form-header']}>PEGUE UM CUPOM E VISITE NOSSA LOJA!</div>

                {/* UTM inputs to be appended to the action URL */}
                    <input type='hidden' name="utm_source" value="lp"></input>
                    <input type='hidden' name="utm_medium" value="lead_form"></input>
                    <input type='hidden' name="utm_campaign" value="janeiro30"></input>

                    <input required type="email" id="email" placeholder='Email'/>
                    <input required id="first_name" placeholder='First Name'/>
                    <input required id="last_name"  placeholder='Last Name'/>
                    <input required id="phone"      placeholder='Phone Number'  pattern='[1-9]{2}[1-9]?[0-9]{4}[0-9]{4}' />

                    <button onClick={clickHandler} className={buttonStyle}>QUERO MEU CUPOM!</button>
                    <button type="submit"  className={styles['cta-button']}>VISITAR A LOJA</button>

            </form>
    )
}