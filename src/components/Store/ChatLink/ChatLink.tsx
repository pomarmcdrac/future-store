import Link from "next/link"
import styles from './ChatLink.module.sass'

export const ChatLink = () => {
  return (
    <Link className={styles.chatLink} href='/chat'>
      Chat ✨
    </Link>
  )
}