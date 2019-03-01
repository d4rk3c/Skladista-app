import React, { Component } from 'react';

import './css/styles.css';
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Button />
        <Footer />
        
        
      </div>
    );
  }
}


export default App;
