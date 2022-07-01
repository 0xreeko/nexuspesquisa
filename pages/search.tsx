import type { NextPage } from 'next'
import Head from 'next/head';
import { Header } from '../components/Header/Header';

const Search: NextPage = () => {
    return (
        <div className="h-screen">
        <Head>
            <title>Search Results</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* header */}
       <Header />
        {/* search results */}
        </div>
    )
};

export default Search