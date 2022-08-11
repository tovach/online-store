import {ProductCardPreloader, ProductsList} from "components/products";
import {useGetProductsQuery} from "store/api/products.api";
import {FC} from "react";

import {Pagination} from "components/layout";
import {useSearchParams} from "react-router-dom";
import {useProductOffsetQuery} from "hooks";

import styles from './ProductsSection.module.scss'

const Skeletons: FC = () => {
    return (
        <ul className={styles.skeletonsList}>
            {Array(8).fill(null).map((_, index) => <li key={index}><ProductCardPreloader/></li>)}
        </ul>
    )
}

const ProductsSection: FC = () => {
    const [params] = useSearchParams();
    const categoryName = params.get('name') || 'All products';
    const categoryId = Number(params.get('id')) || 1;
    const offset = Number(params.get('offset')) || 0;

    const {nextPage, prevPage} = useProductOffsetQuery()

    const {data: products, isFetching} = useGetProductsQuery({categoryId, offset});


    return (
        <div className={styles.productsSection}>
            <div className={styles.wrapper}>
                <h3 className={styles.heading}>{categoryName}</h3>

                {isFetching ?
                    <Skeletons/> :
                    <ProductsList products={products}/>
                }
                <Pagination onClickNext={nextPage} onClickPrev={prevPage}
                            disabledNext={!products?.length || products?.length < 8}
                            disabledPrev={!offset}/>
            </div>
        </div>
    )
}

export {ProductsSection}
