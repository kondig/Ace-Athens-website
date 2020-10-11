import React, { Component } from 'react';
import './App.css';
//components
import {Header} from './components/Header'
import {Main} from './components/Main';
import {Footer} from './components/Footer';
//modules
// import FontAwesome from 'react-fontawesome';
// import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
// import {Link} from 'react-router-dom';
// import logo from './images/logo-ace-athens.png';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Main />
        <Footer />

      </div>
    );
  }
}

export default App;
