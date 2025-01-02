// import WholeBook from './data/bookData';
import Article from "./article";
import { ArticleData } from "../data/bookData"; 

export default async function Page() {
    const currentPage = 1;
    const initialPage = 1;
    const ITEMS_PER_PAGE = 9;
    const totalPages = Math.ceil(ArticleData.length / ITEMS_PER_PAGE);

    // const data = await fetchData('/books');
    const data = ArticleData    
    return (
        <>
            <Article data={data} currentPage={currentPage} initialPage={initialPage} itp = {ITEMS_PER_PAGE} totalPages = {totalPages} />
        </>
    );
}
