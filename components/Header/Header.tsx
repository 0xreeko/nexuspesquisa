import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { HeaderOptions } from '../HeaderOptions/HeaderOptions';
import styles from './Header.module.css'

export const Header = () => {
    const searchInputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const search = (e: any) => {
        e.preventDefault()

        const term = searchInputRef.current?.value

        if (!term) return;
        router.push(`/search?term=${term}`)
    }

    return (
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <Image onClick={() => router.push('/')} src="https://cdn.freebiesupply.com/logos/thumbs/2x/google-nexus-logo.png" className={styles.logo} objectFit='cover' height={40} width={120} />
                <form className={styles.form}>
                    <input className={styles.input} type="text" ref={searchInputRef} />
                    {/* @ts-ignore */}
                    <svg onClick={() => searchInputRef.current?.value = ''} className={styles.crossSvg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <svg className={styles.micSvg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                    <svg className={styles.searchSvg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    <button onClick={(e) => search(e)} hidden type='submit'>Search</button>
                </form>
                <Avatar className={"ml-auto"} url='https://lh3.googleusercontent.com/iraaNTwrh6d3hDC9VhZ7wAkvpKcb7Bp9gE68a5QP7u5AGeArl8yzvAo-6QTTPmBYQ2qNSXhdAOHRSuYtbA92P3Sj3zSgFvhnSpff=w600' />
            </div>
            <HeaderOptions />
        </header>
    )
};