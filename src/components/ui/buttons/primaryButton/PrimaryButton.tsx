import {FC, ReactNode} from "react";
import styles from './PrimaryButton.module.scss'

const PrimaryButton: FC<{children:ReactNode}> = ({children}) => {
    return (
        <button className={styles.button} type="button">{children}</button>
    )
}

export {PrimaryButton}
