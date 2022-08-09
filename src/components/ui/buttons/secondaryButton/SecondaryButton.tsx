import {FC, HTMLProps, ReactNode} from "react";
import styles from './SecondaryButton.module.scss'

interface SecondaryButtonProps extends HTMLProps<HTMLButtonElement> {
    onClick: () => void,
    children: ReactNode,
    disabled: boolean
}

const SecondaryButton: FC<SecondaryButtonProps> = ({onClick, children, disabled}) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export {SecondaryButton}
