import styles from './SearchResults.module.css'
 
export const SearchResults = ({results}: any) => {
    return (
        <div className={styles.container}>
            <p className={styles.about}>About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds) </p>
            {results.items?.map((res: any) => (
                <div className={styles.result} key={res.link}>
                    <div>
                        <a href={res.link} target="_blank" className={styles.link}>{res.formattedUrl}</a>
                        <a href={res.link} target="_blank">
                            <h2 className={styles.title}>{res.title}</h2>
                        </a>
                    </div>
                    <p className={styles.snippet}>{res.snippet}</p>
                </div>
            ))}
        </div>
    )
};