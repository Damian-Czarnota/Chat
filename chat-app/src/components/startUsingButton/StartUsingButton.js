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
                <button className="button button--big button--primary">{text}</button>
                {!withoutDescription&&(
                    <SVGFill />)}
            </div>
        )
    }

}