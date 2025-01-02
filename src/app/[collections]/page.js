import { WholeBook } from '../data/bookData';
import Collections from "./collections";

export default async function GenrePage({ params, searchParams }) {
    const { collections } = await params;
    const currentPage = 1;
    const ITEMS_PER_PAGE = 24;

    const filteredBooks = () => {
        if (collections === 'all') {
            return WholeBook;
        }

        if (collections === 'new') {
            const days = 10;
            const top = 10
            const currentDate = new Date();
            return WholeBook.filter((book) => {
                const bookDate = new Date(book.postedDate);
                return (currentDate - bookDate) <= days * 24 * 60 * 60 * 1000;
            })
                .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
                .slice(0, top);
        }

        if (collections === 'budget') {
            return WholeBook.filter((item) => {
                return item.price < 50000;
            });
        }

        if (collections === 'fiction' || collections === 'non-fiction') {
            return WholeBook.filter((book) => {
                return book.category && book.category.name && book.category.name.toLowerCase() === collections.toLowerCase();
            });
        }

        // Handle genre filtering
        return WholeBook.filter((book) => {
            if (!book.genre || !Array.isArray(book.genre)) {
                return false;
            }

            return book.genre.some((genre) => {
                return genre && genre.name && genre.name.toLowerCase() === collections.toLowerCase();
            });
        });
    };
    const totalPages = Math.ceil(filteredBooks().length / ITEMS_PER_PAGE);
    const initialPage = 1;
    
    return (
        <>
            <Collections
                data={filteredBooks()}
                currentPage={currentPage}
                initialPage={initialPage}
                itemsPerPage={ITEMS_PER_PAGE}
                totalPages={totalPages}
            />
        </>
    );
}

