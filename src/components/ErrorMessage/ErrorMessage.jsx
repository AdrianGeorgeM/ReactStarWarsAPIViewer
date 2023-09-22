import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
	<div className={styles['error-message']}>
		<p className={styles['error-text']}>
			<span role='img' aria-label='Warning Icon'>
				⚠️
			</span>
			<span className={styles['error-main-text']}>The Force isn't with us today. </span>
		</p>
		<p className={styles['error-description']}>{message}</p>
	</div>
);

export default ErrorMessage;
