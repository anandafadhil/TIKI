// const BASE_URL = 'https://titip-dev.tikiibookstore.com/api'
// export const fetchData = async (endpoint) => {
//     try {
//         const url = `${BASE_URL}${endpoint}`;
//         console.log(`Fetching data from: ${url}`);
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} - ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data); // Debug to see the output
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//         throw error;
//     }
// };