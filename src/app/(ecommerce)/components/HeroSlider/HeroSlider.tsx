import styles from './Styles/hero-slider.module.css'
import CtaButton from '../CTAs/GeneralCtaButton'
import Container from '../Containers/DivContainer'

export default function HeroSlider(){
  return (
    <Container id={'home-hero-slider'} style={'home-hero-slider-globals'}>
      <CtaButton href={"/category/variedades"} 
                 id={"teste"} 
                 buttonstyle='home-hero-cta' 
                 handlerName={"Default"}>
        CLIQUE AQUI
      </CtaButton>
    </Container>
    )
}