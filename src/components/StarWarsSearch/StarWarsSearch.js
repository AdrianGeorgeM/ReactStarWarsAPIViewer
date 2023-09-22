import React, { useCallback, useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadingMessage from '../LoadingMessage/LoadingMessage';
import useFetchData from '../../api/useFetchData';
import { handleSearch as handleSearchHelper } from '../../utils/handleSearch';
import useQueryState from '../../hooks/useQueryState';
import { useSortedData } from '../../hooks/useSortedData';
import {
	INVALID_QUERY_MESSAGE,
	FETCH_ERROR_MESSAGE,
} from '../../constants/errorMessages';
import SortDropdown from '../SortDropdown/SortDropdown';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import styles from '../StarWarsSearch/StarWarsSearch.module.css';

const renderConditionalComponents = (isInvalidQuery, isLoading, isError, data) => {
	if (isInvalidQuery) return <ErrorMessage message={INVALID_QUERY_MESSAGE} />;
	if (isLoading) return <LoadingMessage />;
	if (isError) return <ErrorMessage message={FETCH_ERROR_MESSAGE} />;
	if (data) return <SearchResults results={data} />;
	return null;
};

const StarWarsSearch = () => {
	// State management and data fetching hooks
	const {
		query,
		setQuery,
		activeQuery,
		setActiveQuery,
		isInvalidQuery,
		setIsInvalidQuery,
	} = useQueryState();
	const { data, isLoading, isError } = useFetchData(activeQuery);
	const [sortType, setSortType] = useState(SORT_OPTIONS.NAME);

	const sortedData = useSortedData(data, sortType);

	// Function to handle search (defined using useCallback for optimization)
	const handleSearch = useCallback(
		() => handleSearchHelper(query, setActiveQuery, setIsInvalidQuery),
		[query, setActiveQuery, setIsInvalidQuery]
	);

	return (
		<div className={styles['search-container']}>
			<SearchInput setQuery={setQuery} handleSearch={handleSearch} />
			<div className={styles['sort-container']}>
				{!isLoading && data && Object.keys(data).length > 0 && (
					<>
						<label htmlFor='sort-dropdown'>Sort By:</label>
						<SortDropdown
							sortOptions={SORT_OPTIONS}
							value={sortType}
							onChange={(e) => setSortType(e.target.value)}
							id='sort-dropdown'
						/>
					</>
				)}
			</div>
			<div className={styles['results-container']}>
				{renderConditionalComponents(isInvalidQuery, isLoading, isError, sortedData)}
			</div>
		</div>
	);
};

export default StarWarsSearch;
