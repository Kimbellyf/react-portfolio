import React,{Component}from 'react';
//import Background from '../../img/lingmarc.jpg';
import './Header.css';

const mystyles = {
   // backgroundImage: `url( ${Background} )`,
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}
class Header extends Component{

    render(){
        return (
            <header style={mystyles}>
                <h1>{this.props.title}</h1>
                <p>Aprender hoje e sempre</p>
                <a href="#button">{this.props.button}</a>
            </header>
        );
    }

};

export default Header;