import HeroSlider from '@/app/(ecommerce)/components/HeroSlider/HeroSlider'
import NewsletterForm from '@/app/(ecommerce)/components/NewsletterForm/NewsletterForm'
import CarouselShelf from './components/CarouselShelf/CarouselShelf'
import PageContainer from './components/Page/PageContainer';


export default function Home() {

  let mockProductsCarouselArray = [...Array(8)].map((item,index) => {
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

  let mockCategoriesCarouselArray = [...Array(8)].map((item,index) => {
    return {
      id: String(index+1),
      name: `Category ${index+1}`,
      href: `/category/${index+1}`,
      style:'category',
      content: {
        id:String(index+1),
        name: `Category ${index+1}`,
      }
    }
  });
  

  return (
    <PageContainer id={'home'} style={'home-globals'}>
      <HeroSlider/>
      <CarouselShelf id={'product-carousel'} contents={mockProductsCarouselArray}/>
      <CarouselShelf id={'category-carousel'} contents={mockCategoriesCarouselArray}/>
      <NewsletterForm/>
    </PageContainer>
  )
}
