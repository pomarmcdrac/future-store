import Link from 'next/link'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import styles from './Header.module.sass'
import dynamic from 'next/dynamic'

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false })


export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        <NoSSRShoppingCart />
      </div>
    </header>)
}