import {FC} from "react";
import {ReactComponent as FbIcon} from "./img/fb.svg";
import {ReactComponent as IgIcon} from "./img/ig.svg";

import styles from './Socials.module.scss'

const Socials:FC = () => {
    return (
        <div className={styles.socials}>
            <a href="/">
                <FbIcon/>
            </a>
            <a href="/">
                <IgIcon/>
            </a>
        </div>
    )
}

export {Socials}
