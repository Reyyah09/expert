import React from 'react';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import Testing from './components/Testing/testing'
import 'bootstrap/dist/css/bootstrap.min.css';
function App () {
  return ( 
    <div className="App">
      <Navbar/>
      <Testing/>
      <Body />
      
    </div>
  );
}

export default App;

