// Function to check if the query is valid
export const isValidQuery = (query) =>
	// Check if the query is one of the valid options (case-insensitive)
	['starships', 'films', 'vehicles'].includes(query.toLowerCase());

// Function to handle the search query
export const handleSearch = (query, setActiveQuery, setIsInvalidQuery) => {
	// Trim the query to remove leading and trailing spaces
	const trimmedQuery = query.trim();

	// Check if the query is empty after trimming
	if (!trimmedQuery) return;

	// Check if the trimmed query is a valid option
	if (isValidQuery(trimmedQuery)) {
		// Set the active query to the trimmed query in lowercase
		setActiveQuery(trimmedQuery.toLowerCase());
		// Reset the invalid query flag
		setIsInvalidQuery(false);
	} else {
		// Set the invalid query flag if the query is not valid
		setIsInvalidQuery(true);
	}
};
