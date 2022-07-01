import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Header.module.css'
 
export const Header = () => {
    const router = useRouter()
    return (
        <header>
            <Image onClick={() => router.push('/')} src="https://cdn.freebiesupply.com/logos/thumbs/2x/google-nexus-logo.png" className={styles.logo} objectFit='cover' height={40} width={120}/>
        </header>
    )
};