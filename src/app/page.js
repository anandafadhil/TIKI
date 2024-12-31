// import WholeBook from './data/bookData';
import HomePage from "./homepage";

export default async function Home() {
    // const data = await fetchData('/books');
    const data = []
    return (
        <>
            <HomePage data={data} />
        </>
    );
}
