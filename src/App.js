import React from 'react';
import './App.css';
import StarWarsSearch from '../src/components/StarWarsSearch/StarWarsSearch';

const App = () => {
	return (
		<div className='App'>
			<h1 className='App-title'>Star Wars Search</h1>
			<StarWarsSearch />
		</div>
	);
};

export default App;
