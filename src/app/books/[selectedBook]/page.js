import SelectedBook from "./selectedBook";
// import { WholeBook } from "@/app/data/bookData";
import { fetchAllData, fetchDataCategory } from "@/app/fetch/fetch";

export default async function BookPage({ params }) {
    const { selectedBook } = await params;

    const allBookData = await fetchAllData({
        endpoint: "/books",
        pageSize: "all",
        pageNumber: 1,
        search: "",
    });

    const fictionBooks = await fetchDataCategory({
        endpoint: "/books",
        pageSize: "all",
        pageNumber: 1,
        category: "fiction"
    })
    
    const data = allBookData.data.filter((book) => String(book.id) === selectedBook)
    const booksFiction = fictionBooks.data.slice(0,10)

    return (
        <>
            <SelectedBook data={data[0]} booksFiction={booksFiction} />
        </>
    );
}