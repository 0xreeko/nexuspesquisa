import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../components/Header/Header';
import { SearchResults } from '../components/SearchResults/SearchResults';
import Response from '../Response';

const Search: NextPage = ({ results }: any) => {
    const router = useRouter()
    console.log(results);
    return (
        <div className="h-full">
            <Head>
                <title>{router.query.term} - Nexus Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <SearchResults results={results} />
        </div>
    )
};

export default Search


export async function getServerSideProps(ctx: any) {
    const useDummyData = false
    const startIndex = ctx.query?.start || 0
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CTX_KEY}&q=${ctx.query.term}}`)
        .then((res) => res.json())

    return {
        props: {
            results: data
        }
    }
}