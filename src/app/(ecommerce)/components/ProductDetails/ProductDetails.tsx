import { Item, ProductDetailsProps } from '@/app/Types/component_types'
import style from './Styles/product-details.module.css'
import AddToCartButton from '../CTAs/AddToCartButton'
import Container from '../Containers/DivContainer'

export default function ProductDetails({item,id}:ProductDetailsProps) {
  return (
    <Container id={id}style={'product-details-globals'}>
      <h1>PRODUCT DETAILS</h1>
      <AddToCartButton 
        id="pdp-addtocart-cta"
        buttonstyle='pdp-addtocart-cta'
        href="/cart"
        item={item}
      >
        ADD TO CART
      </AddToCartButton>
    </Container>
  )
}