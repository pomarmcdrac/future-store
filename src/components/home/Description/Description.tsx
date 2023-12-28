"use client"
import Image from 'next/image';
import { useState } from 'react';
import styles from './Description.module.sass';
import classNames from 'classnames/bind';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAChAKEDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EABoQAQEBAQEBAQAAAAAAAAAAAAABAhEDQYH/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8ANAQsYaAKIUaQrRmjOoYeEh4Cpk+SZPEDwQhiAqelKnopHaHp9dG3Pssub0cvo6vRzehDm2lVtpWJEYeMk+oCm4HC0ShT0tGorDxuMtDDwkPBEfJ4SHigPBCGhgoUmj0mmsxmpbc/o6Nobhgrl9HN6R1+kc3pFBXNuJWL7iViipOMbjKKvpi8PwLGo1SUKalG4S1hBmGjDQpoFTw+SZUhgp4IQTmM1qSw9LpqCo7R2vqI7hjNcvpHPuOvbn3FBXNuJWL6idiiqfGPxlFX0fAsMBbJYWxSwljJpLANYAhaGgQYIjw8JlSHMGmghDRrMY3WLTkrUZqekdr6iO4YK59xz7jq3HPuKCufUJYrqEsEVT4x+Moq9/gU3AodS0tNQoJKXhqwIQYwxI0PCw8OM6aGCGaxjQCmCtMpaR2tpPSDn3ENx0bR2khqJ2LaidSLxh4yT3QpqWsuxaFNS0ElA1BkgaAaIGh4WHjTOmgtBOM6xdHLWmUtJaW1EtkIbR2vtHaSOk6polCDjMyT3AEGHcKWmpaEWsLAgMY0QGHgZNDg00MEM0zoFpy2FmJaS2rpLZoiO0NrbQ2FE9J0+k6qYzB1lRHu8BmYr0QtCmLQoDMMCbhoENIgaHhYeEDDcaDw0Qpael0aIlpHa2kdqiIbQ3V9ufaqiWqnafSdVUbrB1lVHvB1usw7xiiCTcZmANDwkPADSHhYeEDDBIPCgpNHpNGiJaQ2vtDaqiG3Puujbm2qolqp2n0nVTG6xf1hVH0DMydAAaADDAMEMPCQ+UDw8JDxA0EIJQUmj0mikdobX2h6fUnP6Ofa/o59hI7Sqm06kHWBkX0TMy1oKDMgxmYIYfLMgpk0ZkjxmZAKTTMUjv6h6fWZJzejn2zIobTrMkVmZJ//2Q=='

export const Description = () => {

    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('description__button', {
        'description__button--border': hasBorder,
    })

  return (
    <section className={styles.description}>
        <button onClick={handleClick} className={buttonStyles}>
            <div className={styles.description__imageContainer}>
                <Image 
                    src="/images/description.jpg" 
                    alt="products marketplace" 
                    fill
                    placeholder='blur'
                    blurDataURL={PLACEHOLDER_IMAGE}
                />
            </div>
        </button>
        <div className={styles.description__text}>
            <h2>Bring the future today</h2>
            <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
        </div>
    </section>
  )
}