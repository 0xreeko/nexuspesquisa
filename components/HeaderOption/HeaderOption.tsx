import { ReactNode } from 'react';
import styles from './HeaderOption.module.css'
 
export const HeaderOption = ({icon, title, selected}: {icon: ReactNode, title: string, selected?: boolean}) => {
    return (
        <div className=''>
            {icon}
            {title}
            {selected}
        </div>
    )
};