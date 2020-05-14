import React from 'react';
import Navbar from './components/navbar/navbar';
import Body from '../src/components/body/body';
import Project from '../src/components/projects/project'
import Process from '../src/components/process/process'
import Contact from '../src/components/contact/contact'
import Footer from '../src/components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './asserts/style/style.scss';
function App () {
  return ( 
    <div className="App">
      <Navbar/>
      <Body/>
      <Project/>
      <Process/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

