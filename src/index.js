
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services'

import * as serviceWorker from './serviceWorker';

//adding my imports
//import Navbar from "./component/navbar.jsx";
//import Footer from "./component/footer.jsx";
//import 'bootstrap/dist/css/bootstrap.css';
//import "./styles/index.scss";

//adding my imports
import Navbar from "./componentspage/navbar.jsx";
import Footer from "./componentspage/footer.jsx";

/*ReactDOM.render(
	<React.Fragment>
		<Navigation />
        <Navbar />
        <Footer />
		<Services />
    </React.Fragment>, document.getElementById('root'));

    */
ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<Navigation logoTitle="React Portfólio" color="blue"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


