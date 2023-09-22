import React from 'react';
import FilmInfo from '../FilmInfo/FilmInfo';
import StarshipInfo from '../StarshipInfo/StarshipInfo';
import styles from '../SearchResults/SearchResults.module.css';

const SearchResults = ({ results }) => {
	const renderResultItem = (item, index) => {
		return (
			<div className={styles['result-card']} key={index}>
				{item.title ? <FilmInfo {...item} /> : <StarshipInfo {...item} />}
			</div>
		);
	};

	return (
		<div className={styles['results-container']}>{results.map(renderResultItem)}</div>
	);
};

export default SearchResults;
