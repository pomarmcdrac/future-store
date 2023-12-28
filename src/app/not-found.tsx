import Image from "next/image";
import Link from "next/link";
import styles from 'app/sass/not-found.module.sass'

export default function notFound() {
  return (
    <main className={styles.notFound}>
      <h1 className={styles.notFound__title}>404</h1>
      <Image
        src="/images/not-found.jpg"
        alt="404"
        width={404}
        height={404}
      />
      <h2 className={styles.notFound__subtitle}>
        ¡Uy, parece que el enlace se escondió!
      </h2>
      <p className={styles.notFound__description}>Pero nuestra tienda está abierta 24/7</p>
      <Link className={styles.notFound__link} href="/store">
        ¡Vamos de compras!
      </Link>
    </main>
  );
}