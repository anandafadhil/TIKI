import Collections from "./collections";
import { fetchDataCollections, fetchAllData, fetchDataCategory } from '../fetch/fetch';
export default async function GenrePage({ params, searchParams }) {
    const { collections } = await params;
    const currentPage = 1;
    const ITEMS_PER_PAGE = 24;
    const isNon = collections.includes("-non");
    const genreNon = collections.replace('-non', '')

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

    const nonFictionBooks = await fetchDataCategory({
        endpoint: "/books",
        pageSize: "all",
        pageNumber: 1,
        category: "non-fiction"
    })

    let filteredBooks = [];
    let totalRecords = 0;

    if (collections === 'all') {
        filteredBooks = allBookData.data;
        totalRecords = allBookData.data.length;
    } else if (collections === 'new') {
        const days = 10;
        const top = 10;
        const currentDate = new Date();
        filteredBooks = allBookData.data
            .filter((book) => {
                const bookDate = new Date(book.book.createdAt);
                return (currentDate - bookDate) <= days * 24 * 60 * 60 * 1000;
            })
            .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
            .slice(0, top);
        totalRecords = filteredBooks.length;
    } else if (collections === 'budget') {
        filteredBooks = allBookData.data.filter((item) => item.book.finalPrice <= 60000);
        totalRecords = filteredBooks.length;
    } else if (collections === 'fiction') {
        filteredBooks = fictionBooks.data;
        totalRecords = fictionBooks.totalRecords;
    } else if (collections === 'non-fiction') {
        filteredBooks = nonFictionBooks.data;
        totalRecords = nonFictionBooks.totalRecords;
    } else if (isNon) {
        filteredBooks = allBookData.data.filter((book) => {
            return book.submission.genre.some((genre) =>
                genre.slug.toLowerCase() === genreNon.toLowerCase()
            );
        });
        totalRecords = filteredBooks.length;
    } else {
        filteredBooks = allBookData.data.filter((item) => {
            if (!item.submission || !Array.isArray(item.submission.genre)) {
                return false;
            }
            return item.submission.genre.some((genre) =>
                genre.slug.toLowerCase() === collections.toLowerCase()
            );
        });
        totalRecords = filteredBooks.length;
    }

    let totalPages = 1;
    if (filteredBooks.length === 0 || filteredBooks.length == undefined) {        
        totalPages = 1
    } else {
        totalPages = Math.ceil(filteredBooks.totalRecords / ITEMS_PER_PAGE);

    }    

    const initialPage = 1;

    return (
        <>
            <Collections
                allBookData={allBookData}
                data={filteredBooks}
                currentPage={currentPage}
                initialPage={initialPage}
                itemsPerPage={ITEMS_PER_PAGE}
                totalPages={totalPages}
            />
        </>
    );
}

