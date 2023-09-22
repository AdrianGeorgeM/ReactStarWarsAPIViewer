import React from 'react';

// Custom hook for managing query state
const useQueryState = () => {
	// Initialize state variables for query, activeQuery, and isInvalidQuery
	const [query, setQuery] = React.useState('');
	const [activeQuery, setActiveQuery] = React.useState(null);
	const [isInvalidQuery, setIsInvalidQuery] = React.useState(false);

	// Return an object containing the state variables and their respective setters
	return {
		query, // Current query string
		setQuery, // Function to set the query string
		activeQuery, // Current active query (e.g., after search)
		setActiveQuery, // Function to set the active query
		isInvalidQuery, // Flag indicating if the query is invalid
		setIsInvalidQuery, // Function to set the invalid query flag
	};
};

export default useQueryState;
