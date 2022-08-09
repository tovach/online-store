import {Product} from "types/Product";
import {FC} from "react";

import styles from './ProductCard.module.scss'
import {PrimaryButton} from "components/ui/buttons";

interface ProductCardProps extends Product {

}

const ProductCard: FC<ProductCardProps> = ({title, price, images}) => {
    return (
        <article className={styles.card}>
            <img className={styles.image}
                 src={images.length && images[0].length ? images[0] : 'https://placehold.jp/640x480.png'} alt={title}/>
            <div className={styles.text}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <h5 className={styles.price}>${price}</h5>
            </div>
            <PrimaryButton>
                Add to cart
            </PrimaryButton>
        </article>
    )
}

export {ProductCard}
