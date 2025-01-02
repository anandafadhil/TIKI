import SelectedBook from "./selectedBook";
import { WholeBook } from "@/app/data/bookData";
export default async function BookPage({ params }) {
    const { selectedBook } = await params;

    const data = WholeBook.filter((book) => book.id === selectedBook)
    const booksFiction = WholeBook.filter((book) =>
        book.category.name.toLowerCase() === 'fiction').slice(0, 10);

    return (
        <>
            <SelectedBook data={data[0]} booksFiction={booksFiction} />
        </>
    );
}