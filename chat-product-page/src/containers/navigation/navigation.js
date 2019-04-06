/**
 * Created by Damian.Czarnota on 2019-03-04.
 */

import React, {Component, Fragment} from 'react';
import NavigationLogo from '../../components/navigationLogo/navigationLogo';
import './navigation.scss';
import { Link } from "react-scroll";

export default class Navigation extends Component{

    constructor(props){
        super(props);
        this.state = {
            showMobileMenu:false
        };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }
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

    toggleMobileMenu = () =>{
        this.setState({showMobileMenu:!this.state.showMobileMenu});
    };

    render(){
        let { showMobileMenu } = this.state;
        return(
            <Fragment>
                <nav className="navigation">
                    <div className="navigation__logo">
                        <NavigationLogo />
                    </div>
                    <div className="navigation__list">
                        <Link to="about_us" offset={-100} smooth={true} spy={true} activeClass="navigation__item--active" className="navigation__item">About us</Link>
                        <Link to="why_us" offset={-100} smooth={true} spy={true} activeClass="navigation__item--active" className="navigation__item">Why us?</Link>
                        <a href={process.env.REACT_APP_WEB_APP_LOGIN} className="navigation__item navigation__item--login">Log in</a>
                    </div>
                    <div className="navigation__hamburger" onClick={this.toggleMobileMenu}>
                        <div className={showMobileMenu?'navigation__bar navigation__bar--transform':'navigation__bar'}></div>
                        <div className={showMobileMenu?'navigation__bar navigation__bar--transform':'navigation__bar'}></div>
                        <div className={showMobileMenu?'navigation__bar navigation__bar--transform':'navigation__bar'}></div>
                    </div>
                </nav>
                <nav className={showMobileMenu?'navigation__mobile navigation__mobile--transform':'navigation__mobile'}>
                    <div className="navigation__list--mobile">
                        <Link to="about_us" offset={-100} smooth={true} spy={true} activeClass="navigation__item--active" className="navigation__item navigation__item--mobile">
                            About us
                        </Link>
                        <Link to="why_us" offset={-100} smooth={true} spy={true} activeClass="navigation__item--active" className="navigation__item navigation__item--mobile">
                            Why us?
                        </Link>
                        <Link to="/login" className="navigation__item navigation__item--login navigation__item--mobile">Log in</Link>
                    </div>
                </nav>
            </Fragment>
        )
    }
}