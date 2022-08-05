import {FC} from "react";
import {ReactComponent as LogoIcon} from "./img/logo.svg";

import styles from './img/Logo.module.scss'
import {Link} from "react-router-dom";

const Logo: FC = () => {
    return (
        <div className={styles.logo}>
            <Link to={'/'}><LogoIcon/></Link>
        </div>
    )
}

export {Logo}
