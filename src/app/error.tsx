"use client"

import Image from "next/image"
import styles from "app/sass/global-error.module.sass"

export default function GlobalError({reset}: ErrorPageProps) {
    return(
        <main className={styles.error}>
            <h1 className={styles.error__title}>Ha ocurrido un error</h1>
            <Image src="/images/error.jpg" width={500} height={500} alt="Error"/>
            <p className={styles.error__message}>Al parecer ha ocurrido un error, pero no te sientas mal</p>
            <button className={styles.error__button} onClick={reset}>Voler a intentar</button>
        </main>
    )
}