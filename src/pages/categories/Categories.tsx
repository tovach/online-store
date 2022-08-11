import {FC} from "react";

import styles from './Categories.module.scss'
import {ProductsSection} from "components/products";

const Categories: FC = () => {


    return (
        <div className={styles.categories}>
            <div className='container'>
                <ProductsSection/>
            </div>
        </div>
    )
}

export {Categories}
