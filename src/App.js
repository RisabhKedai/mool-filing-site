import {useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router,} from 'react-router-dom';

import HomePage from './Pages/HomePage';

function App(){
  useEffect(()=>{console.log("This is the first page")},[])
  return (
    <Router>
      <HomePage/>
    </Router>
  );
}


export default App;