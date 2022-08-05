import {FC} from "react";
import styles from './PrimaryButton.module.scss'

const PrimaryButton: FC<{title:string}> = ({title}) => {
    return (
        <button className={styles.button} type="button">{title}</button>
    )
}

export {PrimaryButton}
