import React, { useState, useEffect } from 'react';
import styles from '../SearchInput/SearchInput.module.css';

// Define placeholder text options for the search input
const placeholders = [
	'Search for starships...',
	'Search for films...',
	'Search for vehicles...',
];

function SearchInput({ query, setQuery, handleSearch }) {
	// State to manage the current placeholder text
	const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0]);

	// Effect to rotate through placeholder text options
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPlaceholder(
				placeholders[(placeholders.indexOf(currentPlaceholder) + 1) % placeholders.length]
			);
		}, 1000);

		// Cleanup function to clear the interval
		return () => clearInterval(interval);
	}, [currentPlaceholder]);

	// Handler for input change
	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className={styles['search-input']}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSearch();
				}}
			>
				<label htmlFor='search-input' className={styles['floating-label']}>
					Empire Explorer
				</label>
				<input
					type='text'
					id='search-input'
					placeholder={currentPlaceholder}
					value={query}
					onChange={handleInputChange}
					aria-label='Search'
					aria-required='true'
				/>
				<button type='submit' className={styles['lightsaber-button']}>
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchInput;
