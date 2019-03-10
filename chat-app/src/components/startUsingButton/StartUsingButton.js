/**
 * Created by Damian.Czarnota on 2019-03-05.
 */

import React, { Component } from 'react';
import './StartUsingButton.scss';

export default class StartUsingButton extends Component {

    render(){
        return(
            <div className="enjoy">
                <button className="button button--big button--primary">Enjoy!</button>
                <div className="enjoy__add">
                    Click and start chatting!
                </div>
            </div>
        )
    }

}