import { WholeBook } from '../data/bookData';
import Search from "./search";

export default async function SearchPage({ searchParams }) {
    const query = searchParams?.query || '';
    const filteredBooks = WholeBook.filter((book) => {
        const lowerCaseInput = query.toLowerCase();
        return (
            book.bookTitle.toLowerCase().includes(lowerCaseInput) ||
            book.id.toLowerCase().includes(lowerCaseInput) ||
            book.author.toLowerCase().includes(lowerCaseInput)
        );
    }).map((book) => ({
        value: book.id,
        label: `${book.bookTitle} by ${book.author}`,
    }));

    const dataPrint = WholeBook.filter((book) => {
        const lowerCaseQuery = query.toLowerCase();

        return (
            book.bookTitle.toLowerCase().includes(lowerCaseQuery) ||
            book.id.toLowerCase().includes(lowerCaseQuery) ||
            book.author.toLowerCase().includes(lowerCaseQuery)
        );
    });


    const currentPage = 1;
    const initialPage = 1;
    const ITEMS_PER_PAGE = 24;
    const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

    return (
        <>
            <Search
                data={dataPrint}
                query={query}
                currentPage={currentPage}
                initialPage={initialPage}
                itemsPerPage={ITEMS_PER_PAGE}
                totalPages={totalPages}
            />
        </>
    )
}
