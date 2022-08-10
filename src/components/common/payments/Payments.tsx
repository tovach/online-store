import {ReactComponent as AmericanExpressIcon} from "./img/american-express.svg";
import {ReactComponent as DiscoverIcon} from "./img/discover.svg";
import {ReactComponent as MaestroIcon} from "./img/maestro.svg";
import {ReactComponent as PaypalIcon} from "./img/paypal.svg";
import {ReactComponent as VisaIcon} from "./img/visa.svg";

import styles from './Payments.module.scss'

const Payments = () => {
    return (
        <ul className={styles.list}>
            <li><AmericanExpressIcon/></li>
            <li><DiscoverIcon/></li>
            <li><MaestroIcon/></li>
            <li><PaypalIcon/></li>
            <li><VisaIcon/></li>
        </ul>
    )
}

export {Payments}
