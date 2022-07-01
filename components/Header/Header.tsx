import Image from 'next/image';
import styles from './Header.module.css'
 
export const Header = () => {
    return (
        <header>
            <Image src="https://cdn.freebiesupply.com/logos/thumbs/2x/google-nexus-logo.png" className={styles.logo} objectFit='cover' height={40} width={120}/>
        </header>
    )
};