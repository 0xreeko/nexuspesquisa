import type { NextPage } from 'next'
import Head from 'next/head'
import { Avatar } from '../components/Avatar/Avatar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nexus Search</title>
        <meta name="description" content="The #1 index for Web3 searches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <header className={styles.header}>
        <div className={styles.left}>
          <p className={styles.link}>About</p>
          <p className={styles.link}>API Documentation</p>
        </div>
        <div className={styles.right}>
          <p className={styles.link}>Nexus Mail</p>
          <p className={styles.link}>NFT Marketplace</p>
          <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <Avatar url='https://lh3.googleusercontent.com/iraaNTwrh6d3hDC9VhZ7wAkvpKcb7Bp9gE68a5QP7u5AGeArl8yzvAo-6QTTPmBYQ2qNSXhdAOHRSuYtbA92P3Sj3zSgFvhnSpff=w600'/>
        </div>
      </header>
      {/* body */}
      {/* footer */}
    </div>
  )
}

export default Home
