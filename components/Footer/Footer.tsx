import styles from './Footer.module.css'
 
export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.local}>
                <p>Salvador da Bahia</p>
            </div>
            <div className={styles.container2}>
                    <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg-col-start-2">
                    <svg className={styles.globeIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
                        Dropping it hot since 1999
                        </div>
                        <div className={styles.container3}>
                            <p>Advertising</p>
                            <p>DeFI</p>
                            <p>How Nexus Search works</p>
                        </div>
                        <div className={styles.container4}>
                            <p>Privacy</p>
                            <p>Terms</p>
                            <p>Settings</p>
                        </div>
            </div>
        </footer>
    )
};