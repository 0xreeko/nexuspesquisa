import type { NextPage } from 'next'
import Head from 'next/head'
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
          <p>API Documentation</p>
        </div>
        <div className={styles.right}>
          <p>Nexus Mail</p>
          <p>NFT Marketplace</p>
        </div>
      </header>
      {/* body */}
      {/* footer */}
    </div>
  )
}

export default Home
