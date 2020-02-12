import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './componentspage/testeum/Navigation';
import Header from './componentspage/testeum/Header';
import registerServiceWorker from './serviceWorker';
import './index.scss';
import Services from './componentspage/testeum/Services'
import Footer from './componentspage/footer';
import Projects from './componentspage/projects';
import Contact from './componentspage/contact';
import About from './componentspage/about'

class App extends Component{
  render(){
    return (
      <div>
        <Navigation logoTitle="Kimbelly Ferraz"/>
        <Header title= "Desenvolvedora de software" button="Veja mais"/>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
