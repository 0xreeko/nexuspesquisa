import Image from 'next/image';
import styles from './Avatar.module.css'
 
export const Avatar = ({url}: {url: string}) => {
    return (
        <Image src={url} alt="Avatar" width={40} height={40} className={styles.avatar}/>
    )
};