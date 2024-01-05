"use client"

import { useEffect } from "react";
import styles from "app/sass/error.module.sass"
import Image from "next/image";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {

    return (
        <div className={styles.error}>
            <Image src={"/images/robot.jpg"} width={100} height={100} alt=":c" />
            <p>Ha ocurrido un error</p>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}