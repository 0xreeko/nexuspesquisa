import { PaginationButtons } from '../PaginationButtons/PaginationButtons';
import styles from './SearchResults.module.css'
 
export const SearchResults = ({results}: any) => {
    return (
        <div className={styles.container}>
            <p className={styles.about}>Aproximadamente {results.searchInformation?.formattedTotalResults} resultados ({results.searchInformation?.formattedSearchTime} segundos) </p>
            {results.items?.map((res: any) => (
                <div className={styles.result} key={res.link}>
                    <div className='group'>
                        <a href={res.link} target="_blank" rel="noreferrer" className={styles.link}>{res.formattedUrl}</a>
                        <a href={res.link} target="_blank" rel="noreferrer">
                            <h2 className={`group-hover:underline ${styles.title}`}>{res.title}</h2>
                        </a>
                    </div>
                    <p className={styles.snippet}>{res.snippet}</p>
                </div>
            ))}

            <PaginationButtons />
        </div>
    )
};