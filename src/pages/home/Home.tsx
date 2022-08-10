import {ProductCard, ProductCardPreloader} from "components/products";
import {useGetProductsByPageQuery} from "store/api/products.api";
import {FC, useState} from "react";
import {SecondaryButton} from "components/ui/buttons/secondaryButton/SecondaryButton";

import styles from './Home.module.scss'

const Skeletons: FC = () => {
    return (
        <div className={styles.list}>
            {Array(8).fill(null).map((_, index) => <li key={index}><ProductCardPreloader/></li>)}
        </div>
    )
}

const Home: FC = () => {
    const [pagination, setPagination] = useState({limit: 8, offset: 0});
    const {data: products, isFetching} = useGetProductsByPageQuery(pagination);

    const nextPage = () => {
        setPagination(prevState => {
            return {...prevState, offset: prevState.offset + 8}
        })
    }
    const prevPage = () => {
        if (pagination.offset !== 0) {
            setPagination(prevState => {
                return {...prevState, offset: prevState.offset - 8}
            })
        } else return
    }


    return (
        <div className={styles.home}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <h3 className={styles.heading}>All products</h3>
                    {isFetching ?
                        <Skeletons/> :
                        <ul className={styles.list}>
                            {products?.map((item) => {
                                return <li className={styles.item} key={item.id}>
                                    <ProductCard {...item} />
                                </li>
                            })}
                        </ul>
                    }

                    <div className={styles.pagination}>
                        <SecondaryButton onClick={prevPage} disabled={!pagination.offset}>Prev</SecondaryButton>
                        <SecondaryButton onClick={nextPage}
                                         disabled={!products?.length || products?.length < 8}>Next</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Home}
