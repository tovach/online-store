import {FC} from "react";

import {ProductsSection} from "components/products";

import styles from './Home.module.scss'

const Home: FC = () => {


    return (
        <div className={styles.home}>
            <div className='container'>
                <ProductsSection/>
            </div>
        </div>
    )
}

export {Home}
