import ProductShippingCalculation from '@/app/(ecommerce)/components/ProductShippingCalculation/ProductShippingCalculation'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import styles from './page.module.css'
import RelatedProducts from '@/app/(ecommerce)/components/RelatedProducts/RelatedProducts'
import PageContainer from '@/app/(ecommerce)/components/Page/PageContainer' 
import { Item } from '@/app/Types/component_types'
import { getItemById } from '../../services/ProductManagement/Products'

export default async function ProductPage({ params }: { params: {slug:string}, item: Item}) {
  const item = await getItemById(params.slug);
  return (
    <PageContainer id={'product-details-page'} style={'product-details-page-globals'}>

      <section className={styles.section}>
        <ImageGallery/>
        <ProductDetails id={'product-details-container'} item={item}/>
      </section>

      <ProductShippingCalculation/>
      <RelatedProducts/>

    </PageContainer>
  )
}

