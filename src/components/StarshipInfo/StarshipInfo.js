import React from 'react';
import styles from './StarshipInfo.module.css';

const StarshipInfo = ({
	name,
	model,
	manufacturer,
	cost_in_credits,
	length,
	crew,
	passengers,
	cargo_capacity,
}) => (
	<>
		<h3 className={styles.starshipTitle}>{name}</h3>
		<p className={styles.starshipModel}>Model: {model}</p>
		<p className={styles.starshipManufacturer}>Manufacturer: {manufacturer}</p>
		<p className={styles.starshipCost}>Cost: {cost_in_credits}</p>
		<p className={styles.starshipLength}>Length: {length}</p>
		<p className={styles.starshipCrew}>Crew: {crew}</p>
		<p className={styles.starshipPassengers}>Passengers: {passengers}</p>
		<p className={styles.starshipCargo}>Cargo Capacity: {cargo_capacity}</p>
	</>
);

export default StarshipInfo;
