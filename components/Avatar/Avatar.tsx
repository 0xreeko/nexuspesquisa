import styles from './Avatar.module.css'
 
export const Avatar = ({url}: {url: string}) => {
    return (
        <img loading='lazy' src={url} alt='Avatar' className={styles.avatar} />
    )
};