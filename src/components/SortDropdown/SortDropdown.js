import React from 'react';
import styles from '../SortDropdown/SortDropdown.module.css';

const SortDropdown = ({ sortOptions, value, onChange }) => {
	return (
		<div className={styles['dropdown-container']}>
			<select className={styles['dropdown']} onChange={onChange} value={value}>
				{Object.keys(sortOptions).map((key) => (
					<option key={key} value={sortOptions[key]}>
						{key}
					</option>
				))}
			</select>
		</div>
	);
};

export default SortDropdown;
