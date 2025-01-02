import SelectedBook from "./selectedBook";
import { WholeBook } from "@/app/data/bookData";
export default async function BookPage({ params }) {
    const { selectedBook } = await params;
    
    const data = WholeBook.filter((book) => book.id === selectedBook)    
        return(
            <>
                <SelectedBook data={data[0]} />
            </>
        );
}