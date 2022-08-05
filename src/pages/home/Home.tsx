import styles from './Home.module.scss'
import {ProductCard} from "components/products";
import {useGetAllProductsQuery} from "store/api/products.api";

const Home = () => {
    const {data:products} = useGetAllProductsQuery();
    return (
        <div className={styles.home}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <h3>All products</h3>
                    <ul className={styles.list}>
                        {products?.map((item) => {
                            return <li className={styles.item} key={item.id}>
                                <ProductCard {...item} />
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {Home}
