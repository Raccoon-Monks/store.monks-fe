import styles from './page.module.css'
import LoginForm from '@/app/(ecommerce)/components/Forms/LoginForm'
import PageContainer from '@/app/(ecommerce)/components/Page/PageContainer'

export default function Login() {
  return (

    <PageContainer id={'login-page'} style={'login-page-globals'}>
      <LoginForm/>  
    </PageContainer>
  )
}
