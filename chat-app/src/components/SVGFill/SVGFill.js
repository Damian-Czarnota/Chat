/**
 * Created by Damian.Czarnota on 2019-03-13.
 */

import React, { Component, Fragment } from 'react';
import "./SVGFill.scss";

export default class SVGFill extends Component {

    render(){
        return(
            <Fragment>
                <svg className="svg" viewBox="-150 -25 600 100">
                    <text textAnchor="start" x="10" y="30" className="svg__text svg__text--stroke" clipPath="url(#start)">Start</text>
                    <text textAnchor="start" x="100" y="30" className="svg__text svg__text--stroke" clipPath="url(#using)">using</text>
                    <text textAnchor="start" x="200" y="30" className="svg__text svg__text--stroke" clipPath="url(#now)">now!</text>
                    <text textAnchor="start" x="10" y="30" className="svg__text svg__text--stroke svg__text--stroke2" clipPath="url(#start)">Start</text>
                    <text textAnchor="start" x="100" y="30" className="svg__text svg__text--stroke svg__text--stroke2" clipPath="url(#using)">using</text>
                    <text textAnchor="start" x="200" y="30" className="svg__text svg__text--stroke svg__text--stroke2" clipPath="url(#now)">now!</text>
                    <defs>
                        <clipPath id="start">
                            <text textAnchor="start" x="10" y="30" className="svg__text">Start</text>
                        </clipPath>
                        <clipPath id="using">
                            <text textAnchor="start" x="100" y="30" className="svg__text">using</text>
                        </clipPath>
                        <clipPath id="now">
                            <text textAnchor="start" x="200" y="30" className="svg__text">now!</text>
                        </clipPath>
                    </defs>
                    </svg>
            </Fragment>
        )
    }
}