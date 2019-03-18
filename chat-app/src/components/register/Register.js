/**
 * Created by Damian.Czarnota on 2019-03-14.
 */


import React, { Component } from 'react';
import HexBackground from '../hex/HexBackground';
import StartUsingButton from '../../components/startUsingButton/StartUsingButton';

export default class Register extends Component {
    render(){
        return(
                <div className="section section--register">
                    <div className="wrapper">
                        <div className="section__boxes">
                            <div className="box box--2 box--fill">
                                <div className="box__wrapper box__wrapper--left">
                                    <h2 className="section__title">Title</h2>
                                    <p className="section__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempor libero. Nam convallis mollis massa.
                                        Duis tempor, odio vitae pulvinar maximus, arcu justo scelerisque purus, quis interdum elit sapien quis tortor.
                                        Nullam vel magna vel orci malesuada convallis nec sit amet justo. Etiam at hendrerit risus, sed ultricies ipsum.
                                        Pellentesque in elit id magna sollicitudin imperdiet ac et enim. Cras tincidunt eget tortor id vehicula.
                                    </p>
                                </div>
                                <div className="wrapper__background">
                                    <HexBackground />
                                </div>
                            </div>
                            <div className="box box--2 box--background">
                                <div className="box__wrapper">
                                    <StartUsingButton text="Register now!" withoutDescription="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}