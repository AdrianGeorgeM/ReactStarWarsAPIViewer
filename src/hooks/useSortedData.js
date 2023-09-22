import { useMemo } from 'react';

// Define sorting options as constants
const SORT_OPTIONS = {
	NAME: 'name',
	TITLE: 'title',
};

// Custom hook for sorting data based on the selected sortType
export const useSortedData = (data, sortType) => {
	return useMemo(() => {
		// Check if data is available, if not, return null
		if (!data) return null;

		// Sort the data array based on the selected sortType
		return [...data].sort((a, b) => {
			if (sortType === SORT_OPTIONS.NAME)
				// Sort by name if the sortType is NAME
				return (a.name || '').localeCompare(b.name || '');
			if (sortType === SORT_OPTIONS.TITLE)
				// Sort by title if the sortType is TITLE
				return (a.title || '').localeCompare(b.title || '');

			// Default case: no sorting
			return 0;
		});
	}, [data, sortType]); // Recalculate when data or sortType changes
};
