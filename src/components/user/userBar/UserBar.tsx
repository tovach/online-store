import {FC} from "react";
import {CartButton, SearchButton} from "components/ui/buttons";
import {UserMenu} from "components/user/userMenu/UserMenu";

import styles from './UserBar.module.scss'

const UserBar:FC = () => {
    return (
        <div className={styles.userBar}>
            <SearchButton/>
            <CartButton/>
            <UserMenu/>
        </div>
    )
}

export {UserBar}
