import style from './related-products.module.css'
import SectionContainer from '../Containers/SectionContainer'
import ShelfCard from '../ShelfCard/ShelfCard'

export default function RelatedProducts(){

    let mockRelatedProductsArray = [...Array(3)].map((item,index) => {
        return {
          id: String(index+1),
          name: `Product ${index+1}`,
          href: `/product/${index+1}`,
          style:'product',
          content: {
            id:String(index+1),
            name: `Product ${index+1}`,
            price: Math.ceil(Math.random()*50),
            imgUrl:`testeUrl`,
            quantity:1
          }
        }
      });

    return(
        <SectionContainer id={'related-products'} style= {'related-products-globals'}>
            {mockRelatedProductsArray.map((item,index) => {
                return (
                    <ShelfCard id={item.id} content={item.content} href={item.href} style={'shelf-card-globals'} key={index}/>
                )
            })}
        </SectionContainer>
    )
}