import styles from './Header.module.scss'
import {FC} from "react";
import {Link} from "react-router-dom";

import {Navigation} from "components/layout";
import {Logo, Socials} from "components/common";
import {UserBar} from "components/user";
import {PrimaryButton} from "components/ui/buttons";

const Header:FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className='container'>
                    <div className={styles.topWrapper}>
                        <div className={styles.workHours}>
                            <span>Mon-Thu:</span>
                            <span>9:00 AM - 5:30 PM</span>
                        </div>

                        <div className={styles.address}>
                            <p>
                                Visit our showroom in 1234 Street Address City Address, 1234
                            </p>
                            <Link to={'/contact-us'}>Contact us</Link>
                        </div>

                        <div className={styles.call}>
                            <a href="tel:(00) 1234 5678">Call Us: (00) 1234 5678</a>
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <div className={styles.bottomWrapper}>
                        <Logo/>
                        <Navigation>
                            <PrimaryButton>Our deals</PrimaryButton>
                        </Navigation>
                        <UserBar/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {Header}
