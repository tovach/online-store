import styles from './UserMenu.module.scss'

const UserMenu = () => {
    return (
        <div className={styles.userMenu}>
            <img className={styles.userAvatar} src="https://api.lorem.space/image/face?w=36&h=36&r=8081" alt=""/>
        </div>
    )
}

export {UserMenu}
