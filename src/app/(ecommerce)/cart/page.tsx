import PageContainer from '@/app/(ecommerce)/components/Page/PageContainer';
import styles from './page.module.css'
import CartProductList from '@/app/(ecommerce)/components/CartProductList/CartProductList'
import CartSummary from '@/app/(ecommerce)/components/CartSummary/CartSumary'


export default async function CartPage({params}: {params: {slug:string}}) {

  return (
    <PageContainer id={'cart-page'} style={'cart-page-globals'}>
      <div className={styles.container}>
        <CartProductList/>
        <CartSummary/>
      </div>
    </PageContainer>
  )
}
