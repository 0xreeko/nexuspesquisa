import styles from './Avatar.module.css'

type Avatar = {
    url: string
    className?: string
}
 
export const Avatar = ({url, className}: Avatar) => {
    return (
        <img src={url} alt="Avatar" width={40} height={40} className={`${className} ${styles.avatar}`}/>
    )
};