import {ReactComponent as SearchIcon} from "./img/search.svg";

import styles from './SearchButton.module.scss'

const SearchButton = () => {
    return (
        <button className={styles.button}>
            <SearchIcon/>
        </button>
    )
}

export {SearchButton}
