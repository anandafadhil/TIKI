import { WholeBook, BooksNew, BooksClassics, BooksBudget, BooksFiction, BooksNonFiction, DiscoverGenre, BeyondTikii } from './data/bookData';
import HomePage from "./homepage";

export default async function Home() {
    // All Books
    const allBookData = WholeBook;

    // New Books
    const days = 10;
    const top = 10
    const currentDate = new Date();
    const booksNew = allBookData.filter((book) => {
        const bookDate = new Date(book.postedDate);
        return (currentDate - bookDate) <= days * 24 * 60 * 60 * 1000;
    })
        .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
        .slice(0, top);

    const booksClassics = allBookData.filter((book) =>
        book.genre.some((genre) =>
            genre.name.toLowerCase() === "classic"
        )
    ).slice(0, top);

    const booksBudget = allBookData.filter((item) => item.price < 50000).slice(0, top);
    const booksFiction = allBookData.filter((item) => item.category.name.toLowerCase() === "fiction").slice(0, top);
    const booksNonFiction = allBookData.filter((item) => item.category.name.toLowerCase() === "non-fiction").slice(0, top);

    const discoverGenre = DiscoverGenre;
    const beyondTikii = BeyondTikii;
    return (
        <>
            <HomePage allBookData={allBookData} booksNew={booksNew} booksClassics={booksClassics} booksBudget={booksBudget} booksFiction={booksFiction} booksNonFiction={booksNonFiction} discoverGenre={discoverGenre} beyondTikii={beyondTikii} />
        </>
    );
}
