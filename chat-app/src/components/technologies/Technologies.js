/**
 * Created by Damian.Czarnota on 2019-03-14.
 */


import React, { Component, Fragment } from 'react';
import HexSeparator from '../hex/HexSeparator';

export default class  Technologies extends Component {
    render(){
        let config  = [
            {url:'/img/react.png'},
            {url:'/img/spring.png'}
        ];
        return(
            <Fragment>
                <div className="section section--technologies">
                    <HexSeparator />
                    <div className="wrapper">
                        <div className="section__description">
                            <h2 className="section__title">Technologies we used</h2>
                        </div>
                        <div className="section__boxes">
                            {config&&(config.map((item,key) =>(
                                    <div className="box box--2" key={key}>
                                        <div className="box__wrapper">
                                            <img src={item.url} className="img--circle" />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}