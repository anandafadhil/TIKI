import { WholeBook, BooksNew, BooksClassics, BooksBudget, BooksFiction, BooksNonFiction, DiscoverGenre, BeyondTikii } from './data/bookData';
import HomePage from "./homepage";

export default async function Home() {
    // const data = await fetchData('/books');
    const allBookData = WholeBook;
    const booksNew = BooksNew;
    const booksClassics = BooksClassics;
    const booksBudget  = BooksBudget;
    const booksFiction = BooksFiction;
    const booksNonFiction = BooksNonFiction;
    const discoverGenre = DiscoverGenre;
    const beyondTikii = BeyondTikii;
    return (
        <>
            <HomePage allBookData={allBookData} booksNew={booksNew} booksClassics={booksClassics} booksBudget={booksBudget} booksFiction={booksFiction} booksNonFiction={booksNonFiction} discoverGenre = {discoverGenre} beyondTikii={beyondTikii} />
        </>
    );
}
