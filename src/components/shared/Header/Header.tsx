import Link from "next/link"
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header>
          <nav>
            <ul className={styles.header__list}>
              <Link href={'/'} scroll={false}>
                <li>Home</li>
              </Link>
              <Link href={'/store'}>
                <li>Store</li>
              </Link>
              <Link href={'/test'}>
                <li>Test</li>
              </Link>
            </ul>
          </nav>
        </header>
    )
}