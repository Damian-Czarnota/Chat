/**
 * Created by Damian.Czarnota on 2019-03-14.
 */


import React, { Component, Fragment } from 'react';
import HexSeparator from '../hex/HexSeparator';
import './technologies.scss'
import AnimationHandler from "../animationHandler/animationHandler";

export default class  Technologies extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        let config  = [
            {url:'/img/react.png', title: 'React'},
            {url:'/img/spring.png', title: 'Spring'}
        ];
        return(
            <Fragment>
                <AnimationHandler reference={this.myRef} animation={'fadeInRightBit'}/>
                <div className="section section--technologies">
                    <HexSeparator />
                    <div className="wrapper">
                        <div className="section__description">
                            <h2 className="section__title">Technologies we used</h2>
                        </div>
                        <div className="section__boxes hidden" ref={this.myRef}>
                            {config&&(config.map((item,key) =>(
                                    <div className="box box--2" key={key}>
                                        <div className="box__wrapper">
                                            <figure className="box__image">
                                                <img src={item.url} alt={item.url}/>
                                                <figcaption>
                                                    <span>{item.title}</span>
                                                </figcaption>
                                            </figure>
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