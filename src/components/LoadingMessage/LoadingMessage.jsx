import React from 'react';
import styles from './LoadingMessage.module.css';

const LoadingMessage = () => (
	<div className={styles['loading-message']}>
		<div className={styles['loading-spinner']}></div>
		<p className={styles['loading-text']}>Loading...</p>
	</div>
);

export default LoadingMessage;
