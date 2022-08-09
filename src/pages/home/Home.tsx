import styles from './Home.module.scss'
import {ProductCard} from "components/products";
import {useGetProductsByPageQuery} from "store/api/products.api";
import {useState} from "react";
import {SecondaryButton} from "components/ui/buttons/secondaryButton/SecondaryButton";

const Home = () => {
    const [pagination, setPagination] = useState({limit: 12, offset: 0});
    const {data: products} = useGetProductsByPageQuery(pagination);


    const nextPage = () => {
        setPagination(prevState => {
            return {...prevState, offset: prevState.offset + 12}
        })
    }
    const prevPage = () => {
        if (pagination.offset !== 0) {
            setPagination(prevState => {
                return {...prevState, offset: prevState.offset - 12}
            })
        } else return
    }


    return (
        <div className={styles.home}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <h3 className={styles.heading}>All products</h3>
                    <ul className={styles.list}>
                        {products?.map((item) => {
                            return <li className={styles.item} key={item.id}>
                                <ProductCard {...item} />
                            </li>
                        })}
                    </ul>
                    <div className={styles.pagination}>
                        <SecondaryButton onClick={prevPage} disabled={!pagination.offset}>Prev</SecondaryButton>
                        <SecondaryButton onClick={nextPage} disabled={!products?.length}>Next</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Home}
