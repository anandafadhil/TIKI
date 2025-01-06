const BASE_URL = 'https://titip-dev.tikiibookstore.com/api'

export const fetchAllData = async ({
    endpoint,
    pageSize = 0,
    pageNumber = 1,
    search = ""
}) => {
    try {

        let url = `${BASE_URL}${endpoint}?pageSize=${pageSize}&page=${pageNumber}&search=${search}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }

};

export const fetchDataCollections = async ({ endpoint,
    pageSize = 0,
    pageNumber = 1,
    search = "" }) => {
    try {

        let url = `${BASE_URL}${endpoint}?pageSize=${pageSize}&page=${pageNumber}&query=${search}`;

        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            return { data: [], message: errorData.message || "An error occurred" };
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

export const fetchDataHomePage = async ({ endpoint,
    pageSize = 0,
    pageNumber = 1,
    search = "" }) => {
    try {

        let url = `${BASE_URL}${endpoint}?pageSize=${pageSize}&page=${pageNumber}&search=${search}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

export const fetchDataCategory = async (
    { endpoint,
        pageSize = 0,
        pageNumber = 1,
        category }) => {
    try {

        let url = `${BASE_URL}${endpoint}?pageSize=${pageSize}&page=${pageNumber}&category=${category}`;

        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            return { data: [], message: errorData.message || "An error occurred" };
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};
