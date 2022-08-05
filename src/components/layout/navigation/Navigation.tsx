import {FC, ReactNode} from "react";
import {Category} from "types/Category";

import styles from './Navigation.module.scss'

interface NavigationProps {
    children?: ReactNode
}

const Navigation: FC<NavigationProps> = ({children}) => {
    const navItems: Category[] = [
        {
            "id": 1,
            "name": "Clothes",
            "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=2097"
        },
        {
            "id": 2,
            "name": "Electronics",
            "image": "https://api.lorem.space/image/watch?w=640&h=480&r=5117"
        },
        {
            "id": 3,
            "name": "Furniture",
            "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=2851"
        },
        {
            "id": 4,
            "name": "Shoes",
            "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=7194"
        },
        {
            "id": 5,
            "name": "Others",
            "image": "https://api.lorem.space/image?w=640&h=480&r=6305"
        }
    ]
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navItems.map(({name, id}) =>
                    <li className={styles.item} key={id}>
                        <a className={styles.link} href={`/${id}`}>{name}</a>
                    </li>
                )}
                <li>{children}</li>
            </ul>
        </nav>
    )
}

export {Navigation}
