/**
 * Created by Damian.Czarnota on 2019-03-14.
 */


import React, { Component } from 'react';
import HexBackground from '../hex/HexBackground';

export default class Register extends Component {
    render(){
        return(
                <div className="section section--register">
                    <div className="wrapper">
                        <div className="section__boxes">
                            <div className="box box--2">
                                <h2>TREST</h2>
                            </div>
                            <div className="box box--2 box--fill">

                            </div>
                        </div>
                    </div>
                    <div className="wrapper__background">
                        <HexBackground />
                    </div>
                </div>
        )
    }
}