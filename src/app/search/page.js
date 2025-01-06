import Search from "./search";
import { fetchDataCollections, fetchAllData } from '../fetch/fetch';
export default async function SearchPage({ searchParams }) {
    const query = searchParams?.query || '';

    const dataCollections = await fetchDataCollections({
        endpoint: "/books",
        pageSize: 24,
        pageNumber: 1,
        search: `${query}`,
    }
    );

    const allBookData = await fetchAllData({
        endpoint: "/books",
        pageSize: "all",
        pageNumber: 1,
        search: "",
    });

    let totalPages = 1;
    const currentPage = 1;
    const initialPage = 1;
    const ITEMS_PER_PAGE = 24;
    
    if (dataCollections.length === 0 || dataCollections.length == undefined) {        
        totalPages = 1
    } else {
        totalPages = Math.ceil(dataCollections.totalRecords / ITEMS_PER_PAGE);

    }    
    
    return (
        <>
            <Search
                allBookData={allBookData}
                data={dataCollections}
                query={query}
                currentPage={currentPage}
                initialPage={initialPage}
                itemsPerPage={ITEMS_PER_PAGE}
                totalPages={totalPages}
            />
        </>
    )
}
