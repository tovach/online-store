import styles from './Footer.module.scss'
import {NewsletterInput} from "components/ui/forms";
import {PrimaryButton} from "components/ui/buttons";
import {Payments, Socials} from "components/common";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <div>
                            <h3 className={styles.heading}>Sign Up To Our Newsletter.</h3>
                            <p className={styles.text}>Be the first to hear about the latest offers.</p>
                        </div>

                        <form className={styles.form}>
                            <NewsletterInput placeholder={'Your e-mail'}/>
                            <PrimaryButton children={'Subscribe'}/>
                        </form>
                    </div>
                    <div className={styles.bottom}>
                        <Socials/>
                        <Payments/>
                        <p className={styles.copyright}>Copyright © 2022 Online-Shop Pty. Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export {Footer}
