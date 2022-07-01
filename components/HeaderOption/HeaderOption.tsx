import { ReactNode } from 'react';
import styles from './HeaderOption.module.css'
 
export const HeaderOption = ({icon, title, selected}: {icon: ReactNode, title: string, selected?: boolean}) => {
    return (
        <div className={`${styles.container} ${selected && 'text-kunzite-600 border-kunzite-500'} border-transparent`}>
            {icon}
            <p className={styles.title}>{title}</p>
        </div>
    )
};