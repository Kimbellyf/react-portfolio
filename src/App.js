import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation';
import Header from './Header';
import registerServiceWorker from './serviceWorker';
import Services from './Services';

class App extends Component{
  render(){
    return (
      <div>
        <Navigation logoTitle="Kimbelly Ferraz"/>
        <Header title= "K" button="Veja mais"/>
      </div>
    );
  }
}

export default App;
