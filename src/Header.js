import React,{Component}from 'react';
import Background from './img/lingmarc.jpg';
import './Header.css';

const mystyles = {
    backgroundImage: `url( ${Background} )`,
    height: '80vh',
    backgroundSize: 'cover'
}
class Header extends Component{

    render(){
        return (
            <header style={mystyles}>
                <hi>{this.props.title}</hi>
                <p> paraf</p>
                <a href="#button">{this.props.button}</a>
            </header>
        );
    }

};

export default Header;