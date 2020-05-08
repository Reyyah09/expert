import React from 'react';
import Navbar from './components/navbar/navbar';
import Body from '../src/components/body/body';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asserts/style/style.scss';
function App () {
  return ( 
    <div className="App">
      <Navbar/>
     
      <Body/>
      
    </div>
  );
}

export default App;

