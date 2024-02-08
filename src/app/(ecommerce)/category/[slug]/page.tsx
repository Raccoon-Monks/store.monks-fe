import styles from './page.module.css'
import CategoryFilter from '@/app/(ecommerce)/components/CategoryFilter/CategoryFilter'
import BreadCrumbs from '@/app/(ecommerce)/components/Breadcrumbs/BreadCrumbs'
import Listing from '@/app/(ecommerce)/components/Listing/Listing'
import PageContainer from '@/app/(ecommerce)/components/Page/PageContainer'
import DivContainer from '@/app/(ecommerce)/components/Containers/DivContainer'

export default function CategoryPage() {
  let mockProductsArray = [...Array(20)].map((item,index) => {
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
  return (
    <PageContainer id={'category-page'} style={'category-page-globals'}>
        <BreadCrumbs />
        <DivContainer id={'main-listing'} style={'main-listing-globals'}>
          <CategoryFilter />
          <Listing contents={mockProductsArray} listName={'product-listing'} id={'product-listing'}/>
        </DivContainer>
    </PageContainer >
  )
}