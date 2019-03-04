/**
 * Created by Damian.Czarnota on 2019-03-04.
 */

import React, {Component} from 'react';
import NavigationLogo from '../navigation-logo';
import './navigation.scss';

export default class Navigation extends Component{

    render(){
        return(
            <nav className="navigation">
                <div className="navigation__logo">
                    <NavigationLogo />
                </div>
                <div className="navigation__list">
                    <a href="#" className="navigation__item">About us</a>
                    <a href="#" className="navigation__item">Instruction</a>
                    <a href="#" className="navigation__item">Log in</a>
                </div>
            </nav>
        )
    }
}