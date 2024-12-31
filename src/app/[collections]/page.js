import {WholeBook} from '../data/bookData';
import Collections from "./collections";

export default async function Home() {
        const currentPage = 1;
        const initialPage = 1;
        const ITEMS_PER_PAGE = 24;
        const totalPages = Math.ceil(WholeBook.length / ITEMS_PER_PAGE);
    // const data = await fetchData('/books');
    const data = []
    return (
        <>
            <Collections data={data} currentPage={currentPage} initialPage={initialPage} itp = {ITEMS_PER_PAGE} totalPages = {totalPages} />
        </>
    );
}
