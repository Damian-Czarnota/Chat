/**
 * Created by Damian.Czarnota on 2019-03-14.
 */

import React, { Component } from 'react';
import './Hex.scss';

export default class HexBackground extends Component {

    render(){
        const SVG = `<svg viewBox="0 0 200 100" width="600px" height="400px">
                <defs>
                    <g id="hex">
                        <polygon stroke="#000000" stroke-width="0.5" points="5,-9 -5,-9 -10,0 -5,9 5,9 10,0" />
                    </g>
                </defs>

                <g>
                    <use xlink:href="#hex" transform="translate(65, 32)"/>
                    <use xlink:href="#hex" transform="translate(50, 41)"/>
                    <use xlink:href="#hex" transform="translate(35, 50)"/>
                    <use xlink:href="#hex" transform="translate(65, 50)"/>
                    <use xlink:href="#hex" transform="translate(50, 59)"/>
                    <use xlink:href="#hex" transform="translate(65, 68)"/>
                    <use xlink:href="#hex" transform="translate(80, 41)"/>
                    <use xlink:href="#hex" transform="translate(80, 59)"/>
                    <use xlink:href="#hex" transform="translate(95,50)"/>
                </g>`;

        return(
            <div className="fly" dangerouslySetInnerHTML={{ __html: SVG }} />
        )
    }
}