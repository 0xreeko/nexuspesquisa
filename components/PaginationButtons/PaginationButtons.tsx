import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from './PaginationButtons.module.css'
 
export const PaginationButtons = () => {
    const router = useRouter()

    const startIndex = Number (router.query.start || 0)
    return (
        <div className=''>this is PaginationButtons</div>
    )
};