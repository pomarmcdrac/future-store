import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML";
import styles from './ProductView.module.sass'
interface ProductViewProps {
  product: ProductType
}

export const ProductView = ({ product }: ProductViewProps) => {

  return (
    <main className={styles.productView}>
      <section className={styles.productView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.productView__info}>
        <h1 className={styles.productView__info__title}>{product.title}</h1>
        <p className={styles.productView__info__category}>{product.tags}</p>
        <SanitizeHTML tag="p">
          {product.description}
        </SanitizeHTML>
        <span className={styles.productView__info__price}>
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity} product={product}/>
      </section>
    </main>
  )
};