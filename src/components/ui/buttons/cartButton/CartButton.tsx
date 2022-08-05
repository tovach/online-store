import {ReactComponent as CartIcon} from "./img/cart.svg";
import {FC} from "react";

import styles from './CartButton.module.scss'

const CartButton:FC = () => {
    return (
        <button type='button' className={styles.button}>
            <CartIcon/>
        </button>
    )
}

export {CartButton}
