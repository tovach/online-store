import {FC} from "react";
import {Product} from "types/Product";
import {ProductCard} from "components/products/productCard/ProductCard";

import styles from "./ProductsList.module.scss";

interface ProductsListProps {
    products: Product[] | undefined,
}

const ProductsList: FC<ProductsListProps> = ({products}) => {
    return (
        <div className={styles.products}>
            <ul className={styles.list}>
                {products?.map((item) => {
                    return <li className={styles.item} key={item.id}>
                        <ProductCard {...item} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export {ProductsList}
