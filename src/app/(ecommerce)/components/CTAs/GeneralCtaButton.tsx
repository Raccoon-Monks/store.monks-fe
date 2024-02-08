"use client"
import style from './cta-styles.module.css'
import { CtaButtonProps } from '../../../Types/component_types'
import Link from 'next/link'
import * as EventHandlers from '../../services/EventHandlers'

export default function CtaButton ({id, children, buttonstyle, href, handlerName='Default'} : CtaButtonProps){

    if(!!href){
      return(
        <Link href={href} className={style.globals}>
          <button id={id} className={style[buttonstyle]} onClick={EventHandlers[handlerName]}>
              {children}
          </button>
        </Link>
      )
    }

  return(
    <div className={style.globals}>
      <button id={id} className={style[buttonstyle]} onClick={EventHandlers[handlerName]}>
        {children}
      </button>
    </div>
  )  
  
}