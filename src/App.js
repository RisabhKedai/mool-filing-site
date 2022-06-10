import {useEffect} from 'react';
import './App.less';

import {BrowserRouter as Router,} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ResourceCard from './Components/ResourceCard';

function App(){
	useEffect(()=>{console.log("This is the first page")},[])
		return (
			<Router>
				<HomePage/>
			</Router>
	);
}


export default App;