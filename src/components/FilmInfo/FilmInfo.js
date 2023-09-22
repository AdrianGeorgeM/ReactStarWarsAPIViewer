import React from 'react';
import styles from '../FilmInfo/FilmInfo.module.css';

const FilmInfo = ({
	title,
	episode_id,
	director,
	producer,
	release_date,
	opening_crawl,
}) => (
	<>
		<h3 className={styles.title}>{title}</h3>
		<p className={styles.episode}>Episode: {episode_id}</p>
		<p className={styles.director}>Director: {director}</p>
		<p className={styles.producer}>Producer: {producer}</p>
		<p className={styles.releaseDate}>Release Date: {release_date}</p>
		<p className={styles.openingCrawl}>Opening Crawl: {opening_crawl}</p>
	</>
);

export default FilmInfo;
