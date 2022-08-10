import {FC} from "react";
import styles from './NewsletterInput.module.scss';

const NewsletterInput:FC<{placeholder: string}> = ({placeholder}) => {
    return (
        <input className={styles.input} type='text' placeholder={placeholder} />
    )
}

export {NewsletterInput}
