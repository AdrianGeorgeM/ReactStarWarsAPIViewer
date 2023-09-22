import { useState, useEffect, useCallback } from 'react';

const BASE_URL = 'https://swapi.dev/api/';

// Function to fetch data from the API with error handling
const fetchDataFromAPI = async (url) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch, status: ${response.status}`);
	}
	return await response.json();
};

// Custom hook to fetch data from the Star Wars API
export const useFetchData = (query) => {
	const [data, setData] = useState([]); // State to store fetched data
	const [isLoading, setIsLoading] = useState(false); // State to track loading status
	const [isError, setIsError] = useState(false); // State to track error status

	// Callback function to fetch data recursively
	const fetchData = useCallback(async (url) => {
		setIsLoading(true); // Set loading state to true
		setIsError(false); // Clear error state

		try {
			const apiData = await fetchDataFromAPI(url); // Fetch data from the API
			setData((prevData) => [...prevData, ...apiData.results]); // Append new data to the existing data array

			if (apiData.next) {
				await fetchData(apiData.next); // If there is a "next" URL, fetch more data recursively
			}
		} catch (error) {
			console.error('Fetch Error:', error); // Log any fetch errors
			setIsError(true); // Set error state to true
		} finally {
			setIsLoading(false); // Set loading state to false when the fetch operation is complete
		}
	}, []);

	// Effect to trigger data fetching when the query changes
	useEffect(() => {
		if (query) {
			setData([]); // Clear previous data when a new query is provided
			fetchData(`${BASE_URL}${query}/`); // Start fetching data from the API
		}
	}, [query, fetchData]); // Include fetchData as a dependency to avoid stale closures

	// Return the data, loading status, and error status
	return { data, isLoading, isError };
};

export default useFetchData;
