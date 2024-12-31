import SelectedBook from "./selectedBook";

export default async function Page() {
    // const data = await fetchData('/books');
    const data = []
    return (
        <>
            <SelectedBook data={data} />
        </>
    );
}