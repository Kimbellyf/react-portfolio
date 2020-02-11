import React, {Component} from 'react';
import logo from './logo.svg';
import './Navigation.css';
import { render } from '@testing-library/react';

class  Navigation extends Component{
    render(){
        const sections = ['Home','About','Services', 'Contact']
        const navLinks = sections.map(section =>{
            return (
                <li><a href={'#' + section} >{section}</a></li>
            )
        });
        return (
            <nav>
                <h2 className="logo"> {this.props.logoTitle}>React project</h2>

                <ul>
                    {navLinks}
                </ul>
            </nav>
            
        );
    }
}

export default Navigation;
