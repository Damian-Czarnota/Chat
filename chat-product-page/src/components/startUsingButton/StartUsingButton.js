/**
 * Created by Damian.Czarnota on 2019-03-05.
 */

import React, { Component } from 'react';
import './StartUsingButton.scss';
import SVGFill from '../SVGFill/SVGFill';
import PropTypes from 'prop-types';

export default class StartUsingButton extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        withoutDescription: PropTypes.bool
    };

    render(){
        let { text, withoutDescription } = this.props;
        return(
            <div className="enjoy">
                <a className="button button--big button--primary" href={process.env.REACT_APP_WEB_APP_URL}>{text}</a>
                {!withoutDescription&&(
                    <SVGFill />)}
            </div>
        )
    }

}