import React from 'react';
import Navbar from './components/navbar/navbar';
import Body from '../src/components/body/body';
import Project from '../src/components/projects/project'
import 'bootstrap/dist/css/bootstrap.min.css';
import './asserts/style/style.scss';
function App () {
  return ( 
    <div className="App">
      <Navbar/>
     <Project/>
      <Body/>
      
      
    </div>
  );
}

export default App;

