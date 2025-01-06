import HomePage from "./homepage";
import { fetchAllData, fetchDataCollections, fetchDataHomePage } from "./fetch/fetch"
export default async function Home() {
    // All Books
    // const allBookData = WholeBook;


    const dataCollections = await fetchDataCollections({
        endpoint: "/books",
        pageSize: 24,
        pageNumber: 1,
        search: "",
    }
    );

    const allBookData = await fetchAllData({
        endpoint: "/books",
        pageSize: "all",
        pageNumber: 1,
        search: "",
    });

    const dataHomePage = await fetchDataHomePage({
        endpoint: "/books",
        pageSize: 8,
        pageNumber: 1,
        search: "",
    })

    const days = 10;
    const top = 8;
    const currentDate = new Date();
    const booksNew = allBookData.data.filter((book) => {
        const bookDate = new Date(book.book.createdAt);
        return (currentDate - bookDate) <= days * 24 * 60 * 60 * 1000;
    })
        .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
        .slice(0, top);

    const booksClassics = allBookData.data.filter((book) =>
        book.submission.genre.some((genre) =>
            genre.slug.toLowerCase() === "classic"
        )
    ).slice(0, top);

    const booksBudget = allBookData.data.filter((item) => item.book.finalPrice <= 60000).slice(0, top);
    const booksFiction = allBookData.data.filter((item) => item.submission.genre.some((genre) => genre.category.toLowerCase() === "fiction")
    ).slice(0, top);
    const booksNonFiction = allBookData.data.filter((item) => item.submission.genre.some((genre) => genre.category.toLowerCase() === "non-fiction")
    ).slice(0, top);

    const discoverGenre = Array.from(
        allBookData.data
            .flatMap((item) => item.submission.genre) 
            .reduce((uniqueGenres, genre) => {
                if (!uniqueGenres.has(genre.id)) {
                    uniqueGenres.set(genre.id, genre);
                }
                return uniqueGenres;
            }, new Map())
            .values()
    );
    return (
        <>
            <HomePage allBookData={allBookData} dataHomePage={dataHomePage} booksNew={booksNew} booksClassics={booksClassics} booksBudget={booksBudget} booksFiction={booksFiction} booksNonFiction={booksNonFiction} discoverGenre={discoverGenre} />
        </>
    );
}
