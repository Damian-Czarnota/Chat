/**
 * Created by Damian.Czarnota on 2019-03-04.
 */

import React, {Component} from 'react';
import NavigationLogo from '../navigationLogo/navigationLogo';
import './navigation.scss';

export default class Navigation extends Component{

    componentDidMount() {
        window.onscroll = () => {
            let nav = document.querySelector('.navigation');
            if(window.pageYOffset > 0)
                nav.classList.add('shadow');
            else
                nav.classList.remove('shadow');
            };
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    render(){
        return(
            <nav className="navigation">
                <div className="navigation__logo">
                    <NavigationLogo />
                </div>
                <div className="navigation__list">
                    <a href="#" className="navigation__item">About us</a>
                    <a href="#" className="navigation__item">Instruction</a>
                    <a href="#" className="navigation__item navigation__item--login">Log in</a>
                </div>
            </nav>
        )
    }
}